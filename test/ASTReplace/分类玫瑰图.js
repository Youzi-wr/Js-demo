import echarts from "lib/echarts.5.2.0.min"

/**
* echarts 视觉映射不支持三角形
* echarts 视觉映射控制器不支持分页和换行，去掉了换行和纵向间距
* echarts 控制器标注和DataV不同,去掉了居中
* echarts 角度轴不支持扇形,开始角度和结束角度改成了是否顺时针
* echarts 角度轴不支持轴标题显示
* echarts 角度轴标签不支持旋转
* echarts 动画类型和DataV不同
* 上述功能如需还原需要thingui给出解决方案
*/
class item extends Base {
  constructor(dom, config) {
    super(dom, config);
    // 组件初始化的数据
    this.data = [
      {
        "t": "类型一",
        "r": 28,
        "colorField": 100
      },
      {
        "t": "类型二",
        "r": 20,
        "colorField": 200
      },
      {
        "t": "类型三",
        "r": 18,
        "colorField": 300
      },
      {
        "t": "类型四",
        "r": 16,
        "colorField": 400
      },
      {
        "t": "类型五",
        "r": 20,
        "colorField": 500
      },
      {
        "t": "类型六",
        "r": 16,
        "colorField": 600
      },
      {
        "t": "类型七",
        "r": 10,
        "colorField": 700
      },
      {
        "t": "类型八",
        "r": 26,
        "colorField": 800
      },
      {
        "t": "类型九",
        "r": 38,
        "colorField": 900
      },
      {
        "t": "类型十",
        "r": 16,
        "colorField": 1000
      },
      {
        "t": "类型一",
        "r": 18,
        "colorField": 1100
      },
      {
        "t": "类型二",
        "r": 16,
        "colorField": 1200
      },
      {
        "t": "类型三",
        "r": 12,
        "colorField": 1300
      },
      {
        "t": "类型四",
        "r": 10,
        "colorField": 1400
      },
      {
        "t": "类型五",
        "r": 38,
        "colorField": 1500
      },
      {
        "t": "类型六",
        "r": 6,
        "colorField": 1600
      },
      {
        "t": "类型七",
        "r": 8,
        "colorField": 1700
      },
      {
        "t": "类型八",
        "r": 8,
        "colorField": 1800
      },
      {
        "t": "类型九",
        "r": 28,
        "colorField": 1900
      },
      {
        "t": "类型十",
        "r": 10,
        "colorField": 2000
      }
    ]

    // this.type = 'echarts';

    this.opts = {
      "options": {
        "chart": {
          "margin": {
            "show": true,
            "top": 40,
            "bottom": 30,
            "left": 30,
            "right": 20
          },
          "typeStyle": "stack",
          "radius": {
            "innerRadius": 10,
            "outerRadius": 100
          },
          "fill": {
            "mapping": true,
            "fixed": {
              "type": "flat",
              "value": "#2483ff"
            },
            "scale": {
              "type": "linear",
              "scheme": "seq-2",
              "custom": false,
              "range": [
                "#34fff5",
                "#31e0f2",
                "#2dc0ee",
                "#2aa1eb",
                "#2782e7",
                "#2362e4"
              ],
              "domain": [
                0,
                250
              ],
              "excepted": "yellow",
              "abnormal": "yellow",
              "pin": [
                false,
                false,
                false
              ]
            }
          },
          "pieStyle": {
            "lineStyle": "solid",
            "lineWidth": 1,
            "color": "rgba(0,0,0,0.25)",
            "dashedLength": 3,
            "dashedSpace": 8,
            "dottedLength": 2,
            "dottedSpace": 4
          },
          "numericalLabel": {
            "show": false,
            "labelContent": "r",
            "valueFormat": "null",
            "describe": {
              "prefix": "",
              "suffix": ""
            },
            "offset": 0,
            "textStyle": {
              "fontFamily": "Arial",
              "fontWeight": "normal",
              "fontSize": 12,
              "color": "#ddd"
            },
            "stroke": {
              "lineWidth": 0,
              "stroke": "#000"
            }
          }
        },
        "axis": {
          "yaxis": {
            "isShow": true,
            "type": "linear",
            "extent": {
              "min": "0",
              "max": "max"
            },
            "axisLine": {
              "show": true,
              "line": {
                "lineStyle": "solid",
                "lineWidth": 1,
                "lineColor": "rgba(233, 228, 228, 0.25)",
                "dashedLength": 3,
                "dashedSpace": 8,
                "dottedLength": 2,
                "dottedSpace": 4
              }
            },
            "title": {
              "show": false,
              "text": "半径轴",
              "display": {
                "rotate": -90,
                "offset": -20
              },
              "textStyle": {
                "fontFamily": "Arial",
                "fontWeight": "normal",
                "fontSize": 12,
                "color": "rgb(144, 160, 174)"
              }
            },
            "tickLine": {
              "show": false,
              "line": {
                "lineLen": 2,
                "lineWidth": 1,
                "lineColor": "rgba(233, 228, 228, 0.25)"
              }
            },
            "label": {
              "show": false,
              "timeFormat": "{MM}/{dd}",
              "valueFormat": "d",
              "display": {
                "tickCount": 6, 
                "prefix": "",
                "suffix": "",
                "rotate": 0,
                "offset": 10,
                "alignment": "center"
              },
              "textStyle": {
                "fontFamily": "Arial",
                "fontWeight": "normal",
                "fontSize": 12,
                "color": "rgb(144, 160, 174)"
              }
            },
            "grid": {
              "show": true,
              "line": {
                "lineStyle": "dashed",
                "lineWidth": 1,
                "lineColor": "rgba(233, 228, 228, 0.15)",
                "dashedLength": 4,
                "dashedSpace": 4,
                "dottedLength": 2,
                "dottedSpace": 4
              }
            }
          },
          "xaxis": {
            "isShow": true,
            "type": "cat",
            "groupType": "cat",
            "extent": {
              "min": "0",
              "max": "max"
            },
            "angle": {
              "startAngle": 90,
              "clockwise": "clockwise"
            },
            "axisLine": {
              "show": false,
              "line": {
                "lineStyle": "solid",
                "lineWidth": 1,
                "lineColor": "rgba(233, 228, 228, 0.25)",
                "dashedLength": 3,
                "dashedSpace": 8,
                "dottedLength": 2,
                "dottedSpace": 4
              }
            },
            "tickLine": {
              "show": false,
              "line": {
                "lineLen": 2,
                "lineWidth": 1,
                "lineColor": "rgba(233, 228, 228, 0.25)"
              }
            },
            "label": {
              "show": true,
              "timeFormat": "{yyyy}年",
              "valueFormat": "d",
              "display": {
                "prefix": "",
                "suffix": "",
                "offset": 10,
                "alignment": "center"
              },
              "textStyle": {
                "fontFamily": "Arial",
                "fontWeight": "normal",
                "fontSize": 12,
                "color": "rgb(144, 160, 174)"
              }
            },
            "grid": {
              "show": true,
              "line": {
                "lineStyle": "dashed",
                "lineWidth": 1,
                "lineColor": "rgba(233, 228, 228, 0.1)",
                "dashedLength": 4,
                "dashedSpace": 4,
                "dottedLength": 2,
                "dottedSpace": 4
              }
            }
          }
        },
        "animation": {
          "isShow": true,
          "duration": 1000
        },
        "tooltip": {
          "tooltipSet": {
            "show": true,
            "trigger": "mousemove",
            "position": "left",
            "titleSpace": 16,
            "titleTextStyle": {
              "fontFamily": "Arial",
              "fontWeight": "normal",
              "fontSize": 14,
              "color": "#fff"
            },
            "series": [
              {
                "columnName": "r",
                "displayName": "类型"
              },
              {
                "columnName": "t",
                "displayName": "销量"
              },
              {
                "columnName": "colorField",
                "displayName": "收入"
              }
            ],
            "contentSpace": 14,
            "contentTextStyle": {
              "fontFamily": "Arial",
              "fontWeight": "normal",
              "fontSize": 14,
              "color": "#fff"
            },
            "bgBox": {
              "padding": {
                "paddingX": 10,
                "paddingY": 10
              },
              "backgroundColor": "rgba(0, 0, 0, 0.65)",
              "border": {
                "borderRadius": 4,
                "borderWidth": 1,
                "borderColor": "rgba(0,0,0,0.25)"
              }
            }
          },
          "active": {
            "show": true,
            "trigger": "click",
            "selectType": "single",
            "fillSet": {
              "show": false,
              "fill": {
                "type": "linearGradient",
                "value": {
                  "angle": 90,
                  "stops": [
                    {
                      "offset": 0,
                      "color": "#00ff95"
                    },
                    {
                      "offset": 100,
                      "color": "rgba(88, 142, 233, 0.5)"
                    }
                  ]
                }
              }
            },
            "line": {
              "lineStyle": "solid",
              "lineWidth": 1,
              "lineColor": "#ffffff",
              "dashedLength": 3,
              "dashedSpace": 8,
              "dottedLength": 2,
              "dottedSpace": 4
            }
          }
        },
        "legend": {
          "isShow": true,
          "layout": "top-left",
          "textStyle": {
            "fontFamily": "Arial",
            "fontWeight": "normal",
            "fontSize": 12,
            "color": "rgb(144, 160, 174)"
          },
          "cateLegend": {
            "marker": {
              "shape": "circle",
              "size": 10
            },
            "markerSpace": {
              "spacing": 4
            }
          },
          "continuousLegend": {
            "track": {
              "type": "color",
              "width": 12,
              "height": 100,
              "railColor": "rgba(89, 89, 89, 0.1)"
            },
            "handler": {
              "min": "auto",
              "max": "auto",
              "size": 16,
              "fill": "#f0f0f0"
            },
            "label": {
              "alignHorizon": "bottom",
              "alignVerizon": "left",
              "spacing": 6
            }
          }
        }
      }
    }

    this.useResizeScale = false

    this.typeMap = {
      'cat': 'category',
      'linear': 'value',
      'timeCat': 'time'
    }
    this.dMap = { 't': 0, 'r': 1, 'colorField': 2 }
  }

  render() {
    return <div class="chart" ref="chart" style={{ width: '100%', height: '100%' }}>
    </div>
  }

  mounted() {
    const options = this.transformOptions()
    this.chartInstance = echarts.init(this.instance.$refs.chart)
    options && this.chartInstance && this.chartInstance.setOption(options)
  }

  resize() {
    this.chartInstance && this.chartInstance.resize()
    this.setOption()
  }

  setOption(opts) {
    if (opts) {
      this.opts = opts
    }
    const options = this.transformOptions()
    options && this.chartInstance && this.chartInstance.setOption(options)
  }

  /**
  * 组装echarts的option
  * return 返回echarts的option
  */
  transformOptions() {
    const { opts, data } = this

    const {
      chart: {
        margin,
        typeStyle,
        radius: {
          innerRadius,
          outerRadius,
        },
        fill, // 视觉映射
        pieStyle,
        numericalLabel,
      },
      axis: {
        yaxis, // 半径轴
        xaxis, // 角度轴
      },
      animation,
      tooltip: {
        tooltipSet,
        active,
      },
      legend,
    } = opts.options

    // 计算宽高
    const polar = this.getPolar(margin, innerRadius, outerRadius)
    // 角度轴
    const angleAxis = this.getAngleAxis(xaxis, typeStyle)
    // 半径轴
    const radiusAxis = this.getRadiusAxis(yaxis)

    const tooltip = this.getTooltip(tooltipSet)

    const visualMap = this.getVisualMap(fill, legend)

    const series = this.getSeries(data, typeStyle, pieStyle, numericalLabel, active)

    const options = {
      polar,
      visualMap,
      angleAxis,
      radiusAxis,
      tooltip,
      series,
      animation: animation.isShow,
      animationDuration: animation.duration,
      animationDurationUpdate: animation.duration,
      animationEasingUpdate: animation.animationEasing,
    }
    return options
  }

  floatToPercent(val) {
    return val + '%'
  }

  getPolar(margin, innerRadius, outerRadius) {
    const polar = {}
    if (margin.show) {
      const boxWidth = this.dom.clientWidth
      const boxHeight = this.dom.clientHeight
      const innerBox = {}
      innerBox.width = boxWidth - margin.left - margin.right
      innerBox.height = boxHeight - margin.top - margin.bottom
      innerBox.center = [margin.left + innerBox.width / 2, margin.top + innerBox.height / 2]
      innerBox.radiusRatio = (Math.min(innerBox.width, innerBox.height) / Math.min(boxWidth, boxHeight)).toFixed(2)

      polar.center = innerBox.center
      polar.radius = [this.floatToPercent(innerRadius * innerBox.radiusRatio), this.floatToPercent(outerRadius * innerBox.radiusRatio)]

    } else {
      polar.center = ['50%', '50%']
      polar.radius = [this.floatToPercent(innerRadius), this.floatToPercent(outerRadius)]
    }
    return polar
  }

  getAngleAxis(axis, typeStyle) {
    const { typeMap } = this

    const {
      isShow,
      type,
      groupType,
      extent,
      angle, // 暂无
      axisLine,
      title,
      tickLine,
      label,
      grid
    } = axis
    //角度  类目轴
    const obj = {}
    // 展示形式为分组时，使用groupType
    obj.type = typeStyle === 'group' ? typeMap[groupType] : typeMap[type]
    if (obj.type === 'value') {
      obj.min = extent.min === 'min' ? 'dataMin' : extent.min
      obj.max = extent.max === 'max' ? 'dataMax' : extent.max
    }
    // 角度
    // echarts角度轴没有角度范围
    obj.startAngle = angle.startAngle
    obj.clockwise = angle.clockwise === 'clockwise' ? true : false
    // 轴线
    obj.axisLine = {
      show: isShow && axisLine.show,
      lineStyle: this.getLineStyle(axisLine.line)
    }
    // 轴标题
    // echarts角度轴没有name
    // 刻度线
    obj.axisTick = {
      show: isShow && tickLine.show,
      alignWithLabel: true,
      length: tickLine.line.lineLen,
      lineStyle: {
        color: tickLine.line.lineColor,
        width: tickLine.line.lineWidth,
      }
    }
    // 轴标签
    // 角度轴的标签没有rotate
    obj.axisLabel = {
      show: isShow && label.show,
      formatter: this.getFormat(obj.type, label),
      margin: label.display.offset,
      align: label.display.alignment === 'start' ? 'left' : label.display.alignment === 'end' ? 'right' : 'center',
      ...label.textStyle,
    }
    // 网格线
    obj.splitLine = {
      show: isShow && grid.show,
      lineStyle: this.getLineStyle(grid.line),
    }
    return obj
  }

  getRadiusAxis(axis) {
    const { typeMap } = this

    const {
      isShow,
      type,
      groupType,
      extent,
      axisLine,
      title,
      tickLine,
      label,
      grid
    } = axis
    //角度  类目轴
    const obj = {}
    // 展示形式为分组时，使用groupType
    obj.z = 10
    obj.type = typeMap[type]
    if (obj.type === 'value') {
      obj.min = extent.min === 'min' ? 'dataMin' : extent.min
      obj.max = extent.max === 'max' ? 'dataMax' : extent.max
    }
    obj.splitNumber = +label.display.tickCount - 1
    // 轴线
    obj.axisLine = {
      show: isShow && axisLine.show,
      lineStyle: this.getLineStyle(axisLine.line)
    }
    // 轴标题
    if (title.show) {
      obj.name = title.text
      obj.nameRotate = title.display.rotate
      obj.nameGap = title.display.offset
      obj.nameTextStyle = title.textStyle
    }

    // 刻度线
    obj.axisTick = {
      show: isShow && tickLine.show,
      alignWithLabel: true,
      length: tickLine.line.lineLen,
      lineStyle: {
        color: tickLine.line.lineColor,
        width: tickLine.line.lineWidth,
      }
    }
    // 轴标签
    obj.axisLabel = {
      show: isShow && label.show,
      formatter: this.getFormat(obj.type, label),
      margin: label.display.offset,
      rotate: label.display.rotate,
      align: label.display.alignment === 'start' ? 'left' : label.display.alignment === 'end' ? 'right' : 'center',
      ...label.textStyle,
    }
    // 网格线
    obj.splitLine = {
      show: isShow && grid.show,
      lineStyle: this.getLineStyle(grid.line),
    }
    return obj
  }

  getFormat(type, label) {
    let formatter = null
    if (type === 'time') { // 时间型
      formatter = `${label.display.prefix}${label.tmieFormat}${label.display.suffix}`
    } else if (type === 'value') {
      formatter = this.getValueFormat(label.valueFormat, label.display.prefix, label.display.suffix)
    } else {
      formatter = `${label.display.prefix}{value}${label.display.suffix}`
    }

    return formatter
  }

  getValueFormat(valueFormat, prefix, suffix) {
    let res = null
    if (valueFormat === 'd') {
      res = v => prefix + (+v).toFixed(0) + suffix
    } else if (valueFormat === 'th') {
      res = v => prefix + (+(+v).toFixed(0)).toLocaleString() + suffix
    } else if (/\.\df/.test(valueFormat)) {
      res = v => prefix + (+v).toFixed(valueFormat[1]) + suffix
    } else if (/\.\d%/.test(valueFormat)) {
      res = v => prefix + (v * 100).toFixed(valueFormat[1]) + '%' + suffix
    } else if (/\.\dt/.test(valueFormat)) {
      res = v => prefix + (+(+v).toFixed(valueFormat[1])).toLocaleString() + suffix
    } else {
      res = v => prefix + v + suffix
    }
    return res
  }

  getLineStyle(line) {
    const {
      lineStyle,
      lineWidth,
      lineColor,
      dashedLength,
      dashedSpace,
      dottedLength,
      dottedSpace
    } = line
    return {
      type: lineStyle === 'solid' ? lineStyle : lineStyle === 'dashed' ? [dashedLength, dashedSpace] : [dottedLength, dottedSpace],
      width: lineWidth,
      color: lineColor,
    }
  }

  getVisualMap(fill, legend) {
    const {
      mapping, // 是否开启视觉映射
      fixed, // 关闭视觉映射后使用的颜色
      scale,
    } = fill

    const {
      isShow,
      layout,
      textStyle,
      cateLegend,
      continuousLegend,
    } = legend


    const colorFieldArr = this.data.map(({ colorField }) => colorField)
    const min = Math.min(...colorFieldArr)
    const max = Math.max(...colorFieldArr)

    let visualMap = {
      dimension: 2,
      realtime: true,
      calculable: true,
      hoverLink: false,
      show: isShow,
      textStyle: textStyle,
    }

    if (mapping) {
      if (scale.type === 'linear') { // 数值连续
        visualMap = {
          ...visualMap,
          type: 'continuous',
          min,
          max,
          range: [continuousLegend.handler.min === 'auto' ? min : continuousLegend.handler.min, continuousLegend.handler.max === 'auto' ? max : continuousLegend.handler.max],
          text: [max, min],
          textGap: continuousLegend.label.spacing,
          inRange: {
            color: scale.range,
          },
          controller: {
            outOfRange: {
              color: continuousLegend.track.railColor,
            },
          },
          itemWidth: continuousLegend.track.width,
          itemHeight: continuousLegend.track.height,
          handleStyle: {
            color: continuousLegend.handler.fill,
            borderColor: continuousLegend.handler.fill,
            borderWidth: 2,
          },
          handleSize: continuousLegend.handler.size,
        }
      } else if (scale.type === 'threshold') { // 数值分区
        if (!scale.custom) {
          visualMap = {
            ...visualMap,
            type: 'piecewise',
            splitNumber: scale.range.length,
            min,
            max,
            inRange: {
              color: scale.range,
            },
            itemGap: cateLegend.markerSpace.spacing,
            itemSymbol: this.getSymbolIcon(cateLegend.marker.shape),
            itemWidth: cateLegend.marker.size,
            itemHeight: cateLegend.marker.size,
          }
        } else {
          const pieces = []
          for (let i = 0; i < scale.domain.length - 1; i++) {
            pieces.push({
              min: scale.domain[i],
              max: scale.domain[i + 1],
            })
          }
          visualMap = {
            ...visualMap,
            type: 'piecewise',
            pieces,
            inRange: {
              color: scale.range,
            },
            itemGap: cateLegend.markerSpace.spacing,
            itemSymbol: this.getSymbolIcon(cateLegend.marker.shape),
            itemWidth: cateLegend.marker.size,
            itemHeight: cateLegend.marker.size,
          }
        }
      } else if (scale.type === 'ordinal') { // 名词分类
        let colorArr = null
        if (!scale.custom) { // 关闭自定义
          colorArr = []
          for (let i = 0; i < colorFieldArr.length; i++) {
            colorArr.push(scale.range[i % (scale.range.length)])
          }
          visualMap = {
            ...visualMap,
            type: 'piecewise',
            categories: colorFieldArr,
            inRange: {
              color: colorArr,
            },
            itemGap: cateLegend.markerSpace.spacing,
            itemSymbol: this.getSymbolIcon(cateLegend.marker.shape),
            itemWidth: cateLegend.marker.size,
            itemHeight: cateLegend.marker.size,
          }
        } else { // 开启自定义
          colorArr = []
          colorFieldArr.forEach((item, index) => {
            const pos = scale.domain.indexOf(item.toString())
            if (pos === -1) {
              colorArr.push(scale.excepted)
            } else {
              colorArr.push(scale.range[pos])
            }
          })

          visualMap = {
            ...visualMap,
            type: 'piecewise',
            categories: colorFieldArr,
            inRange: {
              color: colorArr,
            },
            itemGap: cateLegend.markerSpace.spacing,
            itemSymbol: this.getSymbolIcon(cateLegend.marker.shape),
            itemWidth: cateLegend.marker.size,
            itemHeight: cateLegend.marker.size,
          }
        }
      }
    } else { // 关闭视觉映射
      visualMap = {
        ...visualMap,
        type: 'piecewise',
        categories: colorFieldArr,
        inRange: {
          color: this.getFillColor(fixed)
        },
        itemGap: cateLegend.markerSpace.spacing,
        itemSymbol: this.getSymbolIcon(cateLegend.marker.shape),
        itemWidth: cateLegend.marker.size,
        itemHeight: cateLegend.marker.size,
      }
    }


    switch (layout) {
      case 'top-left':
        visualMap.orient = 'horizontal'
        visualMap.top = 'top'
        visualMap.left = 'left'
        visualMap.align = continuousLegend.label.alignHorizon
        break;
      case 'top':
        visualMap.orient = 'horizontal'
        visualMap.top = 'top'
        visualMap.left = 'center'
        visualMap.align = continuousLegend.label.alignHorizon
        break;
      case 'top-right':
        visualMap.orient = 'horizontal'
        visualMap.top = 'top'
        visualMap.left = 'right'
        visualMap.align = continuousLegend.label.alignHorizon
        break;
      case 'bottom-left':
        visualMap.orient = 'horizontal'
        visualMap.top = 'bottom'
        visualMap.left = 'left'
        visualMap.align = continuousLegend.label.alignHorizon
        break;
      case 'bottom':
        visualMap.orient = 'horizontal'
        visualMap.top = 'bottom'
        visualMap.left = 'center'
        visualMap.align = continuousLegend.label.alignHorizon
        break;
      case 'bottom-right':
        visualMap.orient = 'horizontal'
        visualMap.top = 'bottom'
        visualMap.left = 'right'
        visualMap.align = continuousLegend.label.alignHorizon
        break;
      case 'left-top':
        visualMap.orient = 'vertical'
        visualMap.top = 'top'
        visualMap.left = 'left'
        visualMap.align = continuousLegend.label.alignVerizon
        break;
      case 'left':
        visualMap.orient = 'vertical'
        visualMap.top = 'middle'
        visualMap.left = 'left'
        visualMap.align = continuousLegend.label.alignVerizon
        break;
      case 'left-bottom':
        visualMap.orient = 'vertical'
        visualMap.top = 'bottom'
        visualMap.left = 'left'
        visualMap.align = continuousLegend.label.alignVerizon
        break;
      case 'right-top':
        visualMap.orient = 'vertical'
        visualMap.top = 'top'
        visualMap.left = 'right'
        visualMap.align = continuousLegend.label.alignVerizon
        break;
      case 'right':
        visualMap.orient = 'vertical'
        visualMap.top = 'middle'
        visualMap.left = 'right'
        visualMap.align = continuousLegend.label.alignVerizon
        break;
      default:
      case 'right-bottom':
        visualMap.orient = 'vertical'
        visualMap.top = 'bottom'
        visualMap.left = 'right'
        visualMap.align = continuousLegend.label.alignVerizon
        break;

    }
    return visualMap
  }

  getSeries(data, typeStyle, pieStyle, numericalLabel, active) {
    const series = []
    const tArr = []
    const sArr = []
    const sMap = {}
    data.forEach(({ t }) => {
      if (tArr.indexOf(t) === -1) {
        tArr.push(t)
      }
    })

    data.forEach(({ t, r, colorField }) => {
      if (sMap[t] === undefined || sMap[t] === null) {
        sMap[t] = 0
      } else {
        sMap[t] += 1
      }
      const tIndex = tArr.indexOf(t)
      const sIndex = sMap[t]

      if (!sArr[sIndex]) {

        sArr.push(new Array(tArr.length).fill(null))
      }
      sArr[sMap[t]][tIndex] = [t, r, colorField]
    })

    const {
      lineStyle,
      lineWidth,
      color,
      dashedLength,
      dashedSpace,
      dottedLength,
      dottedSpace
    } = pieStyle
    const itemStyle = {
      borderType: lineStyle === 'solid' ? lineStyle : lineStyle === 'dashed' ? [dashedLength, dashedSpace] : [dottedLength, dottedSpace],
      borderWidth: lineWidth,
      borderColor: color,
    }

    const { dMap } = this
    const {
      labelContent: labelC,
      valueFormat,
      describe: {
        prefix,
        suffix,
      }
    } = numericalLabel
    const fn = this.getValueFormat(labelC === 'r' ? valueFormat : 'null', prefix, suffix)

    const label = {
      show: numericalLabel.show,
      position: 'outside',
      offset: [0, 0],
      padding: numericalLabel.offset,
      color: numericalLabel.textStyle.color,
      fontFamily: numericalLabel.textStyle.fontFamily,
      fontSize: numericalLabel.textStyle.fontSize,
      fontWeight: numericalLabel.textStyle.fontWeight,
      textBorderWidth: numericalLabel.stroke.lineWidth,
      textBorderColor: numericalLabel.stroke.stroke,
      formatter: (params) => {

        let value = params.value[dMap[labelC]]
        const res = fn(value)
        return res
      }
    }

    // echarts选中只有点击方式、
    const {
      show: activeShow,
      trigger,  //再echarts中无对应项
      selectType,
      fillSet,
      line: activeLine,
    } = active
    const select = {
      itemStyle: {
        borderType: activeLine.lineStyle === 'solid' ? activeLine.lineStyle : activeLine.lineStyle === 'dashed' ? [activeLine.dashedLength, activeLine.dashedSpace] : [activeLine.dottedLength, activeLine.dottedSpace],
        borderWidth: activeLine.lineWidth,
        borderColor: activeLine.lineColor,
      }
    }
    if (fillSet.show) {
      select.itemStyle.color = this.getFillColor(fillSet.fill)
    }

    sArr.forEach(s => {
      const item = {
        type: 'bar',
        coordinateSystem: 'polar',
        data: s,
        encode: {
          radius: 1,
          angle: 0,
        },
        // emphasis: {
        //   focus: 'series'
        // },
        itemStyle,
        label,
        labelLine: {
          show: false,
        },
      }
      if (typeStyle === 'stack') {
        item.stack = 'a'
      }
      // echarts selectMode 只有点击触发，使用emphasis模拟
      if (activeShow && trigger === 'click') {
        item.selectedMode = selectType === 'single' ? 'single' : 'multiple'
        item.select = select
      } else {
        item.selectedMode = false
        item.emphasis = {
          focus: 'none',
          itemStyle: select.itemStyle
        }
      }
      series.push(item)
    })

    return series
  }

  getTooltip(t) {
    // tooltip 不支持borderStyle
    const { dMap } = this
    const {
      show,
      trigger,
      position,
      titleSpace,
      titleTextStyle: {
        fontFamily: titleFF,
        fontWeight: titleFW,
        fontSize: titleFS,
        color: titleColor,
      },
      series,
      contentSpace,
      contentTextStyle: {
        fontFamily: contentFF,
        fontWeight: contentFW,
        fontSize: contentFS,
        color: contentColor,
      },
      bgBox: {
        padding: {
          paddingX,
          paddingY
        },
        backgroundColor,
        border: {
          borderStyle,
          borderRadius,
          borderWidth,
          borderColor
        }
      }
    } = t
    const tooltip = {
      show,
      trigger: 'item',
      triggerOn: trigger,
      position: t.position,
      padding: [paddingY, paddingX],
      backgroundColor,
      borderColor,
      borderWidth,
      borderRadius,
      formatter: (params, ticket, callback) => {
        const titleStyle = `"display: flex; flex-direction: row; align-items: center;padding-bottom: ${titleSpace}px; font-family: ${titleFF}; font-size: ${titleFS}px; font-weight: ${titleFW}; color: ${titleColor}"`
        const contentStyle = `"padding-bottom: ${contentSpace}px; font-family: ${contentFF}; font-size: ${contentFS}px; font-weight: ${contentFW}; color: ${contentColor}"`
        let html = `<div style=${titleStyle}>
        <span style="margin-right: 10px; width: ${contentFS}px; height: ${contentFS}px; border-radius: 50%; background-color: ${params.color}"></span>
        ${params.name}
        </div>`
        series.forEach(({ columnName, displayName }) => {
          html += `<div style=${contentStyle}>${displayName} ： ${params.value[dMap[columnName]]}</div>`
        })
        // callback(ticket, html) //返回自定义内容
        return html
      },
    }
    return tooltip
  }

  getFillColor(fill) {
    const { type, value } = fill
    if (type === 'flat') {
      return value
    } else { // 线性渐变
      const {
        angle,
        stops
      } = value
      const { x, y, x2, y2 } = this.getColorMatrix(angle)
      return {
        type: 'linear',
        x,
        y,
        x2,
        y2,
        colorStops: [{
          offset: stops[0].offset / 100,
          color: stops[0].color // 0% 处的颜色
        }, {
          offset: stops[1].offset / 100,
          color: stops[1].color // 100% 处的颜色
        }],
        global: false // 缺省为 false
      }
    }
  }

  getColorMatrix(angle) {
    const deg = Math.PI / 180 * angle
    const dx = parseFloat(Math.sin(deg).toFixed(2))
    const dy = parseFloat(Math.cos(deg).toFixed(2))
    const tanV = dx / dy
    const directSign = Math.abs(tanV) < 1
    const t = directSign ? tanV : 1 / tanV

    const sign1 = t > 0 ? 1 : -1
    const sign2 = dx > 0 ? 1 : -1
    const sign = directSign ? sign1 * sign2 : sign2

    const group1 = [0.5 - sign * t / 2, 0.5 + sign * t / 2]
    const group2 = sign > 0 ? [0, 1] : [1, 0]
    const group = [...group1, ...group2]
    const keys = directSign ? ['x', 'x2', 'y', 'y2'] : ['y', 'y2', 'x', 'x2']
    let res = {}
    keys.forEach((k, idx) => {
      res[k] = group[idx]
    })
    return res
  }

  getSymbolIcon(shape) {
    let icon = "path://";
    switch (shape) {
      case "triangle-down":
        icon += "M8 10l17.662 30L43 10z";
        break;
      case "hexagon":
        icon += "M512 128l332.544 192v384L512 896 179.456 704V320z";
        break;
      case "bowtie":
        icon += "M7 12l18 14.897L43 12v27L25 26.897 7 39z";
        break;
      case "square":
        icon = "rect";
        break;
      default:
        icon = shape;
    }
    return icon
  }
};
