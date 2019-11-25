function SelfVue(data, exp, ele) {
    this.data = data;
    observer(data);
    // proxyVue.call(this, exp);
    proxyVueTest(this, exp);
    new Watcher(this, exp, function (value) {
        console.log('update value', value)
        ele.innerHTML = value;
    })
}

function proxyVue(exp) {
    let vm = this;
    Object.defineProperty(vm, exp, {
        set(value) {
            vm['data'][exp] = value;
        }
    })
}

function proxyVueTest(vm, exp) {
    Object.defineProperty(vm, exp, {
        set(value) {
            vm['data'][exp] = value;
        }
    })

}