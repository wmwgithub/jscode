//散列
/**
 * 散列是一种常用的数据存储技术，散列后的数据可以快速地插入或取用。散列使用的数据
   结构叫做散列表。在散列表上插入、删除和取用数据都非常快，但是对于查找操作来说却
   效率低下，比如查找一组数据中的最大值和最小值。这些操作得求助于其他数据结构，二
   叉查找树就是一个很好的选择
 * 
 */
function HashTable() {
    this.table = new Array(137)
    this.simpleHash = simpleHash
    this.betterHash = betterHash
    this.showDistro = showDistro
    this.put = put
    this.put2 = put2//对应get方法 新的put方法
    this.get = get
}
function simpleHash(data) {
    //返回字符串散列键 即 散列函数算法
    let total = 0
    for (let i = 0; i < data.length; i++) {
        total = total + data[i].charCodeAt()
    }
    // console.log(data+'-->'+total)
    return total % this.table.length
}
function put(data) {
    // let pos = this.simpleHash(data)//拿到哈希表位置值
    let pos = this.betterHash(data)
    this.table[pos] = data
}
function showDistro() {
    this.table.forEach((element, index) => {
        if (element != undefined) {
            console.log(index + ": " + element)
        }
    });
}
function betterHash(data) {
    const H = 37
    let total = 0
    for (let i = 0; i < data.length; i++) {
        total = H * total + data[i].charCodeAt()//每次乘以一个较小的质数 霍纳算法
    }
    return total % this.table.length
}
/*
//测试函数 字符串键
var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"]
var hTable = new HashTable();
for (var i = 0; i < someNames.length; ++i) {
    hTable.put(someNames[i]);
}
hTable.showDistro()
// "Clayton" 和 "Raymond" 发生了散列值碰撞 于是乎 我们使用 betterHash 函数

*/
//测试函数 整型键
/*
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function genStuData(arr) {
    for (var i = 0; i < arr.length; i++) {
        var num = ''
        for (var j = 1; j <= 9; j++) {
            num += Math.floor(Math.random() * 10)
        }
        num += getRandomInt(50, 100)
        arr[i] = num
    }
}
let numStudents = 10
let arrSize = 97
let idLen = 9
let students = new Array(numStudents)
genStuData(students)
console.log(students)
console.log("Student data :")
for (let i = 0; i < students.length; i++) {
    console.log(students[i].substring(0, 8) + " " + students[i].substring(9))
}
console.log("distribute")
let hTable = new HashTable()
for (let i = 0; i < students.length; i++) {
    hTable.put(students[i])
}
hTable.showDistro()
//bettetHash 算法明显比simpleHash 好
*/
//对散列表排序,从散列表中取值
function put2(key,data){
    //将键值散列化后，将数据存储到散列化后的键值对应在数组中的位置上
    let pos=this.betterHash(key)
    this.table[pos]=data
}
function get(key){
    //通过key 拿到数据值
    return this.table[this.betterHash(key)]
}
//其他 避免碰撞的方法 开链法 线性探测法
