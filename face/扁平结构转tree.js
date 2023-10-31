/**
 * 输出：
 * [
    {
        "id": 1,
        "name": "部门1",
        "pid": 0,
        "children": [
            {
                "id": 2,
                "name": "部门2",
                "pid": 1,
                "children": []
            },
            {
                "id": 3,
                "name": "部门3",
                "pid": 1,
                "children": [
                    // 结果 ,,,
                ]
            }
        ]
    }
]
 */
let arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
]

function flatToTree(arr) {
  const result = []
  const map = {}

  for (const item of arr) {
    const { id, pid } = item

    if (!map[id]) {
      map[id] = {
        ...item,
        children: []
      }
    }

    if (pid === 0) {
      result.push(map[id])
    } else {
      if (!map[pid]) {
        map[pid] = {
          children: [],
        }
      }
      map[pid].children.push(map[id])
    }
  }

  return result
}

console.log(flatToTree(arr))