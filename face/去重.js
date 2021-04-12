// Array.from(new Set(arr));

// [...new Set(arr)];

function isObj(obj) {
    if (typeof obj == 'object' && obj.constructor !== Array) {
        return true;
    } else {
        return false;
    }
}

function unique(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (isObj(arr[i]) && isObj(arr[j])) {
                if (Object.keys(arr[i]).toString() == Object.keys(arr[j]).toString()) {
                    arr.splice(j, 1);
                    j--;
                }
            } else if (arr[i] == arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}
var arr = [1, 1, 2, { a: 1, b: 2 }, 6, { a: 1 }, 5, 5, 6, 8, 9, 8];
console.log(unique(arr))


function unique(arr) {
    arr = arr.sort();
    let point = 0;
    while (arr[point]) {
        if (arr[point] == arr[point + 1]) {
            arr.splice(point + 1, 1)
        } else {
            point++;
        }
    }
    return arr;
}

function unique(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (!res.includes(arr[i])) res.push(arr[i])
    }
    return res;
}


// function unique(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] == arr[j]) {
//                 arr.splice(j, 1);
//                 j--;
//             }
//         }
//     }
//     return arr;
// }


// function unique(arr) {
//     arr = arr.sort();
//     let point = 0;
//     while (arr[point]) {
//         if (arr[point] !== arr[point + 1]) {
//             point++;
//         } else {
//             arr.splice(point + 1, 1)
//         }
//     }
//     return arr;
// }

// function unique(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!newArr.includes(arr[i])) newArr.push(arr[i])
//     }
//     return newArr;
// }