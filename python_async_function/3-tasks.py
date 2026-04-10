#!/usr/bin/env python3
"""Module to create an asyncio Task for wait_random."""

import asyncio
from typing import Union

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """Return an asyncio.Task running wait_random(max_delay)."""
    return asyncio.create_task(wait_random(max_delay))