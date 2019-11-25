function observer(data) {
    Object.keys(data).forEach(key => {
        let val = data[key];
        if (typeof val == 'object') observer(val);

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
    })
}