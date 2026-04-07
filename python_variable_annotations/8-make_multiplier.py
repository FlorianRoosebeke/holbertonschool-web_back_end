#!/usr/bin/env python3
from typing import Callable


"""Module for make_multiplier function with type annotations."""


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Return a function that multiplies a float by multiplier."""

    def multiply(value: float) -> float:
        return value * multiplier

    return multiply
