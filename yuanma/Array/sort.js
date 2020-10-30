var arr = [{ index: 4, name: 'hha4' }, { index: 1, name: 'wqe' }, { index: 423, name: 'ew' }, { index: 2, name: 'hhasda' }]

arr.sort(function compare(value1, value2) {
    if (value1.index < value2.index) {
        return -1;
    } else if (value1.index > value2.index) {
        return 1;
    } else {
        return 0;
    }
})