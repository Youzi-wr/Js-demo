function defineReactive(data) {
    observer(data);

    let dep = new Dept();

    Object.defineProperties(data, {
        get: function (val) {
            if (Dept.target) {
                dep.addSelf();
            }
            return val;
        },
        set: function (newVal) {
            if (value == newVal) return;

            this.value = newVal;
            dep.update();
        }
    })
}

function observer(data) {
    if (!data || typeof data !== 'object') {
        return
    }
}