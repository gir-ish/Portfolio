#!/usr/bin/env python3
"""Fetch citation count from Google Scholar and write to public/citations.json."""

import json
import os
import re
import urllib.request
from datetime import date

SCHOLAR_ID = "4HIGa7AAAAAJ"
OUT_PATH = os.path.join(os.path.dirname(__file__), "..", "public", "citations.json")


def fetch_via_scholarly():
    from scholarly import scholarly
    author = scholarly.search_author_id(SCHOLAR_ID)
    scholarly.fill(author, sections=["indices"])
    return author.get("citedby", None)


def fetch_via_scrape():
    """Lightweight fallback: scrape the public Scholar profile page."""
    url = f"https://scholar.google.com/citations?user={SCHOLAR_ID}&hl=en"
    req = urllib.request.Request(url, headers={
        "User-Agent": (
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
            "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        )
    })
    with urllib.request.urlopen(req, timeout=15) as resp:
        html = resp.read().decode("utf-8", errors="ignore")
    # Scholar renders total citations in a <td> after the "Citations" header
    match = re.search(
        r'Citations</a></td><td[^>]*>(\d+)</td>', html
    )
    if match:
        return int(match.group(1))
    # Broader fallback pattern
    match = re.search(r'"gs_ri".*?(\d{2,})', html)
    return int(match.group(1)) if match else None


def load_existing():
    try:
        with open(OUT_PATH) as f:
            return json.load(f).get("citations", 0)
    except Exception:
        return 0


def fetch_citations():
    count = None

    # Try scholarly first
    try:
        count = fetch_via_scholarly()
        print(f"scholarly succeeded: {count}")
    except Exception as e:
        print(f"scholarly failed: {e}")

    # Fallback to scraping
    if count is None:
        try:
            count = fetch_via_scrape()
            print(f"scrape succeeded: {count}")
        except Exception as e:
            print(f"scrape failed: {e}")

    # Keep existing value if both fail
    if count is None:
        count = load_existing()
        print(f"using existing value: {count}")

    payload = {"citations": count, "updated": str(date.today())}
    with open(OUT_PATH, "w") as f:
        json.dump(payload, f)
    print(f"Saved citations={count} to {OUT_PATH}")


if __name__ == "__main__":
    fetch_citations()
