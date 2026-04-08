#!/usr/bin/env python3
"""Module for sum_list function with type annotations."""

from typing import List


def sum_list(input_list: List[float]) -> float:
    """Return the sum of a list of floats."""
    total = sum(input_list)
    return total
