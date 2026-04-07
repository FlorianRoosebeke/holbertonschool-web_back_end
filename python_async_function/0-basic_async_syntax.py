#!/usr/bin/env python3
"""Basic async syntax"""

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """Wait for a random delay between 0 and max_delay (included) and return it."""
    delay: float = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay

#!/usr/bin/env python3
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random

async def main():
    print(await wait_random())
    print(await wait_random(5))
    print(await wait_random(15))

if __name__ == "__main__":
    asyncio.run(main())