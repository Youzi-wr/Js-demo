import echarts from "lib/echarts"

/**
* 该组件必须返回一个构造函数对象（此处代码无效）
*/

class item extends Base {
  constructor(dom, config) {
    super(dom, config);
    // 组件的配置参数
    this.config = {
      "options": {
        "chart": {
          "margin": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0
          },
          "pieStyle": {
            "stroke": "#fff",
            "lineWidth": 0
          },
          "numericalLabel": {
            "show": false,
            "position": "inner",
            "spiderStyle": {
              "show": true,
              "stroke": "#ddd",
              "lineWidth": "1"
            },
            "textStyle": {
              "fontSize": 10,
              "color": "#ddd",
              "fontWeight": "normal",
              "fontFamily": "Microsoft Yahei"
            }
          },
          "legend": {
            "show": true,
            "flipPage": true,
            "layout": {
              "loc": "top-right"
            },
            "marker": {
              "show": true,
              "shape": "circle",
              "size": 4
            },
            "textStyle": {
              "fontFamily": "Microsoft Yahei",
              "fontWeight": "normal",
              "fontSize": 12,
              "color": "rgb(144, 160, 174)"
            }
          }
        },
        "axis": {
          "radiusAxis": {
            "radius": 0.8
          }
        },
        "series": {
          "series": [
            {
              "color": "#79daff",
              "mapping": {
                "fieldValue": "设备",
                "serieName": "设备1"
              }
            },
            {
              "color": "#3dabff",
              "mapping": {
                "fieldValue": "建材",
                "serieName": "建材1"
              }
            },
            {
              "color": "#0a73ff",
              "mapping": {
                "fieldValue": "食品",
                "serieName": "食品1"
              }
            }
          ],
          "seriesMapping": false
        },
        "others": {
          "tooltip": {
            "show": true,
            "textStyle": {
              "fontFamily": "Microsoft Yahei",
              "fontWeight": "normal",
              "fontSize": 14,
              "color": "#fff"
            },
            "bgBox": {
              "backgroundColor": "rgba(0, 0, 0, 0.65)",
              "padding": 10,
              "border": {
                "borderWidth": 0,
                "borderColor": "#333"
              }
            }
          }
        }
      }
    }
    // 组件初始化的数据
    this.data = [{ value: 1548, name: 'CityE' },
    { value: 735, name: 'CityC' },
    { value: 510, name: 'CityD' },
    { value: 434, name: 'CityB' },
    { value: 335, name: 'CityA' }
    ];
    this.type = 'echarts';
  }

  getOption(data) {
    const chartOption = {
      tooltip: {
        show: this.config.options.others.tooltip.show,
        trigger: 'item',
        backgroundColor: this.config.options.others.tooltip.bgBox.backgroundColor,
        borderWidth: this.config.options.others.tooltip.bgBox.border.borderWidth,
        borderColor: this.config.options.others.tooltip.bgBox.border.borderColor,
        padding: this.config.options.others.tooltip.bgBox.padding,
        textStyle: {
          color: this.config.options.others.tooltip.textStyle.color,
          fontFamily: this.config.options.others.tooltip.textStyle.fontFamily,
          fontSize: this.config.options.others.tooltip.textStyle.fontSize,
          fontWeight: this.config.options.others.tooltip.textStyle.fontWeight
        },
        formatter: '{b} : {c} ({d}%)'
      },
      grid: this.config.options.chart.margin,
      series: [
        {
          type: 'pie',
          radius: (Math.round(this.config.options.axis.radiusAxis.radius * 10000) / 100).toFixed(0) + '%',
          center: ['50%', '50%'],
          selectedMode: 'single',
          colorBy: 'data',
          itemStyle: {
            borderColor: this.config.options.chart.pieStyle.stroke,
            borderWidth: this.config.options.chart.pieStyle.lineWidth,
          },
          label: {
            show: this.config.options.chart.numericalLabel.show,
            position: this.config.options.chart.numericalLabel.position,
            fontSize: this.config.options.chart.numericalLabel.textStyle.fontSize,
            color: this.config.options.chart.numericalLabel.textStyle.color,
            fontWeight: this.config.options.chart.numericalLabel.textStyle.fontWeight,
            fontFamily: this.config.options.chart.numericalLabel.textStyle.fontFamily,
          },
          labelLine: {
            show: this.config.options.chart.numericalLabel.spiderStyle.show,
            lineStyle: {
              width: this.config.options.chart.numericalLabel.spiderStyle.lineWidth,
              color: this.config.options.chart.numericalLabel.spiderStyle.stroke
            }
          },
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ],
      visualMap: {
        show: this.config.options.chart.legend.show,
        top: this.config.options.chart.legend.layout.loc.split('-')[0],
        left: this.config.options.chart.legend.layout.loc.split('-')[1],
        type: 'continuous',
        min: 100,
        max: 800,
        textStyle: {
          color: this.config.options.chart.legend.textStyle.color,
          fontFamily: this.config.options.chart.legend.textStyle.fontFamily,
          fontSize: this.config.options.chart.legend.textStyle.fontSize,
          fontWeight: this.config.options.chart.legend.textStyle.fontWeight,
        },


        hoverLink: false,
        calculable: true,
        orient: 'horizontal',
        inRange: {
          color: this.themes[1]
        }
      }
    };
    if (this.config.options.chart.numericalLabel.position === 'spider') {
      chartOption.series[0].label.position = 'outside'
      chartOption.series[0].labelLine.length2 = 50
      chartOption.series[0].labelLine.length = 10
    }


    //计算半径和边距
    const margins = this.config.options.chart.margin
    const divHeight = this.dom.offsetHeight || this.size.height
    const divWidth = this.dom.offsetWidth || this.size.width
    const diamHeigth = divHeight - margins.top - margins.bottom
    const diamWidth = divWidth - margins.left - margins.right
    let tempRadius = null
    let radiusPercent = null
    if (diamHeigth > diamWidth) {
      tempRadius = diamWidth
      radiusPercent = (diamWidth / divWidth * this.config.options.axis.radiusAxis.radius * 100).toFixed(0) + '%'
    } else {
      tempRadius = diamHeigth
      radiusPercent = (diamHeigth / divHeight * this.config.options.axis.radiusAxis.radius * 100).toFixed(0) + '%'
    }
    const left = diamWidth / 2 + margins.left
    const top = diamHeigth / 2 + margins.top
    const leftPercent = (left / divWidth * 100).toFixed(0) + '%'
    const topPercent = (top / divHeight * 100).toFixed(0) + '%'
    chartOption.series[0].center = [leftPercent, topPercent]
    chartOption.series[0].radius = radiusPercent
    return chartOption
  }


  transformOptions() {
    return this.getOption(this.data)
  }


  onExecute(data, inputs, outputs, blueprint) {
    let curExecName = blueprint.curExecName;
    if (!['执行', '显示', '隐藏'].includes(curExecName)) {
      return
    }
    this.data = inputs['数据'] || this.data;
    if (curExecName === "显示") {
      this.setOption((() => {
        return this.getOption(this.data)
      })())
    } else if (curExecName === "隐藏") {
      this.dom.style.display = 'none'
    } else if (curExecName === "执行") {
      this.dom.style.display = ''
    }
  }



};
