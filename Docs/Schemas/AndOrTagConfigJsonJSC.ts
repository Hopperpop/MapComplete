export default {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$ref": "#/definitions/AndOrTagConfigJson",
  "definitions": {
    "AndOrTagConfigJson": {
      "type": "object",
      "properties": {
        "and": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "$ref": "#/definitions/AndOrTagConfigJson"
              }
            ]
          }
        },
        "or": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "$ref": "#/definitions/AndOrTagConfigJson"
              }
            ]
          }
        }
      }
    }
  }
}