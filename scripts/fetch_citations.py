#!/usr/bin/env python3
"""Fetch citation count from Google Scholar and write to public/citations.json."""

import json
import os
from datetime import date

SCHOLAR_ID = "4HIGa7AAAAAJ"
OUT_PATH = os.path.join(os.path.dirname(__file__), "..", "public", "citations.json")


def fetch_citations():
    try:
        from scholarly import scholarly
        author = scholarly.search_author_id(SCHOLAR_ID)
        scholarly.fill(author, sections=["indices"])
        count = author.get("citedby", 0)
    except Exception as e:
        print(f"Error fetching citations: {e}")
        # Keep existing value on failure
        try:
            with open(OUT_PATH) as f:
                count = json.load(f).get("citations", 0)
        except Exception:
            count = 0

    payload = {"citations": count, "updated": str(date.today())}
    with open(OUT_PATH, "w") as f:
        json.dump(payload, f)
    print(f"Citations: {count} (saved to {OUT_PATH})")


if __name__ == "__main__":
    fetch_citations()
