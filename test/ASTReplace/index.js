const jscodeshift = require("jscodeshift");
const fs = require("fs");

const data = fs.readFileSync("./codeData.js").toString();
// const data = "\r\n\r\n/**\r\n* 该组件必须返回一个构造函数对象（此处代码无效）\r\n*/\r\nreturn class item extends Base {\r\n  constructor(dom, config) {\r\n    super(dom, config);\r\n    // 组件的配置参数\r\n    this.opts = {\r\n      \"src\": \"https://topo.thingjs.com/#/openview/6861322078370810\"\r\n    }\r\n    // 组件初始化的数据\r\n    this.data = {};\r\n    this.useResizeScale = false;\r\n  }\r\n  /**\r\n  * 渲染组件\r\n  * @param {*} data 组件数据\r\n  * @param {*} opts 组件配置参数\r\n  * return 返回html字符串\r\n  */\r\n  render(h, data, opts) {\r\n    return <div class=\"container\">\r\n      <iframe ref=\"iframe\" src={opts.src}></iframe>\r\n    </div>;\r\n  }\r\n\r\n  setOption(option) {\r\n    let {src} = option\r\n    this.opts = {\r\n      src: option.src.replace('#/studio', '#/openview')\r\n    }\r\n    this.instance.$refs.iframe.src = this.opts.src\r\n  }\r\n};\r\n";

parse()

function search() {
  return jscodeshift(data)
    .find("MethodDefinition")
    .filter(n => {
      return n.node.kind === "constructor";
    })
    .find("AssignmentExpression")
}

function parse() {
  const type = getType()
  const obj = search().filter(n => {
    const left = n.node.left.property;
    return left && left.type === "Identifier" && left.name === type;
  })
    .find("ObjectExpression");
  const { start, end } = obj.nodes()[0];
  console.log(data.replace(data.slice(start, end), JSON.stringify({src: "https://topo.thingjs.com/#/openview/6861322078370810"}, null, 4)))
}


function getType() {
  const obj = search().filter(n => {
      const left = n.node.left.property;
      const right = n.node.right.value;
      return left && left.type === 'Identifier' && left.name === 'type' && right === 'echarts';
    });
  return obj.nodes().length === 1 ? 'config' : 'opts';
}