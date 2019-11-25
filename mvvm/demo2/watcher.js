Dept.target = null;
function Dept() {
    this.subs = [];
}

Dept.prototype = {
    addWatcher(dep) {
        this.subs.push(dep);
    },
    notify(value) {
        this.subs.forEach(sub => {
            sub.update(value);
        })
    }
}

function Watcher(vm, exp, fun) {
    this.vm = vm.data;
    this.exp = exp;
    this.fun = fun;
    this.init();
}

Watcher.prototype = {
    update(value) {
        this.fun(value)
    },
    init() {
        Dept.target = this;
        this.fun(this.vm[this.exp]);
        Dept.target = null;
    }
}