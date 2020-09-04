// for in 'PK' while 'PK' for
let arrFor = new Array(10000);
let sumFor;
let lenFor = arrFor.length
let i = 0;
console.time('for')
for (i; i < lenFor; i++) {
    sumFor += arrFor[i]
}
console.timeEnd('for')

let arrWhile = new Array(10000);
let sumWhile;
let lenWhile = arrWhile.length
let n = 0;
console.time('while')
while (n < lenWhile) {
    sumWhile += arrWhile[n];
    n++;
}
console.timeEnd('while')

let arr = new Array(10000);
let sum;
let len = arr.length
let m = 0;
console.time('for-in')
for (m in arr) {
    sum += arr[m]
}
console.timeEnd('for-in')