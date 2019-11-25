//observal
function observal(data) {
    var dep = new Dept();
    Object.keys(data).forEach(key => {
        let val = data[key];
        if (typeof val == 'object') observal(data[key]);
        Object.defineProperty(data, key, {
            get() {
                // 将自己添加到订阅器
                if (Dept.target) {
                    dep.add(Dept.target);
                }
                return val;
            },
            set(newVal) {
                if (newVal !== val) {
                    val = newVal;
                    dep.notify(newVal);
                }
            }
        })
    })
}

// Dept
Dept.target = null;
function Dept() {
    this.subs = [];
}

Dept.prototype = {
    add(dep) {
        this.subs.push(dep);
    },
    notify(value) {
        // 更新视图
        this.subs.forEach(sub => sub.updateDom(value))
    }
}