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