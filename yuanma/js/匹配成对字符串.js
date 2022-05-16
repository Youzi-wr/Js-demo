const str = "import { deepCopy } from 'util/util'\nimport echarts from \"lib/echarts\"\n/**\n* 该组件必须返回一个构造函数对象（此处代码无效）\n*/\nreturn class item extends Base {\n  constructor(dom, config) {\n    super(dom, config);\n    // 图表的配置参数，可右键通过propertyPanel生成\n    this.config = {\n      \"renderer\": \"canvas\",\n      \"legend\": {\n        \"show\": false,\n        \"left\": \"auto\",\n\n        \n        \"top\": \"auto\",\n        \"orient\": \"horizontal\",// {{{  }}\n        \"padding\": 5,\n        \"itemGap\": 10,\n        \"textStyle\": {\n          \"color\": \"rgba(255,255,255,0.6)\",\n          \"fontStyle\": \"normal\",\n          \"fontWeight\": \"normal\",\n          \"fontFamily\": \"Microsoft Yahei\",\n          \"fontSize\": 12\n        }\n      },\n      \"tooltip\": {\n        \"show\": true,\n        \"trigger\": \"item\",\n        \"axisPointer\": {\n          \"_type\": \"line\",\n          \"snap\": false,\n          \"lineStyle\": {\n            \"color\": \"#333\",\n            \"width\": 1,\n            \"_type\": \"solid\",\n            \"opacity\": 1\n          },\n          \"shadowStyle\": {\n            \"color\": \"rgba(150,150,150,0.3)\",\n            \"opacity\": 1\n          },\n          \"crossStyle\": {\n            \"color\": \"#555\",\n            \"width\": 1,\n            \"_type\": \"dashed\",\n            \"opacity\": 1\n          }\n        },\n        \"position\": \"top\",\n        \"backgroundColor\": {\n          \"style\": \"single\",\n          \"value\": \"rgba(50,50,50,0.7)\"\n        },\n        \"textStyle\": {\n          \"color\": \"#fff\",\n          \"fontStyle\": \"normal\",\n          \"fontWeight\": \"normal\",\n          \"fontFamily\": \"Microsoft Yahei\",\n          \"fontSize\": 14\n        }\n      },\n      \"singleAxis\": {\n        \"zlevel\": 0,\n        \"z\": 2,\n        \"left\": 15,\n        \"top\": 30,\n        \"right\": 15,\n        \"bottom\": 60,\n        \"orient\": \"horizontal\",\n        \"_type\": \"category\",\n        \"_name\": null,\n        \"nameLocation\": \"end\",\n        \"nameTextStyle\": {\n          \"color\": \"#ffffff\",\n          \"fontStyle\": \"normal\",\n          \"fontWeight\": \"normal\",\n          \"fontFamily\": \"Microsoft Yahei\",\n          \"fontSize\": 12\n        },\n        \"nameGap\": 15,\n        \"nameRotate\": 0,\n        \"inverse\": false,\n        \"boundaryGap\": true,\n        \"silent\": false,\n        \"axisLine\": {\n          \"show\": true,\n          \"lineStyle\": {\n            \"color\": \"rgba(255, 255, 255, 0.1)\",\n            \"width\": 1,\n            \"_type\": \"solid\",\n            \"opacity\": 1\n          }\n        },\n        \"axisTick\": {\n          \"show\": false,\n          \"alignWithLabel\": false,\n          \"inside\": false,\n          \"length\": 5,\n          \"lineStyle\": {\n            \"color\": \"rgba(255,255,255,0.6)\",\n            \"width\": 1,\n            \"_type\": \"solid\",\n            \"opacity\": 1\n          }\n        },\n        \"axisLabel\": {\n          \"show\": true,\n          \"interval\": 0,\n          \"inside\": false,\n          \"rotate\": 0,\n          \"margin\": 8,\n          \"showMinLabel\": null,\n          \"showMaxLabel\": null,\n          \"color\": \"rgb(144, 160, 174)\",\n          \"fontStyle\": \"normal\",\n          \"fontWeight\": \"normal\",\n          \"fontFamily\": \"Microsoft Yahei\",\n          \"fontSize\": 12\n        },\n        \"splitLine\": {\n          \"show\": false,\n          \"lineStyle\": {\n            \"color\": \"#333\",\n            \"width\": 1,\n            \"_type\": \"solid\",\n            \"opacity\": 1\n          }\n        },\n        \"tooltip\": {\n          \"textStyle\": {\n            \"color\": \"#fff\",\n            \"fontStyle\": \"normal\",\n            \"fontWeight\": \"normal\",\n            \"fontFamily\": \"Microsoft Yahei\",\n            \"fontSize\": 14\n          }\n        }\n      },\n      \"series\": [\n        {\n          \"type\": \"scatter\",\n          \"name\": \"系列1\",\n          \"coordinateSystem\": \"singleAxis\",\n          \"hoverAnimation\": false,\n          \"legendHoverLink\": true,\n          \"symbol\": \"circle\",\n          \"symbolSizeCoef\": 4,\n          \"symbolRotate\": 0,\n          \"large\": false,\n          \"label\": {\n            \"show\": false,\n            \"position\": \"inside\",\n            \"distance\": 5,\n            \"rotate\": 0,\n            \"color\": {\n              \"style\": \"single\",\n              \"value\": \"#fff\"\n            },\n            \"fontStyle\": \"normal\",\n            \"fontWeight\": \"normal\",\n            \"fontFamily\": \"sans-serif\",\n            \"fontSize\": 12\n          },\n          \"itemStyle\": {\n            \"color\": {\n              \"style\": \"single\",\n              \"value\": \"rgb(10, 115, 255)\"\n            },\n            \"opacity\": 1\n          }\n        },\n        {\n          \"type\": \"scatter\",\n          \"name\": null,\n          \"coordinateSystem\": \"singleAxis\",\n          \"hoverAnimation\": false,\n          \"legendHoverLink\": true,\n          \"symbol\": \"circle\",\n          \"symbolSizeCoef\": 4,\n          \"symbolRotate\": 0,\n          \"large\": false,\n          \"label\": {\n            \"show\": false,\n            \"position\": \"inside\",\n            \"distance\": 5,\n            \"rotate\": 0,\n            \"color\": {\n              \"style\": \"single\",\n              \"value\": \"#fff\"\n            },\n            \"fontStyle\": \"normal\",\n            \"fontWeight\": \"normal\",\n            \"fontFamily\": \"sans-serif\",\n            \"fontSize\": 12\n          },\n          \"itemStyle\": {\n            \"color\": {\n              \"style\": \"single\",\n              \"value\": \"rgb(121, 218, 255)\"\n            },\n            \"opacity\": 1\n          }\n        }\n      ],\n      \"animation\": true,\n      \"animationDuration\": 1000,\n      \"animationEasing\": \"cubicOut\"\n    };\n    // 组件初始化的数据\n    this.data = [\n      {\n        \"x\": \"11a\",\n        \"value\": 2,\n        \"s\": 1\n      },\n      {\n        \"x\": \"12p\",\n        \"value\": 4,\n        \"s\": 1\n      },\n      {\n        \"x\": \"1p\",\n        \"value\": 1,\n        \"s\": 1\n      },\n      {\n        \"x\": \"2p\",\n        \"value\": 1,\n        \"s\": 1\n      },\n      {\n        \"x\": \"3p\",\n        \"value\": 3,\n        \"s\": 1\n      },\n      {\n        \"x\": \"7p\",\n        \"value\": 4,\n        \"s\": 1\n      },\n      {\n        \"x\": \"8p\",\n        \"value\": 3,\n        \"s\": 2\n      },\n      {\n        \"x\": \"9p\",\n        \"value\": 3,\n        \"s\": 2\n      },\n      {\n        \"x\": \"10p\",\n        \"value\": 2,\n        \"s\": 2\n      },\n      {\n        \"x\": \"11p\",\n        \"value\": 5,\n        \"s\": 2\n      }\n    ];\n    this.type = 'echarts';\n  }\n\n  /**\n  * 组装echarts的option\n  * return 返回echarts的option\n  */\n  transformOptions() {\n    const { data, config } = this;\n    // 拷贝config\n    const newConfig = deepCopy(config)\n    // x值引入\n    let xsingleAxis = [];\n    let newSerise1 = [];\n    let newSerise2 = [];\n\n    // 遍历\n    data.forEach((item, index) => {\n      xsingleAxis.push(item.x)\n\n      // 值\n      if (item.s === 1) {\n        newSerise1.push([index, item.value, item.s])\n      } else {\n        newSerise2.push([index, item.value, item.s])\n      }\n    })\n    // 增加和转换相应的值\n    newConfig.singleAxis.data = xsingleAxis\n    newConfig.singleAxis.type = newConfig.singleAxis._type\n    newConfig.singleAxis.name = newConfig.singleAxis._name\n    // 名称颜色\n    newConfig.singleAxis.nameTextStyle.color = this.changeColor(newConfig.singleAxis.nameTextStyle.color)\n\n    // 轴线操作\n    const axis = newConfig.singleAxis.axisLine.lineStyle\n    axis.color = this.changeColor(axis.color)\n    axis.type = axis._type\n\n    // 刻度线操作\n    const scaleMark = newConfig.singleAxis.axisTick.lineStyle\n    scaleMark.color = this.changeColor(scaleMark.color)\n    scaleMark.type = scaleMark._type\n\n    // 刻度标签\n    newConfig.singleAxis.axisLabel.color = this.changeColor(newConfig.singleAxis.axisLabel.color)\n\n    // 分割线\n    const splitline = newConfig.singleAxis.splitLine.lineStyle\n    splitline.color = this.changeColor(splitline.color)\n    splitline.type = splitline._type\n\n    // 提示框背景颜色\n    const newTooltip = newConfig.tooltip.backgroundColor\n    newConfig.tooltip.backgroundColor = this.changeColor(newTooltip)\n\n    // 图例的颜色\n    const newLegend = newConfig.legend.textStyle.color\n    newConfig.legend.textStyle.color = this.changeColor(newLegend)\n\n\n    // 提示框的坐标轴指示器\n    const newAxisPointer = newConfig.tooltip.axisPointer\n    newAxisPointer.type = newAxisPointer._type\n    newAxisPointer.lineStyle.type = newAxisPointer.lineStyle._type\n    newAxisPointer.crossStyle.type = newAxisPointer.crossStyle._type\n\n    // 轴线和交叉轴背景颜色\n    newAxisPointer.crossStyle.color = this.changeColor(newAxisPointer.crossStyle.color)\n    newAxisPointer.lineStyle.color = this.changeColor(newAxisPointer.lineStyle.color)\n    newAxisPointer.shadowStyle.color = this.changeColor(newAxisPointer.shadowStyle.color)\n\n    // 文本颜色\n    newConfig.tooltip.textStyle.color = this.changeColor(newConfig.tooltip.textStyle.color)\n\n\n    // 提示框取消边框和箭头\n    newConfig.tooltip.borderWidth = 0\n\n    // 散点数据\n    newConfig.series[0].data = newSerise1\n    newConfig.series[1].data = newSerise2\n\n    // 散点半径\n    newConfig.series.map((item, index) => {\n      // 对颜色进行判定\n      item.label.color = this.changeColor(item.label.color)\n      item.itemStyle.color = this.changeColor(item.itemStyle.color)\n      // 气泡映射大小控制\n      item.symbolSize = function (dataItem) {\n        return dataItem[1] * item.symbolSizeCoef;\n      }\n      // 增加标签显示\n      item.label.formatter = function (param) {\n        return param.data[1]\n      }\n    })\n    console.log(newConfig)\n\n    return newConfig\n  }\n\n  // 颜色处理器\n  changeColor(data) {\n    return typeof (data) !== 'string' ? data.value : data\n  }\n};\n"
let opts = '{"renderer":"canvas","legend":{"show":true,"left":"auto","top":"auto","orient":"horizontal","padding":5,"itemGap":10,"textStyle":{"color":"rgba(255,255,255,0.6)","fontStyle":"normal","fontWeight":"normal","fontFamily":"Microsoft Yahei","fontSize":12}},"tooltip":{"show":true,"trigger":"item","axisPointer":{"_type":"line","snap":false,"lineStyle":{"color":"#333","width":1,"_type":"solid","opacity":1},"shadowStyle":{"color":"rgba(150,150,150,0.3)","opacity":1},"crossStyle":{"color":"#555","width":1,"_type":"dashed","opacity":1}},"position":"top","backgroundColor":{"style":"single","value":"rgba(50,50,50,0.7)"},"textStyle":{"color":"#fff","fontStyle":"normal","fontWeight":"normal","fontFamily":"Microsoft Yahei","fontSize":14}},"singleAxis":{"zlevel":0,"z":2,"left":15,"top":30,"right":15,"bottom":60,"orient":"horizontal","_type":"category","_name":null,"nameLocation":"end","nameTextStyle":{"color":"#ffffff","fontStyle":"normal","fontWeight":"normal","fontFamily":"Microsoft Yahei","fontSize":12},"nameGap":15,"nameRotate":0,"inverse":false,"boundaryGap":true,"silent":false,"axisLine":{"show":true,"lineStyle":{"color":"rgba(255, 255, 255, 0.1)","width":1,"_type":"solid","opacity":1}},"axisTick":{"show":false,"alignWithLabel":false,"inside":false,"length":5,"lineStyle":{"color":"rgba(255,255,255,0.6)","width":1,"_type":"solid","opacity":1}},"axisLabel":{"show":true,"interval":0,"inside":false,"rotate":0,"margin":8,"showMinLabel":null,"showMaxLabel":null,"color":"rgb(144, 160, 174)","fontStyle":"normal","fontWeight":"normal","fontFamily":"Microsoft Yahei","fontSize":12},"splitLine":{"show":false,"lineStyle":{"color":"#333","width":1,"_type":"solid","opacity":1}},"tooltip":{"textStyle":{"color":"#fff","fontStyle":"normal","fontWeight":"normal","fontFamily":"Microsoft Yahei","fontSize":14}}},"series":[{"type":"scatter","name":"系列1","coordinateSystem":"singleAxis","hoverAnimation":false,"legendHoverLink":true,"symbol":"circle","symbolSizeCoef":4,"symbolRotate":0,"large":false,"label":{"show":false,"position":"inside","distance":5,"rotate":0,"color":{"style":"single","value":"#fff"},"fontStyle":"normal","fontWeight":"normal","fontFamily":"sans-serif","fontSize":12},"itemStyle":{"color":{"style":"single","value":"rgb(10, 115, 255)"},"opacity":1}},{"type":"scatter","name":null,"coordinateSystem":"singleAxis","hoverAnimation":false,"legendHoverLink":true,"symbol":"circle","symbolSizeCoef":4,"symbolRotate":0,"large":false,"label":{"show":false,"position":"inside","distance":5,"rotate":0,"color":{"style":"single","value":"#fff"},"fontStyle":"normal","fontWeight":"normal","fontFamily":"sans-serif","fontSize":12},"itemStyle":{"color":{"style":"single","value":"rgb(121, 218, 255)"},"opacity":1}}],"animation":true,"animationDuration":1000,"animationEasing":"cubicOut"}'

const ss = 'this.config = {      \"renderer\": \"canvas\",      \"legend\": {        \"show\": false,        \"left\": \"auto\",                \"top\": \"auto\",        \"orient\": \"horizontal\",        \"padding\": 5,        \"itemGap\": 10,        \"textStyle\": {          \"color\": \"rgba(255,255,255,0.6)\",          \"fontStyle\": \"normal\",          \"fontWeight\": \"normal\",          \"fontFamily\": \"Microsoft Yahei\",          \"fontSize\": 12        }      },      \"tooltip\": {        \"show\": true,        \"trigger\": \"item\",        \"axisPointer\": {          \"_type\": \"line\",          \"snap\": false,          \"lineStyle\": {            \"color\": \"#333\",            \"width\": 1,            \"_type\": \"solid\",            \"opacity\": 1          },          \"shadowStyle\": {            \"color\": \"rgba(150,150,150,0.3)\",            \"opacity\": 1          },          \"crossStyle\": {            \"color\": \"#555\",            \"width\": 1,            \"_type\": \"dashed\",            \"opacity\": 1          }        },        \"position\": \"top\",        \"backgroundColor\": {          \"style\": \"single\",          \"value\": \"rgba(50,50,50,0.7)\"        },        \"textStyle\": {          \"color\": \"#fff\",          \"fontStyle\": \"normal\",          \"fontWeight\": \"normal\",          \"fontFamily\": \"Microsoft Yahei\",          \"fontSize\": 14        }      },      \"singleAxis\": {        \"zlevel\": 0,        \"z\": 2,        \"left\": 15,        \"top\": 30,        \"right\": 15,        \"bottom\": 60,        \"orient\": \"horizontal\",        \"_type\": \"category\",        \"_name\": null,        \"nameLocation\": \"end\",        \"nameTextStyle\": {          \"color\": \"#ffffff\",          \"fontStyle\": \"normal\",          \"fontWeight\": \"normal\",          \"fontFamily\": \"Microsoft Yahei\",          \"fontSize\": 12        },        \"nameGap\": 15,        \"nameRotate\": 0,        \"inverse\": false,        \"boundaryGap\": true,        \"silent\": false,        \"axisLine\": {          \"show\": true,          \"lineStyle\": {            \"color\": \"rgba(255, 255, 255, 0.1)\",            \"width\": 1,            \"_type\": \"solid\",            \"opacity\": 1          }        },        \"axisTick\": {          \"show\": false,          \"alignWithLabel\": false,          \"inside\": false,          \"length\": 5,          \"lineStyle\": {            \"color\": \"rgba(255,255,255,0.6)\",            \"width\": 1,            \"_type\": \"solid\",            \"opacity\": 1          }        },        \"axisLabel\": {          \"show\": true,          \"interval\": 0,          \"inside\": false,          \"rotate\": 0,          \"margin\": 8,          \"showMinLabel\": null,          \"showMaxLabel\": null,          \"color\": \"rgb(144, 160, 174)\",          \"fontStyle\": \"normal\",          \"fontWeight\": \"normal\",          \"fontFamily\": \"Microsoft Yahei\",          \"fontSize\": 12        },        \"splitLine\": {          \"show\": false,          \"lineStyle\": {            \"color\": \"#333\",            \"width\": 1,            \"_type\": \"solid\",            \"opacity\": 1          }        },        \"tooltip\": {          \"textStyle\": {            \"color\": \"#fff\",            \"fontStyle\": \"normal\",            \"fontWeight\": \"normal\",            \"fontFamily\": \"Microsoft Yahei\",            \"fontSize\": 14          }        }      },      \"series\": [        {          \"type\": \"scatter\",          \"name\": \"系列1\",          \"coordinateSystem\": \"singleAxis\",          \"hoverAnimation\": false,          \"legendHoverLink\": true,          \"symbol\": \"circle\",          \"symbolSizeCoef\": 4,          \"symbolRotate\": 0,          \"large\": false,          \"label\": {            \"show\": false,            \"position\": \"inside\",            \"distance\": 5,            \"rotate\": 0,            \"color\": {              \"style\": \"single\",              \"value\": \"#fff\"            },            \"fontStyle\": \"normal\",            \"fontWeight\": \"normal\",            \"fontFamily\": \"sans-serif\",            \"fontSize\": 12          },          \"itemStyle\": {            \"color\": {              \"style\": \"single\",              \"value\": \"rgb(10, 115, 255)\"            },            \"opacity\": 1          }        },        {          \"type\": \"scatter\",          \"name\": null,          \"coordinateSystem\": \"singleAxis\",          \"hoverAnimation\": false,          \"legendHoverLink\": true,          \"symbol\": \"circle\",          \"symbolSizeCoef\": 4,          \"symbolRotate\": 0,          \"large\": false,          \"label\": {            \"show\": false,            \"position\": \"inside\",            \"distance\": 5,            \"rotate\": 0,            \"color\": {              \"style\": \"single\",              \"value\": \"#fff\"            },            \"fontStyle\": \"normal\",            \"fontWeight\": \"normal\",            \"fontFamily\": \"sans-serif\",            \"fontSize\": 12          },          \"itemStyle\": {            \"color\": {              \"style\": \"single\",              \"value\": \"rgb(121, 218, 255)\"            },            \"opacity\": 1          }        }      ],      \"animation\": true,      \"animationDuration\": 1000,      \"animationEasing\": \"cubicOut\"    };\n this.data=[]'

const _str = str.replace(/(\/{2,}.*?(\r|\n|$))|(\/\*(\n|.)*?\*\/)/g, '')
// console.log(_str)

opts = opts.replace(/\{|(},)/g, (key) => `${key}\n`)

function valideStr(str, opts) {
  console.time('aaa', Date.now())
  const stack = []
  let pointer = str.indexOf('this.config') // echart: this.config；非echarts: this.opts
  let _replace = '', collect = false, cur = '', len = str.length
  if (pointer > -1) {
    do {
      cur = str[pointer]
      if (cur === '{') { // config和opts匹配{}, data匹配[]
        collect = true
        stack.push(cur)
      } else if (cur === '}') {
        stack.pop()
      }
      if (collect) {
        _replace += cur

        if (!stack.length) break
      }
      pointer++
    } while (pointer < len)
  }
  console.timeEnd('aaa', Date.now())
  // console.log(_replace)
  return str.replace(_replace, opts)
}

console.log(valideStr(_str, opts))
