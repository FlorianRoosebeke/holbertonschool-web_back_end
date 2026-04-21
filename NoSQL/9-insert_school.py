#!/usr/bin/env python3
"""Module that inserts a new school document into a MongoDB collection."""


def insert_school(mongo_collection, **kwargs):
    """Insert a new school document into the collection.
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
