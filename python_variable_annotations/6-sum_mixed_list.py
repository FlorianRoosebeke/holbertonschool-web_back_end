#!/usr/bin/env python3
from typing import List


"""Module for to_str function with type annotations."""



def sum_mixed_list(mxd_lst: List[int, float]) -> float:
    """Return the sum of a list of floats."""
    total = sum(mxd_lst)
    return total