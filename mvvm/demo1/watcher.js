// watcher
// function Watcher(data, cb, fun) {
//     this.data = data;  // 数据源
//     this.cb = cb;    // 属性
//     this.fun = fun;
// }
// Watcher.prototype = {
//     updateDom(val){
//         this.fun(val);
//     }
// }

// Watcher在创建的时候就应该把自己放到订阅器中，所以，添加订阅的动作应该是放在Watcher中
function Watcher(data, cb, fun) {
    this.data = data;  // 数据源
    this.cb = cb;    // 属性
    this.fun = fun;
    this.addSelf();
}

// 🔴函数会提升，函数的原型对象不会提升。因此Watcher.prototype不能写在new Watcher下面
Watcher.prototype = {
    updateDom: function (val) {
        this.fun(val);
    },
    addSelf() {
        Dept.target = this;
        this.fun(this.data[this.cb]);  // 添加订阅动作；初始化模板数据的值
        Dept.target = null;
    }
}