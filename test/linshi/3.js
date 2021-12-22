import echarts from "lib/echarts"

/**
* 该组件必须返回一个构造函数对象（此处代码无效）。
*/
return class item extends Base {
  constructor(dom, config) {
    super(dom, config);
    this.themeIndex = 0;

    // 组件的配置参数。
    this.config = {
      "options": {
        "chart": {
          "pie": {
            "outerBorderColor": "#f15cb4"
          },
          "numericalLabel": {
            "show": true,
            "textStyle": {
              "fontFamily": "Microsoft Yahei",
              "fontWeight": "normal",
              "fontSize": 12,
              "color": "#d48806"
            },
            "real": true,
            "decimal": 0
          },
          "categoryLabel": {
            "show": true,
            "textStyle": {
              "fontFamily": "Microsoft Yahei",
              "fontWeight": "normal",
              "fontSize": 12,
              "color": "rgb(144, 160, 174)"
            }
          },
          "labelLine": {
            "show": true,
            "dx": 0.74,
            "dr": 0.88
          },
          "legend": {
            "show": true,
            "textarea": {
              "fontFamily": "Microsoft Yahei",
              "fontWeight": "normal",
              "fontSize": 10,
              "color": "rgba(255,255,255,0.5)"
            },
            "layout": {
              "margin": {
                "horiInterval": 18,
                "vertiInterval": 0
              },
              "loc": "bottom-center"
            }
          }
        },
        "axis": {
          "radiusAxis": {
            "radius": 1,
            "grid": {
              "show": true,
              "color": "#a9c114"
            }
          }
        },
        "series": {
          "series": [
            {
              "color": {
                "type": "flat",
                "value": "#79daff"
              },
              "radius": {
                "innerRadius": 0.6,
                "outerRadius": 0.7
              }
            },
            {
              "color": {
                "type": "flat",
                "value": "#2483ff"
              },
              "radius": {
                "innerRadius": 0.5,
                "outerRadius": 0.67
              }
            },
            {
              "color": {
                "type": "flat",
                "value": "#aaeeff"
              },
              "radius": {
                "innerRadius": 0.78,
                "outerRadius": 0.81
              }
            },
            {
              "color": {
                "type": "flat",
                "value": "#00b3ff"
              },
              "radius": {
                "innerRadius": 0.73,
                "outerRadius": 0.81
              }
            },
            {
              "color": {
                "type": "flat",
                "value": "#57cdff"
              },
              "radius": {
                "innerRadius": 0.58,
                "outerRadius": 0.67
              }
            },
            {
              "color": {
                "type": "flat",
                "value": "#0a73ff"
              },
              "radius": {
                "innerRadius": 0.56,
                "outerRadius": 0.83
              }
            }
          ]
        },
        "others": {
          "animation": {
            "show": true,
            "setting": {
              "animationEasing": "cubicInOut",
              "animationAfterPreviousSeries": false,
              "animationAllFromZero": true
            },
            "enter": {
              "animationDuration": 1000
            },
            "update": {
              "animationDurationUpdate": 300,
              "animationUpdateFromPrevious": true
            }
          },
          "tooltip": {
            "show": true,
            "hideDelay": 100,
            "trigger": {
              "action": "hover"
            },
            "textStyle": {
              "fontFamily": "Microsoft Yahei",
              "fontWeight": "normal",
              "fontSize": 14,
              "color": "#fff"
            },
            "bgBox": {
              "backgroundColor": "rgba(0, 0, 0, 0.65)",
              "customSize": {
                "show": false,
                "width": 50,
                "height": 50
              },
              "padding": 10,
              "offset": {
                "xOffset": 6,
                "yOffset": 10
              },
              "border": {
                "borderWidth": 0,
                "borderColor": "#333"
              }
            }
          }
        }
      }
    }
    this.data = [
      {
        "x": "货物1",
        "y": "14"
      },
      {
        "x": "货物2",
        "y": "12"
      },
      {
        "x": "货物3",
        "y": "18"
      },
      {
        "x": "货物4",
        "y": "10"
      },
      {
        "x": "货物5",
        "y": "20"
      },
      {
        "x": "货物6",
        "y": "10"
      }
    ]
    this.type = 'echarts';
    this.themeIndex = 1;
  }

  transformOptions() {
    const { chart: { pie, legend, labelLine, categoryLabel, numericalLabel }, axis: { radiusAxis }, series: { series }, others: { animation, tooltip } } = this.config.options
    const data = this.data.slice(0)

    const order = data.reduce((acc, d, i) => {
      acc[0] += Number(d.y)
      return acc.concat(acc[0])
    }, [0])
    let reverseOrder = data.reverse().reduce((acc, d, i) => {
      acc[0] += Number(d.y)
      return acc.concat(acc[0])
    }, [0])
    const total = order[order.length - 1]
    order.splice(0, 1, 0)
    reverseOrder = reverseOrder.slice(1, -1).reverse().concat(0)

    const seriesItem = this.data.map((d, i) => {
      const { color, radius } = series[i]
      const transparentItemStyle = {
        "normal": {
          "color": 'rgba(0,0,0,0)',
          "label": {
            "show": false
          },
          "labelLine": { "show": false }
        },
        "emphasis": { "color": 'rgba(0,0,0,0)' },
      }

      return {
        "name": d.x,
        "type": "pie",
        "radius": [radius.innerRadius * 100, radius.outerRadius * 100],
        "label": {
          "show": labelLine.show,
          "color": color.value,
          "fontSize": 18,
          "position": 'outer',
          "alignTo": 'edge',
          "edgeDistance": '10%'
        },
        "labelLine": {
          // "length": 40,
          // "length2": 200,
          "minTurnAngle": 70,
          "maxSurfaceAngle": 180
        },
        "labelLayout": {
          // "x": 200,
          // "dx": 100,
          // "align": 'center',
          "verticalAlign": 'middle'
        },
        "hoverAnimation": false,
        "data": [
          {
            "value": order[i],
            "itemStyle": transparentItemStyle,
          },
          {
            "value": Number(d.y),
            "name": d.x,
            "label": {
              "show": true,
              "formatter": function (param) {
                if (numericalLabel.real) {
                  return `{s| ${numericalLabel.show ? param.value : ''}} \n{ss| ${categoryLabel.show ? param.name : ''}}`;
                } else {
                  return `{s| ${numericalLabel.show ? param.percent.toFixed(numericalLabel.decimal) : ''}%} \n{ss| ${categoryLabel.show ? param.name : ''}}`;
                }
              },
              "rich": {
                "s": numericalLabel.textStyle,
                "ss": categoryLabel.textStyle
              }
            }
          },
          {
            "value": reverseOrder[i],
            "itemStyle": transparentItemStyle,
          }
        ],
      }
    }).concat({
      type: 'bar',
      data: [0],
      coordinateSystem: 'polar',
      name: '06a',
      stack: 'a',
    })

    const seriesColor = series.map(s => s.color.value)

    const option = {
      "color": seriesColor,
      "legend": {
        "show": legend.show,
        "data": data.map(i => i.x),
        "textStyle": legend.textarea,
        "top": legend.layout.loc.split('-')[0],
        "left": legend.layout.loc.split('-')[1],
        "itemGap": legend.layout.margin.horiInterval,
        "padding": [legend.layout.margin.vertiInterval, 0],
        "height": 24
      },
      "tooltip": {
        "show": tooltip.show,
        "hideDelay": tooltip.hideDelay,
        "trigger": "item",
        "triggerOn": tooltip.trigger.action === 'hover' ? 'mousemove' : 'click',
        "textStyle": tooltip.textStyle,
        "backgroundColor": tooltip.bgBox.backgroundColor,
        "padding": tooltip.bgBox.padding,
        "borderWidth": tooltip.bgBox.border.borderWidth,
        "borderColor": tooltip.bgBox.border.borderColor,
        "extraCssText": tooltip.bgBox.customSize.show ? `width:${tooltip.bgBox.customSize.width}px;height:${tooltip.bgBox.customSize.height}px;` : '',
        // "position": ['10%','10%'],
        "formatter": '{a}: {c} ({d}%)'
      },
      "angleAxis": {
        "type": "category",
        "axisLine": {
          "show": true,
          "lineStyle": {
            "width": 1,
            "color": pie.outerBorderColor
          }
        }
      },
      "radiusAxis": {
        "axisTick": { "show": false },
        "axisLabel": { "show": false },
        "axisLine": { "show": false },
        "splitLine": {
          "show": radiusAxis.grid.show,
          "lineStyle": {
            "type": "dashed",
            "color": radiusAxis.grid.color,
            "opacity": 0.5
          }
        }
      },
      "polar": { //极坐标
        "center": ["50%", "50%"],
        "radius": radiusAxis.radius * 100
      },
      "series": seriesItem
    }
    return option
  }
};
