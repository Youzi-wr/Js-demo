// 递归
function fib(num) {
    if (num === 1 || num === 2) return 1;
    return fib(num - 1) + fib(num - 2)
}

fib(10) //时间复杂度为O(2^n)

// 非递归
function fib1(num) {
    let a = 0,
        b = 1,
        c = a + b;
    for (let i = 3; i <= num; i++) {
        a = b;
        b = c;
        c = a + b;
    }
    return c;

}

fib1(10) //时间复杂度为O(n) (??)