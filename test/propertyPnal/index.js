const COMPLEXTYPE = ["group", 'menu', 'tabs', 'suite']

class PropertyTree {
  constructor() {
    this.json = {}
    this.tree = []
  }

  init(obj) {
    this.json = obj
    this.tree = this.configToTree(obj)
    return this.tree
  }

  /**
   * 将config.json转化为tree
   */
  configToTree(obj, level = 0, startIndex = 0, parent = '') {
    const keys = Object.keys(obj)
    return keys.map((k, i) => {
      i += startIndex
      const v = obj[k]
      const _id = level ? `${level}-${i}` : `${i}`
      const _o = {
        index: _id,
        k: k,
        name: v.name,
        type: v.type,
        node: { [k]: v },
        parent: parent,
        id: this.getRandom(),
        scopedSlots: { title: 'custom' },
      }
      if (!v.name && !v.type) {
        delete _o.name
        delete _o.type
        return _o
      }
      if (v.children) {
        _o.children = this.configToTree(v.children, _id, 0, _o)
      }

      return _o
    })
  }

  /**
   * 查找节点
   * return [childrenList] 当前节点所在的数组
   *        [position] 在数组中的位置
   */
  findNode(node) {
    const level = node.index.split('-')
    let replaceNode = this.tree

    while (level.length > 1) {
      replaceNode = replaceNode[level.shift()]?.children
    }

    const curNode = replaceNode && replaceNode[level[0]]
    if (!curNode) {
      throw new Error('未查询到该节点', node)
    }

    return {
      childrenList: replaceNode,
      position: parseInt(level[0]),
      parentNode: curNode.parent,
    }
  }

  /**
   * 更新代码片段
   */
  updateParentCode(node) {
    const parentNode = node.parent
    if (parentNode) {
      this.updateCode(parentNode)
    }
  }

  updateCode(node) {
    const _val = Object.values(node.node)[0]
    _val.children = {}
    for (const n of node.children) {
      _val.children = {
        ..._val.children,
        ...n.node,
      }
    }
  }

  /**
   * 插入子节点
   */
  insertNode(node, code) {
    const { childrenList, position } = this.findNode(node)
    const curNode = childrenList[position]

    if (COMPLEXTYPE.indexOf(curNode.type) === -1) {
      throw new Error('当前节点不可插入子节点')
    } else if (!curNode.children) {
      curNode.children = []
    }

    const treeNode = this.configToTree(
      code,
      curNode.index,
      curNode.children.length,
      curNode
    )
    curNode.children.push(...treeNode)

    return new Promise((resolve) => {
      setTimeout(() => {
        this.updateCode(curNode)
        resolve(this.tree)
      }, 0)
    })
  }

  /**
   * 删除节点
   */
  deleteNode(node) {
    const [parentId, startIndex] = this.getPrefix(node.index)
    const { childrenList, position } = this.findNode(node)

    // 删除节点
    const beforeLen = childrenList.length
    const curNode = childrenList[position]
    childrenList.splice(position, 1)

    // 更新插入位置之后的节点id
    // 条件：不是最后一个节点
    if (beforeLen - 1 !== position) {
      this.updateNodeIndex(childrenList, parentId, startIndex)
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        this.updateParentCode(curNode)
        resolve(this.tree)
      }, 0)
    })
  }

  /**
   * 更新节点
   */
  updateNode(node, newNode) {
    const [parentId, startIndex] = this.getPrefix(node.index)
    const { childrenList, position, parentNode } = this.findNode(node)
    const treeNode = this.configToTree(
      newNode,
      parentId,
      startIndex,
      parentNode
    )

    // 插入节点
    const beforeLen = childrenList.length
    const curNode = childrenList[position]
    childrenList.splice(position, 1, ...treeNode)

    // 更新插入位置之后的节点id
    // 条件：不是最后一个节点，且被替换的节点长度大于1
    if (beforeLen - 1 !== position && treeNode.length > 1) {
      this.updateNodeIndex(childrenList, parentId, startIndex + treeNode.length)
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        this.updateParentCode(curNode)
        resolve(this.tree)
      }, 0)
    })
  }

  /**
   * 获取待更新节点的index前缀
   */
  getPrefix(index) {
    const levels = index.split('-')
    const startIndex = parseInt(levels.pop())
    return [levels.join('-'), startIndex]
  }

  /**
   * 更新插入位置之后的节点id
   */
  updateNodeIndex(node, level = 0, startIndex = 0) {
    for (let i = startIndex; i < node.length; i++) {
      const v = node[i]
      const _id = level ? `${level}-${i}` : `${i}`
      v.index = _id
      if (v.children) {
        this.updateNodeIndex(v.children, _id)
      }
    }
  }

  /**
   * 随机数
   */
  getRandom() {
    return Math.random().toString().slice(-6)
  }
}

// ------------------- test start -------------------------
const obj = {
  "menu": {
    "type": "menu",
    "children": {
      "chart": {
        "name": "图表",
        "mode": "single",
        "children": {
          "barCfg": {
            "name": "图表设置",
            "type": "group",
            "fold": false,
            "children": {
              "barWidth": {
                "name": "宽度",
                "type": "slider",
                "showInput": true,
                "min": 1,
                "max": 100,
                "step": 1,
                "default": 20
              },
              "barGap": {
                "name": "间距",
                "description": "不同系列的柱间距离",
                "type": "slider",
                "showInput": true,
                "min": 0,
                "max": 100,
                "step": 1,
                "default": 30
              },
              "barRadius": {
                "name": "圆角",
                "type": "suite",
                "children": {
                  "radiusType": {
                    "name": "",
                    "type": "radio",
                    "options": [
                      {
                        "label": "全圆角",
                        "value": "all"
                      },
                      {
                        "label": "独立圆角",
                        "value": "alone"
                      }
                    ],
                    "default": "all"
                  },
                  "allRadius": {
                    "type": "number",
                    "name": "",
                    "step": 1,
                    "default": 0,
                    "col": 12,
                    "showInPanel": {
                      "conditions": [
                        [
                          ".radiusType",
                          "$eq",
                          "all"
                        ]
                      ]
                    }
                  },
                  "ltRadius": {
                    "type": "number",
                    "name": "左上",
                    "step": 1,
                    "default": 0,
                    "col": 6,
                    "showInPanel": {
                      "conditions": [
                        [
                          ".radiusType",
                          "$eq",
                          "alone"
                        ]
                      ]
                    }
                  },
                  "rtRadius": {
                    "type": "number",
                    "name": "右上",
                    "step": 1,
                    "default": 0,
                    "col": 6,
                    "showInPanel": {
                      "conditions": [
                        [
                          ".radiusType",
                          "$eq",
                          "alone"
                        ]
                      ]
                    }
                  },
                  "rbRadius": {
                    "type": "number",
                    "name": "右下",
                    "step": 1,
                    "default": 0,
                    "col": 6,
                    "showInPanel": {
                      "conditions": [
                        [
                          ".radiusType",
                          "$eq",
                          "alone"
                        ]
                      ]
                    }
                  },
                  "lbRadius": {
                    "type": "number",
                    "name": "左下",
                    "step": 1,
                    "default": 0,
                    "col": 6,
                    "showInPanel": {
                      "conditions": [
                        [
                          ".radiusType",
                          "$eq",
                          "alone"
                        ]
                      ]
                    }
                  }
                }
              },
              "barBgColor": {
                "name": "背景",
                "description": "柱子类目背景",
                "type": "color",
                "components": [
                  "flat",
                  "linearGradient"
                ],
                "default": {
                  "type": "flat",
                  "value": "#ffffff00"
                }
              },
              "barStroke": {
                "type": "stroke",
                "name": "描边",
                "default": {
                  "color": "#0b71e600",
                  "width": 0,
                  "style": "solid"
                }
              },
              "barShadow": {
                "type": "shadow",
                "name": "阴影",
                "default": {
                  "color": "#0b71e600",
                  "x": 0,
                  "y": 0,
                  "blur": 0
                }
              }
            }
          },
          "dataTips": {
            "name": "显示数据",
            "type": "group",
            "enableHide": true,
            "fold": false,
            "children": {
              "show": {
                "default": false
              },
              "font": {
                "name": "文本样式",
                "type": "font",
                "default": {
                  "fontFamily": "simSun",
                  "fontWeight": 400,
                  "color": "#FFFFFFB3",
                  "fontSize": 12
                }
              },
              "site": {
                "type": "select",
                "name": "对齐",
                "options": [
                  {
                    "label": "top",
                    "value": "top"
                  },
                  {
                    "label": "left",
                    "value": "left"
                  },
                  {
                    "label": "right",
                    "value": "right"
                  },
                  {
                    "label": "bottom",
                    "value": "bottom"
                  },
                  {
                    "label": "inside",
                    "value": "inside"
                  },
                  {
                    "label": "insideLeft",
                    "value": "insideLeft"
                  },
                  {
                    "label": "insideRight",
                    "value": "insideRight"
                  },
                  {
                    "label": "insideTop",
                    "value": "insideTop"
                  },
                  {
                    "label": "insideBottom",
                    "value": "insideBottom"
                  },
                  {
                    "label": "insideTopLeft",
                    "value": "insideTopLeft"
                  },
                  {
                    "label": "insideBottomLeft",
                    "value": "insideBottomLeft"
                  },
                  {
                    "label": "insideTopRight",
                    "value": "insideTopRight"
                  },
                  {
                    "label": "insideBottomRight",
                    "value": "insideBottomRight"
                  }
                ],
                "default": "top"
              }
            }
          }
        }
      },
      "title": {
        "name": "标题",
        "type": "title"
      },
      "legend": {
        "name": "图例",
        "type": "legend"
      },
      "axis": {
        "name": "坐标轴",
        "type": "axis"
      },
      "tooltip": {
        "name": "提示框",
        "type": "tooltip"
      },
      "expression": {
        "name": "条件",
        "mode": "single",
        "children": {
          "list": {
            "name": "条件列表",
            "type": "tabs",
            "fold": false,
            "template": {
              "name": "条件<%= i + 1 %>",
              "type": "object",
              "children": {
                "condition": {
                  "name": "启用",
                  "type": "logicalTree",
                  "default": {
                    "enabled": true,
                    "operator": "OR",
                    "expressions": [
                      {
                        "operator": "AND",
                        "expressions": [
                          [
                            "colorField",
                            "eq",
                            "100"
                          ]
                        ]
                      }
                    ]
                  }
                },
                "color": {
                  "name": "柱子颜色",
                  "type": "color",
                  "components": [
                    "flat",
                    "linearGradient"
                  ],
                  "default": {
                    "type": "flat",
                    "value": "#2362E4"
                  }
                }
              }
            },
            "default": [
              {
                "color": {
                  "type": "flat",
                  "value": "#2362E4"
                },
                "condition": {
                  "enabled": false,
                  "operator": "OR",
                  "expressions": [
                    {
                      "operator": "AND",
                      "expressions": [
                        [
                          "colorField",
                          "eq",
                          "100"
                        ]
                      ]
                    }
                  ]
                }
              }
            ]
          }
        }
      },
      "advance": {
        "name": "自定义",
        "mode": "single",
        "children": {
          "code": {
            "name": "自定义",
            "description": "直接写echarts option,书写规范：{\"key\": value}(echarts title不生效),自定义option优先级大于属性面板配置",
            "type": "code",
            "language": "json",
            "default": ""
          }
        }
      }
    }
  }
}
// 初始化
const _comp = new PropertyTree()
_comp.init(obj)
console.log(_comp.tree)

// // 更新节点
// _comp.updateNode({
//   "index": "4-1-0",
// }, {
//   "base": {
//     "name": "开关1",
//     "type": "switch",
//     "default": true
//   },
//   "description": {
//     "name": "开关2",
//     "type": "switch",
//     "description": "提示信息",
//     "default": true
//   }
// })
// console.log('updateeTree', _comp.tree)

// 删除节点
// _comp.deleteNode({
//   "index": "4-1",
// })
// console.log('deleteNode', _comp.tree)

// 插入节点
_comp.insertNode({
  "index": "0",
}, {
  "base": {
    "name": "开关A",
    "type": "switch",
    "default": true
  },
  "description": {
    "name": "开关B",
    "type": "switch",
    "description": "提示信息",
    "default": true
  }
})
// console.log('insertNode', _comp.tree)
// ------------------- test end -------------------------