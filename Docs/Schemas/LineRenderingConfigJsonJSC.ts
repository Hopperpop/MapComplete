export default {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$ref": "#/definitions/LineRenderingConfigJson",
  "definitions": {
    "LineRenderingConfigJson": {
      "type": "object",
      "properties": {
        "color": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "$ref": "#/definitions/TagRenderingConfigJson"
            }
          ],
          "description": "The color for way-elements and SVG-elements. If the value starts with \"--\", the style of the body element will be queried for the corresponding variable instead"
        },
        "width": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "$ref": "#/definitions/TagRenderingConfigJson"
            }
          ],
          "description": "The stroke-width for way-elements"
        },
        "dashArray": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "$ref": "#/definitions/TagRenderingConfigJson"
            }
          ],
          "description": "A dasharray, e.g. \"5 6\" The dasharray defines 'pixels of line, pixels of gap, pixels of line, pixels of gap', Default value: \"\" (empty string == full line)"
        },
        "offset": {
          "anyOf": [
            {
              "type": "number"
            },
            {
              "$ref": "#/definitions/TagRenderingConfigJson"
            }
          ],
          "description": "The number of pixels this line should be moved. Use a positive numbe to move to the right, a negative to move to the left (left/right as defined by the drawing direction of the line).\n\nIMPORTANT: MapComplete will already normalize 'key:both:property' and 'key:both' into the corresponding 'key:left' and 'key:right' tagging (same for 'sidewalk=left/right/both' which is rewritten to 'sidewalk:left' and 'sidewalk:right') This simplifies programming. Refer to the CalculatedTags.md-documentation for more details"
        }
      },
      "description": "The LineRenderingConfig gives all details onto how to render a single line of a feature.\n\nThis can be used if:\n\n- The feature is a line\n- The feature is an area"
    },
    "TagRenderingConfigJson": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "description": "The id of the tagrendering, should be an unique string. Used to keep the translations in sync. Only used in the tagRenderings-array of a layerConfig, not requered otherwise"
        },
        "group": {
          "type": "string",
          "description": "If 'group' is defined on many tagRenderings, these are grouped together when shown. The questions are grouped together as well. The first tagRendering of a group will always be a sticky element."
        },
        "render": {
          "anyOf": [
            {
              "type": "string"
            },
            {}
          ],
          "description": "Renders this value. Note that \"{key}\"-parts are substituted by the corresponding values of the element. If neither 'textFieldQuestion' nor 'mappings' are defined, this text is simply shown as default value.\n\nNote that this is a HTML-interpreted value, so you can add links as e.g. '<a href='{website}'>{website}</a>' or include images such as `This is of type A <br><img src='typeA-icon.svg' />`"
        },
        "question": {
          "anyOf": [
            {
              "type": "string"
            },
            {}
          ],
          "description": "If it turns out that this tagRendering doesn't match _any_ value, then we show this question. If undefined, the question is never asked and this tagrendering is read-only"
        },
        "condition": {
          "anyOf": [
            {
              "$ref": "#/definitions/AndOrTagConfigJson"
            },
            {
              "type": "string"
            }
          ],
          "description": "Only show this question if the object also matches the following tags.\n\nThis is useful to ask a follow-up question. E.g. if there is a diaper table, then ask a follow-up question on diaper tables..."
        },
        "freeform": {
          "type": "object",
          "properties": {
            "key": {
              "type": "string",
              "description": "If this key is present, then 'render' is used to display the value. If this is undefined, the rendering is _always_ shown"
            },
            "type": {
              "type": "string",
              "description": "The type of the text-field, e.g. 'string', 'nat', 'float', 'date',... See Docs/SpecialInputElements.md and UI/Input/ValidatedTextField.ts for supported values"
            },
            "helperArgs": {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "type": "string"
                  },
                  {
                    "type": "number"
                  },
                  {
                    "type": "boolean"
                  },
                  {}
                ]
              },
              "description": "Extra parameters to initialize the input helper arguments. For semantics, see the 'SpecialInputElements.md'"
            },
            "addExtraTags": {
              "type": "array",
              "items": {
                "type": "string"
              },
              "description": "If a value is added with the textfield, these extra tag is addded. Useful to add a 'fixme=freeform textfield used - to be checked'"
            },
            "inline": {
              "type": "boolean",
              "description": "When set, influences the way a question is asked. Instead of showing a full-widht text field, the text field will be shown within the rendering of the question.\n\nThis combines badly with special input elements, as it'll distort the layout."
            },
            "default": {
              "type": "string",
              "description": "default value to enter if no previous tagging is present. Normally undefined (aka do not enter anything)"
            }
          },
          "required": [
            "key"
          ],
          "description": "Allow freeform text input from the user"
        },
        "multiAnswer": {
          "type": "boolean",
          "description": "If true, use checkboxes instead of radio buttons when asking the question"
        },
        "mappings": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "if": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/AndOrTagConfigJson"
                  },
                  {
                    "type": "string"
                  }
                ],
                "description": "If this condition is met, then the text under `then` will be shown. If no value matches, and the user selects this mapping as an option, then these tags will be uploaded to OSM.\n\nFor example: {'if': 'diet:vegetarion=yes', 'then':'A vegetarian option is offered here'}\n\nThis can be an substituting-tag as well, e.g. {'if': 'addr:street:={_calculated_nearby_streetname}', 'then': '{_calculated_nearby_streetname}'}"
              },
              "then": {
                "anyOf": [
                  {
                    "type": "string"
                  },
                  {}
                ],
                "description": "If the condition `if` is met, the text `then` will be rendered. If not known yet, the user will be presented with `then` as an option"
              },
              "hideInAnswer": {
                "anyOf": [
                  {
                    "type": "boolean"
                  },
                  {
                    "type": "string"
                  },
                  {
                    "$ref": "#/definitions/AndOrTagConfigJson"
                  }
                ],
                "description": "In some cases, multiple taggings exist (e.g. a default assumption, or a commonly mapped abbreviation and a fully written variation).\n\nIn the latter case, a correct text should be shown, but only a single, canonical tagging should be selectable by the user. In this case, one of the mappings can be hiden by setting this flag.\n\nTo demonstrate an example making a default assumption:\n\nmappings: [  {      if: \"access=\", -- no access tag present, we assume accessible      then: \"Accessible to the general public\",      hideInAnswer: true  },  {      if: \"access=yes\",      then: \"Accessible to the general public\", -- the user selected this, we add that to OSM  },  {      if: \"access=no\",      then: \"Not accessible to the public\"  } ]\n\n\nFor example, for an operator, we have `operator=Agentschap Natuur en Bos`, which is often abbreviated to `operator=ANB`. Then, we would add two mappings: {     if: \"operator=Agentschap Natuur en Bos\" -- the non-abbreviated version which should be uploaded     then: \"Maintained by Agentschap Natuur en Bos\" }, {     if: \"operator=ANB\", -- we don't want to upload abbreviations     then: \"Maintained by Agentschap Natuur en Bos\"     hideInAnswer: true }\n\nHide in answer can also be a tagsfilter, e.g. to make sure an option is only shown when appropriate. Keep in mind that this is reverse logic: it will be hidden in the answer if the condition is true, it will thus only show in the case of a mismatch\n\ne.g., for toilets: if \"wheelchair=no\", we know there is no wheelchair dedicated room. For the location of the changing table, the option \"in the wheelchair accessible toilet is weird\", so we write:\n\n{     \"question\": \"Where is the changing table located?\"     \"mappings\": [         {\"if\":\"changing_table:location=female\",\"then\":\"In the female restroom\"},        {\"if\":\"changing_table:location=male\",\"then\":\"In the male restroom\"},        {\"if\":\"changing_table:location=wheelchair\",\"then\":\"In the wheelchair accessible restroom\", \"hideInAnswer\": \"wheelchair=no\"},              ] }\n\nAlso have a look for the meta-tags {     if: \"operator=Agentschap Natuur en Bos\",     then: \"Maintained by Agentschap Natuur en Bos\",     hideInAnswer: \"_country!=be\" }"
              },
              "ifnot": {
                "anyOf": [
                  {
                    "$ref": "#/definitions/AndOrTagConfigJson"
                  },
                  {
                    "type": "string"
                  }
                ],
                "description": "Only applicable if 'multiAnswer' is set. This is for situations such as: `accepts:coins=no` where one can select all the possible payment methods. However, we want to make explicit that some options _were not_ selected. This can be done with `ifnot` Note that we can not explicitly render this negative case to the user, we cannot show `does _not_ accept coins`. If this is important to your usecase, consider using multiple radiobutton-fields without `multiAnswer`"
              },
              "addExtraTags": {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "description": "If chosen as answer, these tags will be applied as well onto the object. Not compatible with multiAnswer"
              }
            },
            "required": [
              "if",
              "then"
            ]
          },
          "description": "Allows fixed-tag inputs, shown either as radiobuttons or as checkboxes"
        }
      },
      "description": "A TagRenderingConfigJson is a single piece of code which converts one ore more tags into a HTML-snippet. If the desired tags are missing and a question is defined, a question will be shown instead."
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