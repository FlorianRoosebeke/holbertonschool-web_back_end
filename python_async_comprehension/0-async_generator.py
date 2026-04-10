#!/usr/bin/env python3
"""Basic async syntax: wait for a random delay and return it."""

import asyncio
import random


async def async_generator():
    """Wait for a random delay between 0 and max_delay seconds and return it."""
    loop = 10
    for _ in range(loop):
        await asyncio.sleep(1)
        i = random.uniform(0, 10)
        yield i
