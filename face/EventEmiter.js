class EventEmiter {
    constructor() {
        this.events = {};
    }
    emit(event, args) {
        this.events[event] && this.events[event].forEach(fn => {
            fn.call(this, args)
        })
    }
    on(event, fn) {
        if (!this.events[event]) {
            this.events[event] = [fn]
        } else {
            this.events[event].push(fn);
        }
    }
    remove(event) {
        delete this.events[event];
    }
}

var doc = new EventEmiter();
var i = 0;
doc.on('change', function (res) {
    console.log(res)
})
doc.emit('change', ++i);
doc.emit('change', ++i);
doc.emit('change', ++i);


// 参照 vue 源码实现
// repeat !!!
var EventEmiter = function () {
    this._events = {};
};
EventEmiter.prototype.on = function (event, cb) {
    if (Array.isArray(event)) {
        for (let i = 0, l = event.length; i < l; i++) {
            this.on(event[i], cb);
        }
    } else {
        (this._events[event] || (this._events[event] = [])).push(cb);
    }
    return this;
};
EventEmiter.prototype.once = function (event, cb) {
    function on() {
        this.off(event, cb);
        cb.apply(this, arguments);
    }
    on.fn = cb;
    this.on(event, on);
    return this;
};
EventEmiter.prototype.off = function (event, cb) {
    if (!arguments.length) {
        this._events = Object.create(null);
        return this;
    }
    if (Array.isArray(event)) {
        for (let i = 0, l = event.length; i < l; i++) {
            this.off(event[i], cb);
        }
        return this;
    }
    if (!cb) {
        this._events[event] = null;
        return this;
    }
    if (cb) {
        let cbs = this._events[event];
        let i = cbs.length;
        while (i--) {
            if (cb === cbs[i] || cb === cbs[i].fn) {
                cbs.splice(i, 1);
                break;
            }
        }
        return this;
    }
};
EventEmiter.prototype.emit = function (event) {
    let cbs = this._events[event];
    let args = Array.prototype.slice.call(arguments, 1);
    if (cbs) {
        for (let i = 0, l = cbs.length; i < l; i++) {
            cbs[i].apply(this, args);
        }
    }
};
