//字典 字典是一种以键 - 值对形式存储数据的数据结构
function Dictionary() {
    this.datastore = new Array()
    this.add = add
    this.find = find
    this.remove = remove
    this.showAll = showAll
    this.count = count
    this.clear = clear
}
function add(key, value) {
    this.datastore[key] ? this.datastore[key].push(value) : this.datastore[key] = [value]
}

function find(key) {
    return this.datastore[key]
}
function remove(key) {
    delete this.datastore[key]
}
function showAll() {
    /* 一般显示代码
    for(key in this.datastore){
        // 调用 Object 类的 keys() 方法可以返回传入参数中存储的所有键
        console.log(key+'->'+this.datastore[key])
    }
    */
    //有序显示如下
    let key = Object.keys(this.datastore).sort()//拿到keys 并且对keys排序
    key.forEach((value, index, input) => {
        console.log(value + '--->' + this.datastore[value])
    })
}
function count() {
    let n = 0
    for (let key in this.datastore) {
        n++;
    }
    return n
}
function clear() {
    for (let name in this.datastore) {
        delete this.datastore[name]
    }
}
//测试 代码
var pbook = new Dictionary();
/*
pbook.add("Raymond","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("Number of entries: " + pbook.count());
console.log("David's extension: " + pbook.find("David"));
pbook.showAll();
pbook.clear();
console.log("Number of entries: " + pbook.count());
*/
//有序显示 和统计记录
pbook.add("Raymond", "123");
pbook.add("David", "345");
pbook.add("David", "345");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
pbook.add("Mike", "723");
pbook.add("Jennifer", "987");
pbook.add("Danny", "012");
pbook.add("Jonathan", "666");
pbook.add("Jonathan", "666");
pbook.showAll()
// pbook.clear()