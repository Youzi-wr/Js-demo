const factorial1 = function (n) {
    if (n <= 1) return 1;
    return n * factorial1(n - 1)
}

// 尾递归优化(??)
const factorial2 = function (n, total = 1) {
    if (n <= 1) return total;
    return factorial2(n - 1, total * n)
}

function travers(dom, callback) {
    callback(dom)
    const childs = dom.chidren;
    if (!childs) return;

    Array.prototype.forEach.apply(childs, item => {
        travers(item, callback)
    })
}

// 对象合并
const obj1 = {
    "pid": 1,
    "signup": "注册",
    "menu": "菜单",
    "headers": {
        "common": "common",
        "submenu": {
            "sub1": 111
        }
    }
}
const obj2 = {
    "pid": 2,
    "signup": {
        "sin": 2
    },
    "menu": {
        "id": 1
    },
    "headers": {
        "test": 123,
        "submenu": {
            "sub1": 112,
            "sub2": 222
        }
    }
}

function mergeObj(obj) {

}