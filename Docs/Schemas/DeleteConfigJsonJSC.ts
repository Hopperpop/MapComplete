export default {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$ref": "#/definitions/DeleteConfigJson",
  "definitions": {
    "DeleteConfigJson": {
      "type": "object",
      "properties": {
        "extraDeleteReasons": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "explanation": {
                "anyOf": [
                  {
                    "type": "string"
                  },
                  {}
                ],
                "description": "The text that will be shown to the user - translatable"
              },
              "changesetMessage": {
                "type": "string",
                "description": "The text that will be uploaded into the changeset or will be used in the fixme in case of a soft deletion Should be a few words, in english"
              }
            },
            "required": [
              "explanation",
              "changesetMessage"
            ]
          },
          "description": "* By default, three reasons to delete a point are shown:\n\n- The point does not exist anymore\n- The point was a testing point\n- THe point could not be found\n\nHowever, for some layers, there might be different or more specific reasons for deletion which can be user friendly to set, e.g.:\n\n- the shop has closed\n- the climbing route has been closed of for nature conservation reasons\n- ...\n\nThese reasons can be stated here and will be shown in the list of options the user can choose from"
        },
        "nonDeleteMappings": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "if": {
                "$ref": "#/definitions/AndOrTagConfigJson"
              },
              "then": {
                "anyOf": [
                  {
                    "type": "string"
                  },
                  {}
                ]
              }
            },
            "required": [
              "if",
              "then"
            ]
          },
          "description": "In some cases, a (starting) contributor might wish to delete a feature even though deletion is not appropriate. (The most relevant case are small paths running over private property. These should be marked as 'private' instead of deleted, as the community might trace the path again from aerial imagery, gettting us back to the original situation).\n\nBy adding a 'nonDeleteMapping', an option can be added into the list which will retag the feature. It is important that the feature will be retagged in such a way that it won't be picked up by the layer anymore!"
        },
        "softDeletionTags": {
          "anyOf": [
            {
              "$ref": "#/definitions/AndOrTagConfigJson"
            },
            {
              "type": "string"
            }
          ],
          "description": "In some cases, the contributor is not allowed to delete the current feature (e.g. because it isn't a point, the point is referenced by a relation or the user isn't experienced enough). To still offer the user a 'delete'-option, the feature is retagged with these tags. This is a soft deletion, as the point isn't actually removed from OSM but rather marked as 'disused' It is important that the feature will be retagged in such a way that it won't be picked up by the layer anymore!\n\nExample (note that \"amenity=\" erases the 'amenity'-key alltogether): ``` {     \"and\": [\"disussed:amenity=public_bookcase\", \"amenity=\"] } ```\n\nor (notice the use of the ':='-tag to copy the old value of 'shop=*' into 'disused:shop='): ``` {     \"and\": [\"disused:shop:={shop}\", \"shop=\"] } ```"
        },
        "neededChangesets": {
          "type": "number",
          "description": "* By default, the contributor needs 20 previous changesets to delete points edited by others. For some small features (e.g. bicycle racks) this is too much and this requirement can be lowered or dropped, which can be done here."
        }
      }
    },
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