[
  {
      "name": "编组",
      "type": "group",
      "id": "0",
      "key": "base",
      "node": {
          "name": "编组",
          "type": "group",
          "children": {
              "name": {
                  "name": "名称",
                  "type": "text",
                  "default": "123",
                  "children": {
                      "name": {
                          "name": "名称1",
                          "type": "text",
                          "default": "123"
                      },
                      "name1": {
                          "name": "名称2",
                          "type": "text",
                          "default": "123"
                      }
                  }
              }
          }
      },
      "children": [
          {
              "name": "名称",
              "type": "text",
              "id": "0-0",
              "key": "name",
              "node": {
                  "name": "名称",
                  "type": "text",
                  "default": "123",
                  "children": {
                      "name": {
                          "name": "名称1",
                          "type": "text",
                          "default": "123"
                      },
                      "name1": {
                          "name": "名称2",
                          "type": "text",
                          "default": "123"
                      }
                  }
              },
              "children": [
                  {
                      "name": "名称1",
                      "type": "text",
                      "id": "0-0-0",
                      "key": "name",
                      "node": {
                          "name": "名称1",
                          "type": "text",
                          "default": "123"
                      }
                  },
                  {
                      "name": "名称2",
                      "type": "text",
                      "id": "0-0-1",
                      "key": "name1",
                      "node": {
                          "name": "名称2",
                          "type": "text",
                          "default": "123"
                      }
                  }
              ]
          }
      ]
  },
  {
      "type": "menu",
      "id": "1",
      "key": "vertical",
      "node": {
          "type": "menu",
          "children": {
              "general": {
                  "name": "通用",
                  "mode": "single",
                  "children": {
                      "initValue": {
                          "name": "初始化值",
                          "type": "text",
                          "default": 1,
                          "description": "请填入期望初始化选中的标签ID"
                      },
                      "queueMode": {
                          "name": "排列方式",
                          "type": "radio",
                          "options": [
                              {
                                  "label": "水平方向",
                                  "value": "hori"
                              },
                              {
                                  "label": "垂直方向",
                                  "value": "verti"
                              }
                          ],
                          "default": "hori"
                      },
                      "alignment": {
                          "name": "对齐方式",
                          "type": "radio",
                          "options": [
                              {
                                  "label": "左对齐",
                                  "value": "flex-start"
                              },
                              {
                                  "label": "居中对齐",
                                  "value": "center"
                              },
                              {
                                  "label": "右对齐",
                                  "value": "flex-end"
                              }
                          ],
                          "default": "center"
                      }
                  }
              },
              "graph": {
                  "name": "图形",
                  "mode": "multiple",
                  "children": {
                      "x": {
                          "name": "x轴",
                          "children": {
                              "text": {
                                  "type": "text",
                                  "name": "输入框",
                                  "default": "123"
                              }
                          }
                      },
                      "y": {
                          "name": "y轴",
                          "children": {
                              "number": {
                                  "type": "number",
                                  "name": "位置",
                                  "default": 10
                              }
                          }
                      }
                  }
              }
          }
      },
      "children": [
          {
              "name": "通用",
              "id": "1-0",
              "key": "general",
              "node": {
                  "name": "通用",
                  "mode": "single",
                  "children": {
                      "initValue": {
                          "name": "初始化值",
                          "type": "text",
                          "default": 1,
                          "description": "请填入期望初始化选中的标签ID"
                      },
                      "queueMode": {
                          "name": "排列方式",
                          "type": "radio",
                          "options": [
                              {
                                  "label": "水平方向",
                                  "value": "hori"
                              },
                              {
                                  "label": "垂直方向",
                                  "value": "verti"
                              }
                          ],
                          "default": "hori"
                      },
                      "alignment": {
                          "name": "对齐方式",
                          "type": "radio",
                          "options": [
                              {
                                  "label": "左对齐",
                                  "value": "flex-start"
                              },
                              {
                                  "label": "居中对齐",
                                  "value": "center"
                              },
                              {
                                  "label": "右对齐",
                                  "value": "flex-end"
                              }
                          ],
                          "default": "center"
                      }
                  }
              },
              "children": [
                  {
                      "name": "初始化值",
                      "type": "text",
                      "id": "1-0-0",
                      "key": "initValue",
                      "node": {
                          "name": "初始化值",
                          "type": "text",
                          "default": 1,
                          "description": "请填入期望初始化选中的标签ID"
                      }
                  },
                  {
                      "name": "排列方式",
                      "type": "radio",
                      "id": "1-0-1",
                      "key": "queueMode",
                      "node": {
                          "name": "排列方式",
                          "type": "radio",
                          "options": [
                              {
                                  "label": "水平方向",
                                  "value": "hori"
                              },
                              {
                                  "label": "垂直方向",
                                  "value": "verti"
                              }
                          ],
                          "default": "hori"
                      }
                  },
                  {
                      "name": "对齐方式",
                      "type": "radio",
                      "id": "1-0-2",
                      "key": "alignment",
                      "node": {
                          "name": "对齐方式",
                          "type": "radio",
                          "options": [
                              {
                                  "label": "左对齐",
                                  "value": "flex-start"
                              },
                              {
                                  "label": "居中对齐",
                                  "value": "center"
                              },
                              {
                                  "label": "右对齐",
                                  "value": "flex-end"
                              }
                          ],
                          "default": "center"
                      }
                  }
              ]
          },
          {
              "name": "图形",
              "id": "1-1",
              "key": "graph",
              "node": {
                  "name": "图形",
                  "mode": "multiple",
                  "children": {
                      "x": {
                          "name": "x轴",
                          "children": {
                              "text": {
                                  "type": "text",
                                  "name": "输入框",
                                  "default": "123"
                              }
                          }
                      },
                      "y": {
                          "name": "y轴",
                          "children": {
                              "number": {
                                  "type": "number",
                                  "name": "位置",
                                  "default": 10
                              }
                          }
                      }
                  }
              },
              "children": [
                  {
                      "name": "x轴",
                      "id": "1-1-0",
                      "key": "x",
                      "node": {
                          "name": "x轴",
                          "children": {
                              "text": {
                                  "type": "text",
                                  "name": "输入框",
                                  "default": "123"
                              }
                          }
                      },
                      "children": [
                          {
                              "name": "输入框",
                              "type": "text",
                              "id": "1-1-0-0",
                              "key": "text",
                              "node": {
                                  "type": "text",
                                  "name": "输入框",
                                  "default": "123"
                              }
                          }
                      ]
                  },
                  {
                      "name": "y轴",
                      "id": "1-1-1",
                      "key": "y",
                      "node": {
                          "name": "y轴",
                          "children": {
                              "number": {
                                  "type": "number",
                                  "name": "位置",
                                  "default": 10
                              }
                          }
                      },
                      "children": [
                          {
                              "name": "位置",
                              "type": "number",
                              "id": "1-1-1-0",
                              "key": "number",
                              "node": {
                                  "type": "number",
                                  "name": "位置",
                                  "default": 10
                              }
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      "name": "折叠",
      "type": "group",
      "id": "2",
      "key": "fold",
      "node": {
          "name": "折叠",
          "type": "group",
          "fold": false,
          "children": {
              "name": {
                  "name": "名称",
                  "type": "text",
                  "default": "123"
              }
          }
      },
      "children": [
          {
              "name": "名称",
              "type": "text",
              "id": "2-0",
              "key": "name",
              "node": {
                  "name": "名称",
                  "type": "text",
                  "default": "123"
              }
          }
      ]
  },
  {
      "name": "编组开关",
      "type": "group",
      "id": "3",
      "key": "show",
      "node": {
          "name": "编组开关",
          "type": "group",
          "enableHide": true,
          "children": {
              "show": {
                  "default": false
              },
              "name": {
                  "name": "名称",
                  "type": "text",
                  "default": "123"
              }
          }
      },
      "children": [
          {
              "id": "3-0",
              "key": "show",
              "node": {
                  "default": false
              }
          },
          {
              "name": "名称",
              "type": "text",
              "id": "3-1",
              "key": "name",
              "node": {
                  "name": "名称",
                  "type": "text",
                  "default": "123"
              }
          }
      ]
  },
  {
      "name": "编组套编组",
      "type": "group",
      "id": "4",
      "key": "gather",
      "node": {
          "name": "编组套编组",
          "type": "group",
          "children": {
              "name": {
                  "name": "名称",
                  "type": "text",
                  "default": "123"
              },
              "gather": {
                  "name": "编组开关",
                  "type": "group",
                  "children": {
                      "name": {
                          "name": "名称",
                          "type": "text",
                          "default": "123"
                      },
                      "gather": {
                          "name": "编组开关",
                          "type": "group",
                          "children": {
                              "name": {
                                  "name": "名称",
                                  "type": "text",
                                  "default": "123"
                              },
                              "gather": {
                                  "name": "编组开关",
                                  "type": "group",
                                  "children": {
                                      "name": {
                                          "name": "名称",
                                          "type": "text",
                                          "default": "123"
                                      },
                                      "gather": {
                                          "name": "编组开关",
                                          "type": "group",
                                          "children": {
                                              "name": {
                                                  "name": "名称",
                                                  "type": "text",
                                                  "default": "123"
                                              }
                                          }
                                      }
                                  }
                              }
                          }
                      }
                  }
              }
          }
      },
      "children": [
          {
              "name": "名称",
              "type": "text",
              "id": "4-0",
              "key": "name",
              "node": {
                  "name": "名称",
                  "type": "text",
                  "default": "123"
              }
          },
          {
              "name": "编组开关",
              "type": "group",
              "id": "4-1",
              "key": "gather",
              "node": {
                  "name": "编组开关",
                  "type": "group",
                  "children": {
                      "name": {
                          "name": "名称",
                          "type": "text",
                          "default": "123"
                      },
                      "gather": {
                          "name": "编组开关",
                          "type": "group",
                          "children": {
                              "name": {
                                  "name": "名称",
                                  "type": "text",
                                  "default": "123"
                              },
                              "gather": {
                                  "name": "编组开关",
                                  "type": "group",
                                  "children": {
                                      "name": {
                                          "name": "名称",
                                          "type": "text",
                                          "default": "123"
                                      },
                                      "gather": {
                                          "name": "编组开关",
                                          "type": "group",
                                          "children": {
                                              "name": {
                                                  "name": "名称",
                                                  "type": "text",
                                                  "default": "123"
                                              }
                                          }
                                      }
                                  }
                              }
                          }
                      }
                  }
              },
              "children": [
                  {
                      "name": "名称",
                      "type": "text",
                      "id": "4-1-0",
                      "key": "name",
                      "node": {
                          "name": "名称",
                          "type": "text",
                          "default": "123"
                      }
                  },
                  {
                      "name": "编组开关",
                      "type": "group",
                      "id": "4-1-1",
                      "key": "gather",
                      "node": {
                          "name": "编组开关",
                          "type": "group",
                          "children": {
                              "name": {
                                  "name": "名称",
                                  "type": "text",
                                  "default": "123"
                              },
                              "gather": {
                                  "name": "编组开关",
                                  "type": "group",
                                  "children": {
                                      "name": {
                                          "name": "名称",
                                          "type": "text",
                                          "default": "123"
                                      },
                                      "gather": {
                                          "name": "编组开关",
                                          "type": "group",
                                          "children": {
                                              "name": {
                                                  "name": "名称",
                                                  "type": "text",
                                                  "default": "123"
                                              }
                                          }
                                      }
                                  }
                              }
                          }
                      },
                      "children": [
                          {
                              "name": "名称",
                              "type": "text",
                              "id": "4-1-1-0",
                              "key": "name",
                              "node": {
                                  "name": "名称",
                                  "type": "text",
                                  "default": "123"
                              }
                          },
                          {
                              "name": "编组开关",
                              "type": "group",
                              "id": "4-1-1-1",
                              "key": "gather",
                              "node": {
                                  "name": "编组开关",
                                  "type": "group",
                                  "children": {
                                      "name": {
                                          "name": "名称",
                                          "type": "text",
                                          "default": "123"
                                      },
                                      "gather": {
                                          "name": "编组开关",
                                          "type": "group",
                                          "children": {
                                              "name": {
                                                  "name": "名称",
                                                  "type": "text",
                                                  "default": "123"
                                              }
                                          }
                                      }
                                  }
                              },
                              "children": [
                                  {
                                      "name": "名称",
                                      "type": "text",
                                      "id": "4-1-1-1-0",
                                      "key": "name",
                                      "node": {
                                          "name": "名称",
                                          "type": "text",
                                          "default": "123"
                                      }
                                  },
                                  {
                                      "name": "编组开关",
                                      "type": "group",
                                      "id": "4-1-1-1-1",
                                      "key": "gather",
                                      "node": {
                                          "name": "编组开关",
                                          "type": "group",
                                          "children": {
                                              "name": {
                                                  "name": "名称",
                                                  "type": "text",
                                                  "default": "123"
                                              }
                                          }
                                      },
                                      "children": [
                                          {
                                              "name": "名称",
                                              "type": "text",
                                              "id": "4-1-1-1-1-0",
                                              "key": "name",
                                              "node": {
                                                  "name": "名称",
                                                  "type": "text",
                                                  "default": "123"
                                              }
                                          }
                                      ]
                                  }
                              ]
                          }
                      ]
                  }
              ]
          }
      ]
  }
]