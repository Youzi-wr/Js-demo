const factorial1 = function (n) {
    if (n <= 1) return 1;
    return n * factorial1(n - 1)
}

// 尾递归优化(??)
const factorial2 = function (n, total = 1) {
    if (n <= 1) return total;
    return factorial2(n - 1, total * n)
}
