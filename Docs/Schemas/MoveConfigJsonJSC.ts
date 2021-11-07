export default {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$ref": "#/definitions/MoveConfigJson",
  "definitions": {
    "MoveConfigJson": {
      "type": "object",
      "properties": {
        "enableImproveAccuracy": {
          "anyOf": [
            {
              "type": "boolean",
              "const": true
            },
            {
              "type": "boolean"
            }
          ],
          "description": "One default reason to move a point is to improve accuracy. Set to false to disable this reason"
        },
        "enableRelocation": {
          "anyOf": [
            {
              "type": "boolean",
              "const": true
            },
            {
              "type": "boolean"
            }
          ],
          "description": "One default reason to move a point is because it has relocated Set to false to disable this reason"
        }
      }
    }
  }
}