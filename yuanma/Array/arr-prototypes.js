// JavaScript中创建数组有两种方式
    // （一）使用 Array 构造函数：
    var arr1 = new Array(); //创建一个空数组
    var arr2 = new Array(20); // 创建一个包含20项的数组
    var arr3 = new Array("lily", "lucy", "Tom"); // 创建一个包含3个字符串的数组
    // （二）使用数组字面量表示法：
    var arr4 = []; //创建一个空数组
    var arr5 = [20]; // 创建一个包含1项的数组
    var arr6 = ["lily", "lucy", "Tom"]; // 创建一个包含3个字符串的数组


    // 数组的方法有数组原型方法，也有从object对象继承来的方法，这里我们只介绍数组的原型方法，数组原型方法主要有以下这些：
    // join()
    // push()和pop()
    // shift() 和 unshift()
    // sort()
    // reverse()
    // concat()
    // slice()
    // splice()
    // indexOf()和 lastIndexOf() （ES5新增）
    // forEach() （ES5新增）
    // map() （ES5新增）
    // filter() （ES5新增）
    // every() （ES5新增）
    // some() （ES5新增）
    // reduce()和 reduceRight() （ES5新增）

    // 1. join()
    function repeatString(str, n) {
        return new Array(n + 1).join(str);
    }
    console.log(repeatString("abc", 3)); // abcabcabc
    console.log(repeatString("Hi", 5)); // HiHiHiHiHi

    // 2. sort()方法会调用每个数组项的 toString()转型方法
    arr2 = [13, 24, 51, 3];
    console.log(arr2.sort()); // [13, 24, 3, 51]
    console.log(arr2); // [13, 24, 3, 51](元数组被改变)
    //为了解决上述问题，sort()方法可以接收一个比较函数作为参数
    function compare(value1, value2) {
        if (value1 < value2) {
            return -1;
        } else if (value1 > value2) {
            return 1;
        } else {
            return 0;
        }
    }
    arr2 = [13, 24, 51, 3];
    console.log(arr2.sort(compare)); // [3, 13, 24, 51]

    // 3. reverse() 反转数组项的顺序
    var arr = [13, 24, 51, 3];
    console.log(arr.reverse()); //[3, 51, 24, 13]
    console.log(arr); //[3, 51, 24, 13](原数组改变)

    // 4. concat()
    var arr = [1, 3, 5, 7];
    var arrCopy = arr.concat(9, 11, 13);
    console.log(arrCopy); //[1, 3, 5, 7, 9, 11, 13]
    console.log(arr); // [1, 3, 5, 7](原数组未被修改)
    // ------
    var arrCopy2 = arr.concat([9, [11, 13]]);
    console.log(arrCopy2); //[1, 3, 5, 7, 9, Array[2]]
    console.log(arrCopy2[5]); //[11, 13]
    // 数组去重合并
    var uniqueArray = function (arr1, arr2) {
        arr1 = Array.isArray(arr1) ? arr1 : [];
        arr2 = Array.isArray(arr2) ? arr2 : [];
        return Array.from(new Set([...arr1, ...arr2]))
    }

    // 5. slice() 返回从原数组中指定开始下标到结束下标之间的项组成的新数组
    // 当出现负数时，将负数加上数组长度的值来替换该位置的数
    var arr = [1, 3, 5, 7, 9, 11];
    var arrCopy = arr.slice(1);
    var arrCopy2 = arr.slice(1, 4);
    var arrCopy3 = arr.slice(1, -2);
    var arrCopy4 = arr.slice(-4, -1); //slice(2,5)
    console.log(arr); //[1, 3, 5, 7, 9, 11](原数组没变)
    console.log(arrCopy); //[3, 5, 7, 9, 11]
    console.log(arrCopy2); //[3, 5, 7]
    console.log(arrCopy3); //[3, 5, 7]
    console.log(arrCopy4); //[5, 7, 9]
    // 克隆数组（用slice实现深拷贝）

    // 6. splice()实现删除、插入和替换
    // 删除：可以删除任意数量的项，只需指定 2 个参数：要删除的第一项的位置和要删除的项数。例如， splice(0,2)会删除数组中的前两项。
    // 插入：可以向指定位置插入任意数量的项，只需提供 3 个参数：起始位置、 0（要删除的项数）和要插入的项。例如，splice(2,0,4,6)会从当前数组的位置 2 开始插入4和6。
    // 替换：可以向指定位置插入任意数量的项，且同时删除任意数量的项，只需指定 3 个参数：起始位置、要删除的项数和要插入的任意数量的项。插入的项数不必与删除的项数相等。例如，splice (2,1,4,6)会删除当前数组位置 2 的项，然后再从位置 2 开始插入4和6。
    // splice()方法始终都会返回一个数组，该数组中包含从原始数组中删除的项，如果没有删除任何项，则返回一个空数组。
    var arr = [1, 3, 5, 7, 9, 11];
    var arrRemoved = arr.splice(0, 2);
    console.log(arr); //[5, 7, 9, 11]
    console.log(arrRemoved); //[1, 3]
    var arrRemoved2 = arr.splice(2, 0, 4, 6);
    console.log(arr); // [5, 7, 4, 6, 9, 11]
    console.log(arrRemoved2); // []
    var arrRemoved3 = arr.splice(1, 1, 2, 4);
    console.log(arr); // [5, 2, 4, 4, 6, 9, 11]
    console.log(arrRemoved3); //[7]

    // 7. indexOf()和 lastIndexOf()
    // indexOf() ：接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。其中， 从数组的开头（位置 0）开始向后查找。
    // lastIndexOf()：接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。其中， 从数组的末尾开始向前查找。
    // 这两个方法都返回要查找的项在数组中的位置，或者在没找到的情况下返回 - 1。在比较第一个参数与数组中的每一项时，会使用全等操作符。
    var arr = [1, 3, 5, 7, 7, 5, 3, 1];
    console.log(arr.indexOf(5)); //2
    console.log(arr.lastIndexOf(5)); //5
    console.log(arr.indexOf(5, 2)); //2
    console.log(arr.lastIndexOf(5, 4)); //2
    console.log(arr.indexOf("5")); //-1

    // 8. forEach()
    // forEach()：对数组进行遍历循环，对数组中的每一项运行给定函数。这个方法没有返回值。参数都是function类型，默认有传参，参数分别为：遍历的数组内容；第对应的数组索引，数组本身。
    var arr = [1, 2, 3, 4, 5];
    arr.forEach(function (x, index, a) {
        console.log(x + '|' + index + '|' + (a === arr));
    });
    // 输出为：
    // 1|0|true
    // 2|1|true
    // 3|2|true
    // 4|3|true
    // 5|4|true

    // 9. map()
    // map() ：指“映射”，对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。
    // 下面代码利用map方法实现数组中每个数求平方。
    var arr = [1, 2, 3, 4, 5];
    var arr2 = arr.map(function (item) {
        return item * item;
    });
    console.log(arr2); //[1, 4, 9, 16, 25]

    // 10. filter()
    // filter()：“过滤”功能，数组中的每一项运行给定函数，返回满足过滤条件组成的数组。
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var arr2 = arr.filter(function (x, index) {
        return index % 3 === 0 || x >= 8;
    });
    console.log(arr2); //[1, 4, 7, 8, 9, 10]

    // 11. every()
    // every()：判断数组中每一项都是否满足条件，只有所有项都满足条件，才会返回true。
    var arr = [1, 2, 3, 4, 5];
    var arr2 = arr.every(function (x) {
        return x < 10;
    });
    console.log(arr2); //true
    var arr3 = arr.every(function (x) {
        return x < 3;
    });
    console.log(arr3); // false

    // 12. some()
    // some()：判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回true。
    var arr = [1, 2, 3, 4, 5];
    var arr2 = arr.some(function (x) {
        return x < 3;
    });
    console.log(arr2); //true
    var arr3 = arr.some(function (x) {
        return x < 1;
    });
    console.log(arr3); // false

    // 13. reduce()和 reduceRight()
    // 这两个方法都会实现迭代数组的所有项，然后构建一个最终返回的值。reduce()方法从数组的第一项开始，逐个遍历到最后。而 reduceRight()则从数组的最后一项开始，向前遍历到第一项。
    // 这两个方法都接收两个参数：一个在每一项上调用的函数和（可选的）作为归并基础的初始值。
    // 传给 reduce()和 reduceRight()的函数接收 4 个参数：前一个值、当前值、项的索引和数组对象。这个函数返回的任何值都会作为第一个参数自动传给下一项。第一次迭代发生在数组的第二项上，因此第一个参数是数组的第一项，第二个参数就是数组的第二项。
    // 下面代码用reduce()实现数组求和，数组一开始加了一个初始值10。
    var values = [1, 2, 3, 4, 5];
    var sum = values.reduceRight(function (prev, cur, index, array) {
        return prev + cur;
    }, 10);
    console.log(sum); //25