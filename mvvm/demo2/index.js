function SelfVue(vm) {
    // this.el = el;
    this.data = vm.data;
    this.el = vm.el;
    // this.methods = methods;
    // this.mounted = mounted;

    // 观察者
    observer(vm);

    // 模板解析
    new Compile(vm);

    vm.mounted.call(vm);

    // vm['data']代理
    // proxyVue.call(this, exp);

    // 观察者
    // new Watcher(this, exp, function (value) {
    //     console.log('update value', value)
    //     ele.innerHTML = value;
    // })
}

// function proxyVue(exp) {
//     let vm = this;
//     Object.defineProperty(vm, exp, {
//         set(value) {
//             vm['data'][exp] = value;
//         }
//     })
// }