#!/usr/bin/env python3
"""Module that inserts a new school document into a MongoDB collection."""


def update_topics(mongo_collection, name, topics):
    """Update topics with topics list"""
    mongo_collection.update_many({"name": name}, {"$set": {"topics": topics}})
