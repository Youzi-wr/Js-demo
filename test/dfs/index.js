const arr = [["a1", "b1"], ["a1", "b2"], ["b1", "c1"], ["b1", "c2"], ["b1", "c3"], ["b2", "c3"], ["c1", "d1"], ["c3", "d2"], ["d1", "b2"]]

const set = Array.from(new Set(arr.flat()))
const map = {}
set.forEach((item, index) => { map[item] = index })

const matrix = []
for (var i = 0; i < set.length; i++) {
  matrix[i] = new Array();
}
for (const i of arr) {
  matrix[map[i[0]]][map[i[1]]] = 1
}

function exist(matrix, result, index, type) {
  for (let i = 0; i < set.length; i++) {
    const _node = type === 'prev' ? matrix[i][index] : matrix[index][i]
    if (_node === 1 && result.indexOf(i) === -1) {
      return i
    }
  }
  return undefined
}

const nextRes = getLinkNodes(matrix, map['c2'], 'next')
const prevRes = getLinkNodes(matrix, map['c2'], 'prev')
const mergeIndexResult = nextRes.concat(prevRes)
mergeIndexResult.pop()
const edges = []
for (const i in mergeIndexResult) {
  for (let j = 0; j < set.length; j++) {
    if (matrix[i][j] === 1 && mergeIndexResult.indexOf(j) > -1) {
      edges.push([set[i], set[j]])
    }
  }
}

function getLinkNodes(matrix, key, type) {
  const search = []
  const result = []
  search.push(key)
  while (search.length) {
    const _res = exist(matrix, result, search.slice(-1)[0], type)
    if (_res === undefined) {
      result.push(search.pop())
    } else if (result.indexOf(_res) === -1) {
      search.push(_res)
    }
  }
  return result
}


