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


// function Observer(vm){
//     this.data = vm.data;
// }

function observer(vm) {
    let data = vm.data;
    Object.keys(data).forEach(key => {
        let val = data[key];
        if (typeof val == 'object') observer(val);0

        defineReactive(data, key, val);
        proxyReactive(vm, key);
    })
}

function defineReactive(data, key, val) {
    let dep = new Dept();
    Object.defineProperty(data, key, {
        configurable: true,
        get() {
            if (Dept.target) {
                dep.addWatcher(Dept.target);
            }
            return val;
        },
        set(newVal) {
            if (val !== newVal) {
                val = newVal;
                dep.notify(newVal);
            }
        }
    })
}

function proxyReactive(vm, exp) {
    Object.defineProperty(vm, exp, {
        get(){
            return vm['data'][exp];
        },
        set(value) {
            vm['data'][exp] = value;
        }
    })
}