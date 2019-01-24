//树 树由一组以边连接的节点组成
/**
 * 
 * 树最上面的节点称为
  根节点，如果一个节点下面连接多个节点，那么该节点称为父节点，它下面的节点称为子
  节点。一个节点可以有 0 个、1 个或多个子节点。没有任何子节点的节点称为叶子节点。
 */
//二叉查找树
function Node(data, left, right) {
    this.data = data
    this.left = left
    this.right = right
    this.show = show
}
function show() {
    return this.data
}
function BST() {
    //创建新的节点
    this.root = null
    this.insert = insert
    this.inOrder = inOrder
    this.getMin = getMin
    this.getMax = getMax
    this.find = find
    this.remove = remove
}
function insert(data) {
    let n = new Node(data, null, null)
    //创建一个节点n 先假设他是根节点
    if (this.root == null) {
        this.root = n
    }
    else {
        //假设不成立的时候用 current 储存当前根节点
        let current = this.root
        let parent
        while (true) {
            parent = current//储存每次比较的当前节点
            if (data < current.data) {
                //要插入的值比较小 放左边
                current = current.left
                if (current == null) {
                    parent.left = n//值进入当前节点的左节点
                    break;
                }
            }
            else {
                //比较大的情况
                current = current.right
                if (current == null) {
                    parent.right = n//值进入当前节点的右节点
                    break;
                }
            }
        }
    }
}
//遍历二叉树  中序、先序和后序
/**
 * 中序遍历按照节点上的键值，以升序访问BST 上的所有节点。
 * 先序遍历先访问根节点，然后以同样方式访问左子树和右子树。
 * 后序遍历先访问叶子节点，从左子树到右子树，再到根节点。
 *
 */

//中序遍历
function inOrder(node) {
    // console.log(node)
    if (node != null) {
        inOrder(node.left)//先遍历左节点
        console.log(node.show())
        inOrder(node.right)//遍历右节点
    }
}
//先序遍历
function preOrder(node) {
    if (node != null) {
        console.log(node.show())
        preOrder(node.left)
        preOrder(node.right)
    }
}
//后序遍历
function postOrder(node) {
    if (node != null) {
        postOrder(node.left)
        postOrder(node.right)
        console.log(node.show())
    }
}
//测试代码
var nums = new BST();
/**
 *                                                   23
 *                                            3               45
 *                                         2      16       37      99
 *                                            15      22
 * 
 */
nums.insert(23);
nums.insert(3);
nums.insert(45);
nums.insert(16);
nums.insert(15)
nums.insert(99);
nums.insert(37);
nums.insert(22);
nums.insert(2)
console.log("Inorder traversal: ")
inOrder(nums.root);
console.log('postOrder traversal: ')
postOrder(nums.root)
console.log('preOrder traversal: ')
preOrder(nums.root)
//中 先 后 遍历有图片帮助理解
// 二叉树 的运用
/**
 * (1) 查找给定值；
   (2) 查找最小值；
   (3) 查找最大值。
 */
function getMin() {
    let current = this.root
    while (current.left != null) {
        current = current.left
    }
    return current.data
}
function getMax() {
    let current = this.root
    while (current.right != null) {
        current = current.right
    }
    return current.data
}
function find(data) {
    let current = this.root
    while (current != null) {
        if (current.data == data) {
            return current.data
        }
        else if (data < current.data) {
            current = current.left
        } else {
            current = current.right
        }
    }
    return null
}
let min = nums.getMin()
console.log('The min value: ' + min)
let max = nums.getMax()
console.log('The max value: ' + max)
let found = nums.find(37)
if (found != null) {
    console.log('Find ' + found + ' in BST')
} else {
    console.log('Found null')
}

function remove(data) {
    this.root = removeNode(this.root, data)
}
function getSmall(node) {
    let current = node
    while (current.left != null) {
        current = current.left
    }
    return current
}
function removeNode(node, data) {
    if (node == null) {
        return null
    }
    if (data == node.data) {
        if (node.left == null && node.right == null) {
            //没有子节点的节点
            return null
        }
        if (node.left == null) {
            //没有左节点
            return node.right
        }
        if (node.right == null) {
            //没有右节点
            return node.left;
        }
        let tempNode = getSmall(node.right)
        node.data = tempNode.data
        node.right = removeNode(node.right, tempNode.data)
        return node
    }
    else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
    }
    else {
        node.right = removeNode(node.right, data);
        return node;
    }
}
nums.remove(22)
console.log("22 removed Inorder traversal: ")
inOrder(nums.root);
nums.remove(23)
console.log("23 removed Inorder traversal: ")
inOrder(nums.root)
// 还有好多有关树的列子 红黑树 哈夫曼树 等等 能力有限 看图去了