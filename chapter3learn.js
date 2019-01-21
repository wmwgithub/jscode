let fs = require('fs')
// 列表
function List() {
    //列表中元素个数
    this.listSize = 0
    // 列表当前位置
    this.pos = 0
    this.dataStore = []
    //返回列表中元素个数
    this.length = length
    this.clear = clear
    this.find = find
    this.contains = contains
    this.toString = toString
    //返回当前位置的元素
    this.getElement = getElement
    //在现有元素后面插入元素
    this.insert = insert
    //末尾插入
    this.append = append
    //删除元素
    this.remove = remove
    this.clear = clear
    //把当前位置变成第一个元素
    this.front = front
    //把当前位置变成最后一个元素
    this.end = end
    //当前位置前移一位
    this.prev = prev
    //当前位置后移一位
    this.next = next
    //返回列表的当前位置
    this.currPos = currPos
    //当前位置移动到指定位置
    this.moveTo = moveTo
    this.displayList = displayList
}

function append(element) {
    /**
     * 注意一下  this.listSize++
     * 和        ++this.listSize
     * 的区别
     */
    this.dataStore[this.listSize++] = element
}
function find(element) {
    for (let i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i
        }
    }
    //找到了 return 1 找不到 return -1
    return -1
}

function remove(element) {
    let findout = this.find(element)
    if (findout > -1) {
        this.dataStore.splice(findout, 1)
        --this.listSize
        return true
    }
    return false
}
function length() {
    return this.listSize
}
function toString() {
    return this.dataStore
}
// var names = new List();
// names.append("Cynthia");
// names.append("Raymond");
// names.append("Barbara");
// console.log(names.toString());
// names.remove("Raymond");
// console.log(names.toString());
function insert(element, after) {
    let insertPos = this.find(after)
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element)
        this.listSize++
        return true
    }
    return false
}
function clear() {
    delete this.dataStore
    this.dataStore = []
    this.listSize = this.pos = 0
}

function contains(element) {
    for (let i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return true
        }
    }
    return false
}
function front() {
    this.pos = 0
    return this.pos
}
function end() {
    this.pos = 0
    if (this.listSize > 0) {
        this.pos = this.listSize - 1
    }
}
function prev() {
    if (this.pos > 0) {
        --this.pos
    }
    return this.pos
}
function next() {
    this.pos++
    if (this.pos < this.listSize - 1) {
        return this.pos
    }
    return false
}
function currPos() {
    return this.pos
}
function moveTo(position) {
    this.pos = position
}

function getElement() {
    return this.dataStore[this.pos]
}
//正向遍历列表函数
function displayList() {
    for (this.front();this.currPos()<this.length(); this.next()) {
         console.log(this.pos ,this.getElement());
     
     }
}
// var names = new List();
// names.append("Clayton");
// names.append("Raymond");
// names.append("Cynthia");
// names.append("Jennifer");
// names.append("Bryan");
// names.append("Danny");
// names.front()
// console.log(names.getElement())
// names.next()
// console.log(names.getElement())
// names.prev()
// console.log(names.getElement())
// names.prev()//已经移动到顶部不会再移动
// console.log(names.getElement())
let movies = fs.readFileSync('./film.txt', 'utf8')
movies = movies.split('\n')
movies.forEach((value, index, input) => {
    movies[index] = value.trim()
})
// console.log(movies)
var movieList = new List();
for (var i = 0; i < movies.length; ++i) {
    movieList.append(movies[i]);
}
// console.log(movieList)
movieList.displayList()