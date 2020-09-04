window.onload = function () {

    console.log($("#test"));
    console.log($(".test"));
    console.log($("[testAttr]"));
    console.log($("[testAttr=hello]"));
    console.log($("#test li"));
    console.log($("#Ele_a .Ele_a_class"));


}

var $ = function (str) {
    // 复数匹配规则
    if (/\b /.test(str)) {
        var rules = [];
        rules = str.split(" ");
        var parentNodeList = [];
        parentNodeList.push($(rules[0]));
        for (var i = 1; i < rules.length; i++) {
            var temp = [];
            var tempObj = {};
            for (var c in parentNodeList) {
                switch (rules[i].charAt(0)) {
                    case "#":
                        name = rules[i].replace(/^#/, "");
                        // 由于ID选择器的特殊性 需要检查temp数组是否有重复元素
                        if (temp.length === 0) {
                            temp.push(document.getElementById(name));
                            tempObj[temp[0]] = 1;
                        }
                        for (var j in temp) {
                            if (!tempObj[temp[j]]) {
                                temp.push(document.getElementById(name));
                                tempObj[temp[j]] = 1;
                            }

                        }
                        break;
                    case ".":
                        name = rules[i].replace(/^\./, "");
                        var Iterator = document.createNodeIterator(parentNodeList[c], NodeFilter.SHOW_ELEMENT,
                            function (node) {
                                return new RegExp("^" + name + "$").test(node.className) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
                            }, false);
                        var currentNode;
                        while (currentNode = Iterator.nextNode()) {
                            temp.push(currentNode);
                        }
                        break;
                    case "[":
                        if (new RegExp("^\\[\\w*=?\\w*\\]$").test(rules[i])) {
                            name = rules[i].replace(/^\[|\]$/g, "");
                            // 判断是否是属性键值对
                            if (new RegExp("\\w+=\\w+").test(name)) {
                                // 有键值对
                                var attr = name.split("=")[0];
                                var value = name.split("=")[1];
                                //遍历查找dom树属性为attr,值为value的节点
                                var Iterator = document.createNodeIterator(parentNodeList[c], NodeFilter.SHOW_ELEMENT,
                                    function (node) {
                                        return node.getAttribute(attr) == value ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
                                    }, false);
                                var currentNode;
                                while (currentNode = Iterator.nextNode()) {
                                    temp.push(currentNode);
                                }
                            }
                            else {
                                var Iterator = document.createNodeIterator(parentNodeList[c], NodeFilter.SHOW_ELEMENT,
                                    function (node) {
                                        return node.hasAttribute(name) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
                                    }, false);
                                var currentNode;
                                while (currentNode = Iterator.nextNode()) {
                                    temp.push(currentNode);
                                }
                            }
                        }
                        else
                            return null;
                        break;
                    default:
                        var Iterator = document.createNodeIterator(parentNodeList[c], NodeFilter.SHOW_ELEMENT,
                            function (node) {
                                return node.tagName.toLocaleLowerCase() === rules[i] ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
                            }, false);
                        var currentNode;
                        while (currentNode = Iterator.nextNode()) {
                            temp.push(currentNode);
                        }
                        break;
                }
            }
            parentNodeList = temp;
        }
        return parentNodeList;
    }
    else {
        var name;
        switch (str.charAt(0)) {
            case "#":
                name = str.replace(/^#/, "");
                return document.getElementById(name);
                break;
            case ".":
                // 去除class前的'.'，获取类名
                name = str.replace(/^\./, "");
                //创建dom迭代器，遍历dom树，找出类名为name的node节点
                //document.createNodeIterator(root, whatToShow, filter);
                //root 指迭代器迭代的开始位置
                //whatToShow 指寻找节点的类型，默认为寻找所有类型
                //filter为节点过滤规则，通过规则则NodeFilter.FILTER_ACCEPT
                //否则为NodeFilter.FILTER_REJECT
                var Iterator = document.createNodeIterator(document, NodeFilter.SHOW_ELEMENT,
                    function (node) {
                        return new RegExp("^" + name + "$").test(node.className) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
                    }, false);
                var currentNode;
                var nodeList = [];
                while (currentNode = Iterator.nextNode()) {
                    nodeList.push(currentNode);
                }
                return nodeList;
                break;
            case "[":
                // 判断是否有[]

                if (new RegExp("^\\[\\w*=?\\w*\\]$").test(str)) {
                    name = str.replace(/^\[|\]$/g, "");
                    // 判断是否是属性键值对
                    if (new RegExp("\\w+=\\w+").test(name)) {
                        // 有键值对
                        var attr = name.split("=")[0];
                        var value = name.split("=")[1];
                        //遍历查找dom树属性为attr,值为value的节点
                        var Iterator = document.createNodeIterator(document, NodeFilter.SHOW_ELEMENT,
                            function (node) {
                                return node.getAttribute(attr) == value ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
                            }, false);
                        var currentNode;
                        var nodeList = [];
                        while (currentNode = Iterator.nextNode()) {
                            nodeList.push(currentNode);
                        }
                        return nodeList;
                    }
                    else {
                        var Iterator = document.createNodeIterator(document, NodeFilter.SHOW_ELEMENT,
                            function (node) {
                                return node.hasAttribute(name) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
                            }, false);
                        var currentNode;
                        var nodeList = [];
                        while (currentNode = Iterator.nextNode()) {
                            nodeList.push(currentNode);
                        }
                        return nodeList;
                    }
                }
                else return null;
                break;
            default:
                return document.getElementsByTagName(str);
                break;
        }
    }


}
