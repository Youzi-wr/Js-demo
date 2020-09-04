function Watcher(vm, exp, updateDomFun) {
    this.vm = vm;
    this.exp = exp;
    this.updateDomFun = updateDomFun;
    this.value = this.get();
}

Watcher.prototype = {
    notify: function () {
        this.updateDomFun.call(this.vm)
    },
    get: function () {
        Depts.target
    }
}

Depts.target = null;

function Depts() {
    this.subs = [];
}

Depts.prototype = {
    addSelf: function (watcher) {
        this.subs.push(watcher)
    },
    update: function () {
        this.subs.forEach(sub => {
            sub.notify();
        })
    }
}