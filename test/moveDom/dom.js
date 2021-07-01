(function (doc) {
  var oNul = doc.getElementById("nodeUl"),
    aUp = doc.querySelectorAll(".up"),
    aDown = doc.querySelectorAll(".down");
    
  for (var i = 0, len = aUp.length; i < len; i++) {
    aUp[i].onclick = function () {
      var tLi = this.parentNode;
      if (oNul.children[0] == tLi) { return; }
      var prevnode = tLi.previousElementSibling || tLi.previousSibling;
      //var prevnode=tLi.previousSibling||tLi.previousElementSibling;//使用previousSibling在chrome中会选中文本节点
      oNul.insertBefore(tLi, prevnode);
    };
    aDown[i].onclick = function () {
      var tLi = this.parentNode,
        ulcn = oNul.children;
      if (ulcn[ulcn.length - 1] == tLi) { return; }
      var nextnode = tLi.nextElementSibling || tLi.nextSibling,
        nnextnode = nextnode.nextElementSibling || nextnode.nextSibling;
      oNul.insertBefore(tLi, nnextnode);
    };
  }
})(document);