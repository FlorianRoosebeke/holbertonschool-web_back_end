#!/usr/bin/env python3
"""Pagination utility module."""


def index_range(page, page_size) -> tuple[int, int]:
    """Return the start and end indexes for a pagination page."""
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)
