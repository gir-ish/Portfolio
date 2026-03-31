#!/usr/bin/env python3
"""Fetch citation count from Google Scholar profile page."""

import json
import os
import re
import urllib.request
from datetime import date

SCHOLAR_ID = "4HIGa7AAAAAJ"
OUT_PATH = os.path.join(os.path.dirname(__file__), "..", "public", "citations.json")

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
    ),
    "Accept-Language": "en-US,en;q=0.9",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
}


def scrape_citations():
    url = f"https://scholar.google.com/citations?user={SCHOLAR_ID}&hl=en"
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=20) as resp:
        html = resp.read().decode("utf-8", errors="ignore")

    # Primary: <td class="gsc_rsb_std">15</td> (first value = all-time citations)
    match = re.search(r'gsc_rsb_std[^>]*>(\d+)<', html)
    if match:
        return int(match.group(1))

    # Fallback pattern
    match = re.search(r'"citedby"\s*:\s*(\d+)', html)
    if match:
        return int(match.group(1))

    return None


def load_existing():
    try:
        with open(OUT_PATH) as f:
            return json.load(f).get("citations", 0)
    except Exception:
        return 0


def main():
    count = None
    try:
        count = scrape_citations()
        print(f"Fetched citations: {count}")
    except Exception as e:
        print(f"Fetch failed: {e}")

    if count is None:
        count = load_existing()
        print(f"Keeping existing value: {count}")

    payload = {"citations": count, "updated": str(date.today())}
    with open(OUT_PATH, "w") as f:
        json.dump(payload, f)
    print(f"Saved: {payload}")


if __name__ == "__main__":
    main()
