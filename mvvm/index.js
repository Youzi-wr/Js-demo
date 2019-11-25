// binder
function VueSelf(data, cb, dom) {
    this.data = data;

    observal(data);
    var watch = new Watcher(data, cb, function (value) {
        console.log('update', value)
        dom.innerHTML = value;
    });
}