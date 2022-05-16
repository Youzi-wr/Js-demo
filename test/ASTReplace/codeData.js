import echarts from "lib/echarts"
import lodashmin from 'lib/lodash.min'

/**
* 该组件必须返回一个构造函数对象（此处代码无效）
*/
class item extends Base {
  constructor(dom, config) {
    super(dom, config);
    // 图表的配置参数，可右键通过propertyPanel生成
    this.config = {
      "legend": {
        "show": false,
        "left": "12.5%",
        "top": "auto",
        "right": "auto",
        "bottom": "auto",
        "width": "auto",
        "height": "auto",
        "orient": "horizontal",
        "align": "auto",
        "padding": 5,
        "itemGap": 10,
        "itemWidth": 25,
        "itemHeight": 14,
        "selectedMode": true,
        "inactiveColor": "#ccc",
        "textStyle": {
          "color": "rgba(255,255,255,0.9)",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontFamily": "Microsoft Yahei",
          "fontSize": 10
        },
        "backgroundColor": {
          "style": "single",
          "value": "rgba(0,0,0,0)"
        },
        "borderColor": {
          "style": "single",
          "value": "#ccc"
        },
        "borderWidth": 0
      },
      "tooltip": {
        "show": true,
        "trigger": "item",
        "axisPointer": {
          "atype": "line",
          "axis": "auto",
          "snap": false,
          "label": {
            "show": true,
            "precision": 0,
            "margin": 3,
            "textStyle": {
              "color": "#ffffff",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontFamily": "Microsoft Yahei",
              "fontSize": 12
            },
            "backgroundColor": {
              "style": "single",
              "value": "rgba(0,0,0,0)"
            },
            "borderColor": {
              "style": "single",
              "value": "rgba(0,0,0,0)"
            },
            "borderWidth": 0
          },
          "lineStyle": {
            "color": "#555",
            "width": 1,
            "type": "solid",
            "opacity": 1
          },
          "shadowStyle": {
            "color": "rgba(150,150,150,0.3)",
            "opacity": 1
          },
          "crossStyle": {
            "color": "#555",
            "width": 1,
            "type": "dashed",
            "opacity": 1
          }
        },
        "triggerOn": "mousemove",
        "backgroundColor": {
          "style": "single",
          "value": "rgba(50, 50, 50, 0.7)"
        },
        "borderColor": {
          "style": "single",
          "value": "#333"
        },
        "borderWidth": 0,
        "padding": 5,
        "textStyle": {
          "color": "#ffffff",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontFamily": "Microsoft Yahei",
          "fontSize": 12
        }
      },
      "_series": {
        "name": "漏斗图",
        "min": "0",
        "max": "100",
        "minSize": "0%",
        "maxSize": "100%",
        "left": "15%",
        "right": "15%",
        "top": "15",
        "bottom": "15",
        "sort": "descending",
        "gap": 2,
        "legendHoverLink": true,
        "funnelAlign": "center",
        "label": {
          "normal": {
            "show": true,
            "formatterSuite": {
              "show": false,
              "format": "{b}:{c}"
            },
            "normalSeparatingChart": false,
            "normalNumSuffix": "",
            "normalBreakLabel": {
              "show": false,
              "rich": {
                "normalName": {
                  "height": 16
                },
                "normalNum": {
                  "height": 16
                },
                "normalPercent": {
                  "height": 16
                }
              }
            },
            "position": "inside",
            "textStyle": {
              "color": "#fff",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontFamily": "Microsoft Yahei",
              "fontSize": 12
            }
          },
          "emphasis": {
            "show": true,
            "formatterSuite": {
              "show": false,
              "format": "{b}:{c}"
            },
            "emphasisSeparatingChart": false,
            "emphasisNumSuffix": "",
            "emphasisBreakLabel": {
              "show": false,
              "rich": {
                "emphasisName": {
                  "height": 16
                },
                "emphasisNum": {
                  "height": 16
                },
                "emphasisPercent": {
                  "height": 16
                }
              }
            },
            "textStyle": {
              "color": "#fff",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontFamily": "Microsoft Yahei",
              "fontSize": 16
            }
          }
        },
        "labelLine": {
          "normal": {
            "show": false,
            "length": 0,
            "lineStyle": {
              "color": "#000",
              "width": 1,
              "type": "solid",
              "opacity": 1
            }
          },
          "emphasis": {
            "show": false,
            "lineStyle": {
              "color": "#000",
              "width": 1,
              "type": "solid",
              "opacity": 1
            }
          }
        },
        "itemStyle": {
          "normal": {
            "borderColor": {
              "style": "single",
              "value": "#fff"
            },
            "borderWidth": 0,
            "borderType": "solid",
            "opacity": 1
          },
          "emphasis": {
            "borderColor": {
              "style": "single",
              "value": "#000"
            },
            "borderWidth": 0,
            "borderType": "solid",
            "opacity": 1
          }
        }
      },
      "color": [
        "rgb(61, 171, 255)",
        "#70deff",
        "#a3f6ff",
        "#2483ff",
        "#0a73ff"
      ],
      "animation": true,
      "animationThreshold": 2000,
      "animationDuration": 1000,
      "animationEasing": "cubicOut"
    }
    // 组件初始化的数据
    this.data = [
      {
        "value": 60,
        "name": "访问"
      },
      {
        "value": 40,
        "name": "咨询"
      },
      {
        "value": 20,
        "name": "订单"
      },
      {
        "value": 80,
        "name": "点击"
      },
      {
        "value": 100,
        "name": "展现"
      }
    ];
    this.type = 'echarts';
    this.colorProcess = function (color) {
      let c = color
      if (color.value) c = color.value
      return c === '#000' ? '#00000000' : c
    }

    this.tf = function (num) {
      var decimal = String(num).split('.')[1] || ''; //小数部分

      var tempArr = [];

      var revNumArr = String(num).split('.')[0].split('').reverse(); //倒序
      let i = 0
      for (i in revNumArr) {
        tempArr.push(revNumArr[i]);

        if ((i + 1) % 3 === 0 && i != revNumArr.length - 1) {
          tempArr.push(',');
        }
      }

      var zs = tempArr.reverse().join(''); //整数部分

      return decimal ? zs + '.' + decimal : zs;
    }

    this.normal_bqnrV = this.config._series.label.normal.formatterSuite.format
    this.emp_bqnrV = this.config._series.label.emphasis.formatterSuite.format
  }

  /**
  * 组装echarts的option
  * return 返回echarts的option
  */
  transformOptions() {
    const { data, config } = this
    const _config = _.cloneDeep(config)

    const { legend, tooltip, color, _series, animation, animationThreshold, animationDuration, animationEasing } = config

    let ser = _.cloneDeep(_series)
    let normalRich = ser.label.normal.textStyle, emphasisRich = ser.label.emphasis.textStyle;
    let normalP = _series.label.normal
    let emphasisP = _series.label.emphasis
    let self = this
    // 显示标签内容 - 数值/占比 ( b,d% ? b,c)
    if (normalP.formatterSuite.show) {
      this.normal_bqnrV = normalP.formatterSuite.format
      if (normalP.formatterSuite.format.indexOf('c') === -1) {
        this.normal_bqnrV = '{b}:{d}%'
      } else {
        //千分位
        if (normalP.normalSeparatingChart) {
          this.normal_bqnrV = function (v) {
            return v.name + ':' + self.tf(v.value) + normalP.normalNumSuffix;
          }
        }
        else this.normal_bqnrV = '{b}:{c}' /* + normalP.normalNumSuffix */
      }

    }
    else {
      this.normal_bqnrV = '{b}'
    }

    if (emphasisP.formatterSuite.show) {
      this.emp_bqnrV = emphasisP.formatterSuite.format

      if (emphasisP.formatterSuite.format.indexOf('c') === -1) {
        this.emp_bqnrV = '{b}:{d}%'
      } else {
        //千分位
        if (emphasisP.emphasisSeparatingChart) {
          this.emp_bqnrV = function (v) {
            return v.name + ':' + self.tf(v.value) + emphasisP.emphasisNumSuffix;
          }
        }
        else this.emp_bqnrV = '{b}:{c}' /* + emphasisP.emphasisNumSuffix */
      }
    }
    else {
      this.emp_bqnrV = '{b}'
    }

    if (normalP.normalBreakLabel.show && normalP.formatterSuite.show)  //标签折行
    {
      normalRich = Object.assign({}, {
        b: {
          ...normalP.normalBreakLabel.rich.normalName,
          ...normalRich
        },
        c: {
          ...normalP.normalBreakLabel.rich.normalNum,
          ...normalRich
        },
        d: {
          ...normalP.normalBreakLabel.rich.normalPercent,
          ...normalRich
        }
      })

      if (normalP.formatterSuite.format.indexOf('c') === -1) {
        this.normal_bqnrV = '{b|{b}}\n{d|{d}%}'
      } else {
        //千分位
        if (normalP.normalSeparatingChart) {
          this.normal_bqnrV = function (v) {
            return v.name + '\n' + self.tf(v.value) + normalP.normalNumSuffix;
          }
        }
        else this.normal_bqnrV = '{b|{b}}\n{c|{c}' /* + normalP.normalNumSuffix  */ + '}'
      }
    }

    if (emphasisP.emphasisBreakLabel.show && emphasisP.formatterSuite.show)  //标签折行
    {
      emphasisRich = Object.assign(emphasisRich, {
        b: { ...emphasisP.emphasisBreakLabel.rich.emphasisName, ...emphasisRich },
        c: { ...emphasisP.emphasisBreakLabel.rich.emphasisNum, ...emphasisRich },
        d: { ...emphasisP.emphasisBreakLabel.rich.emphasisPercent, ...emphasisRich }
      })

      if (emphasisP.formatterSuite.format.indexOf('c') === -1) {
        this.emp_bqnrV = '{b|{b}}\n{d|{d}%}'
      } else {
        //千分位
        if (emphasisP.emphasisSeparatingChart) {
          this.emp_bqnrV = function (v) {
            return v.name + '\n' + self.tf(v.value) + emphasisP.emphasisNumSuffix;
          }
        }
        else this.emp_bqnrV = '{b|{b}}\n{c|{c}' /* + emphasisP.emphasisNumSuffix  */ + '}'
      }
    }
    const options = {
      ..._config,
      legend: {
        ..._config.legend,
        borderColor: this.colorProcess(_config.legend.borderColor),
        backgroundColor: this.colorProcess(_config.legend.backgroundColor)
      },
      tooltip: {
        ..._config.tooltip,
        formatter: '{a} <br/>{b} : {c}%',
        textStyle: {
          ..._config.tooltip.textStyle,
          color: this.colorProcess(_config.tooltip.textStyle.color)
        },
        borderColor: this.colorProcess(_config.tooltip.borderColor),
        backgroundColor: this.colorProcess(_config.tooltip.backgroundColor),
      },
      series: {
        ..._series,
        type: 'funnel',
        data,
        label: {
          rich: normalRich,
          position: normalP.position,
          textStyle: normalP.textStyle,
          formatter: this.normal_bqnrV
        },
        labelLine: {
          ..._series.labelLine.normal,
          lineStyle: {
            ..._series.labelLine.normal.lineStyle,
            color: this.colorProcess(_series.labelLine.normal.lineStyle.color)
          }

        },
        itemStyle: {
          ..._series.itemStyle.normal,
          borderColor: this.colorProcess(_series.itemStyle.normal.borderColor)
        },
        emphasis: {
          itemStyle: {
            ..._series.itemStyle.emphasis,
            borderColor: this.colorProcess(_series.itemStyle.emphasis.borderColor)
          },
          label: {
            rich: emphasisRich,
            position: emphasisP.position,
            textStyle: emphasisP.textStyle,
            formatter: this.emp_bqnrV
          },
          labelLine: {
            ..._series.labelLine.emphasis,
            lineStyle: {
              ..._series.labelLine.emphasis.lineStyle,
              color: this.colorProcess(_series.labelLine.emphasis.lineStyle.color)
            }
          }
        }
      }
    }
    // console.log(options)
    return options

  }
};
