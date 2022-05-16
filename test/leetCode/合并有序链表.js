function LinkList() {
  var Node = function (element) {
    this.element = element
    this.next = null
  }
  var length = 0
  var head = null

  this.append = function (element) {
    let node = new Node(element)
    let current = null
    if (head === null) {
      head = node
    } else {
      current = head
      while (current.next !== null) {
        current = current.next
      }
      current.next = node
    }
    length++
  }
}

var linkNodes = new LinkList()
linkNodes.append(1)
linkNodes.append(2)
linkNodes.append(3)
console.log(linkNodes)