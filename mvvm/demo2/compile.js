function Compile(vm) {
    this.vm = vm;
    this.el = vm.el;
    this.fragment = null;

    this.createFragment();
}

Compile.prototype = {
    createFragment() {
        let fragment = document.createDocumentFragment();
        let root = document.getElementById(this.el);

        // 🔴faster
        // let childNodes = root.childNodes;
        // console.time('node forEach')
        // childNodes.forEach(node => fragment.appendChild(node));
        // console.timeEnd('node forEach')

        // 🔴slower
        console.time('firstChild')
        let firstChild = root.firstChild;
        while (firstChild) {
            fragment.appendChild(firstChild);
            firstChild = root.firstChild
        }
        console.timeEnd('firstChild')

        this.fragment = fragment;
        this.compileNodes(this.fragment);
    },
    compileNodes(parentNode) {
        let childNodes = parentNode.childNodes;
        let self = this;
        console.log('childNodes', childNodes)
        childNodes.forEach(node => {
            let content = node.textContent;
            // let reg = /\{\{(.*)\}\}/g; //🔴如果这里是/ /g，reg.test(content)的结果为true/false交替
            let reg = /\{\{(.*?)\}\}/g; //🔴加"？"匹配第一个{{ }}。不加"？"匹配第一个"{{"，和最后一个"}}"
            if (this.isTextNode(node) && reg.test(content)) {
                // let exp = reg.exec(content);
                // let exp = content.replace(reg, (match, key) => key);
                content.match(reg).forEach(exp => {
                    new Watcher(this.vm, exp, function (value) {
                        self.updateText(node, value);
                    })
                })
            } else if (this.isElementNode(node)) {
                this.compileNodes(node);
            }
        })
    },
    updateText(node, value) {
        console.log('update value', value)
        node.textContent = value;
    },
    isTextNode(node) {
        return node.nodeType == 3;
    },
    isElementNode(node) {
        return node.nodeType == 1;
    }
}