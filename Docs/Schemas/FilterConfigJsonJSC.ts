export default {
    "type": "object",
    "properties": {
        "id": {
            "description": "An id/name for this filter, used to set the URL parameters",
            "type": "string"
        },
        "options": {
            "description": "The options for a filter\nIf there are multiple options these will be a list of radio buttons\nIf there is only one option this will be a checkbox\nFiltering is done based on the given osmTags that are compared to the objects in that layer.",
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "question": {},
                    "osmTags": {
                        "anyOf": [
                            {
                                "$ref": "#/definitions/AndOrTagConfigJson"
                            },
                            {
                                "type": "string"
                            }
                        ]
                    },
                    "default": {
                        "type": "boolean"
                    },
                    "fields": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string"
                                },
                                "type": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "name"
                            ]
                        }
                    }
                },
                "required": [
                    "question"
                ]
            }
        }
    },
    "required": [
        "id",
        "options"
    ],
    "definitions": {
        "AndOrTagConfigJson": {
            "type": "object",
            "properties": {
                "and": {
                    "type": "array",
                    "items": {
                        "anyOf": [
                            {
                                "$ref": "#/definitions/AndOrTagConfigJson"
                            },
                            {
                                "type": "string"
                            }
                        ]
                    }
                },
                "or": {
                    "type": "array",
                    "items": {
                        "anyOf": [
                            {
                                "$ref": "#/definitions/AndOrTagConfigJson"
                            },
                            {
                                "type": "string"
                            }
                        ]
                    }
                }
            }
        }
    },
    "$schema": "http://json-schema.org/draft-07/schema#"
}