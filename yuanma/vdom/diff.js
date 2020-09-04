const CHANGE_TYPE_TEXT = Symbol("text");    //类别相同 string
const CHANGE_TYPE_PROP = Symbol("props");   //类别相同 node
const CHANGE_TYPE_REPLACE = Symbol("replace");//类别不同


function checkChangeType($parent, oldNode, newNode) {
    if (typeof oldNode !== typeof newNode || newNode.tagName !== oldNode.tagName) {
        return CHANGE_TYPE_REPLACE;
    } else if (typeof newNode == 'string') {
        if (newNode !== oldNode) {
            return CHANGE_TYPE_TEXT;
        }
    } else {
        var propChanged = Reflect.ownKeys(newNode.props).reduce(function (prev, prop) {
            return prev || newNode.props[prop] !== oldNode.props[prop];
        }, false)

        if (propChanged) {
            return CHANGE_TYPE_PROP;
        }
        return;
    }
}

function updateEl($parent, newNode, oldNode, index = 0) {
    let changeType = null;

    if (!oldNode) { //增
        $parent.appendChild(newNode.render());
    } else if (!newNode) { //删
        $parent.removeChild($parent.childNodes[index]);
    } else if (changeType = checkChangeType($parent, oldNode, newNode)) {//改
        switch (changeType) {
            case CHANGE_TYPE_TEXT:
                $parent.replaceChild(document.createTextNode(newNode), $parent.childNodes[index]);
                break;
            case CHANGE_TYPE_PROP:
                replaceAttribute($parent.childNodes[index], oldNode.props, newNode.props);
                break;
            case CHANGE_TYPE_REPLACE:
                $parent.replaceChild(newNode.render(), $parent.childNodes[index]);
                break;
            default:
                break;
        }
    } else if (newNode.tagName) {
        const newNodeLength = newNode.children.length;
        const oldNodeLength = oldNode.children.length;
        for (let i = 0; i < newNodeLength || i < oldNodeLength; i++) {
            updateEl(
                $parent.childNodes[index],
                newNode.children[i],
                oldNode.children[i],
                i
            )
        }
    }
}

function replaceAttribute($node, removeAttrs, newAttrs) {
    if (!$node) return;

    Reflect.ownKeys(removeAttrs).forEach(attr => $node.removeAttribute(attr));
    Reflect.ownKeys(newAttrs).forEach(attr => {
        $node.setAttribute(attr, newAttrs[attr])
    })
}