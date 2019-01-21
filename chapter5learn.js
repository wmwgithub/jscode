let fs = require('fs')
//队列
/**
 * 队列是一种列表，不同的是队列只能在队尾插入元素，在队首删除元素
 * 队列是一种先进先出（First-In-First-Out，FIFO）的数据结构。队列被用在很多地方，比如
   提交操作系统执行的一系列进程、打印任务池等，一些仿真系统用队列来模拟银行或杂货
    店里排队的顾客
 */

function Queue() {
    this.dataStore = []
    //enqueue 向队列尾部添加一个元素
    this.enqueue = enqueue
    //dequeue 删除队列首元素
    this.dequeue = dequeue
    //读取队列首元素
    this.front = front
    //读取队列尾元素
    this.back = back
    //显示队列内所有元素·
    this.toString = toString
    //判断队列是否为空
    this.empty = empty
    this.count = count
    //优先级出队
    this.newdequeuqe = newdequeue
}

function enqueue(element) {
    this.dataStore.push(element)
}
function dequeue() {
    return this.dataStore.shift()
}
function front() {
    return this.dataStore[0]
}
function back() {
    return this.dataStore[this.dataStore.length - 1]
}
function toString() {
    let queueStr = ''
    for (let i = 0; i < this.dataStore.length; i++) {
        queueStr = queueStr + this.dataStore[i] + '\n'
    }
    return queueStr
}
function empty() {
    if (this.dataStore.length == 0) {
        return true
    }
    return false
}
function count() {
    return this.dataStore.length
}

//测试数据
/*
var q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());
*/
//进入舞池跳舞问题
/* 
function Dancer(sex, name) {
    // 创建一个dancer对象储存用户信息
    this.sex = sex
    this.name = name
}
let males = new Queue()
let females = new Queue()
function getDancers() {
    let names = fs.readFileSync('./dancer.txt', 'utf8').split("\n")
    for (let i = 0; i < names.length; i++) {
        names[i] = names[i].trim()
    }
    for (let i = 0; i < names.length; i++) {
        let dancer = names[i].split(" ")
        let sex = dancer[0]
        let name = dancer[1]
        if (sex == 'F') {
            females.enqueue(new Dancer(sex, name))
        } else {
            males.enqueue(new Dancer(sex, name))
        }
    }
    // console.log(males,females)
}
getDancers()//男女进入队列

function dancer() {
    console.log('The dancer partners are')
    while (!females.empty() && !males.empty()) {
        //出队列
        let people = females.dequeue()
        // console.log(people)
        console.log('females dancer is' + ' ' + people.name)
        people = males.dequeue()
        console.log('males dancer is' + ' ' + people.name)
        console.log('----------------------------------')
    }
    if (!females.empty()) {
        console.log(females.front().name + 'is waiting to dance')
        console.log('There are '+females.count()+' females dancer waiting to dancer')
    }
    if (!males.empty()) {
        console.log(males.front().name + 'is waiting to dance')
        console.log('There are '+males.count()+' males dancer waiting to dancer')
    }
}
dancer()
*/


//用队列对数据排序
//个位数十位数分别遍历两遍
/**
 * 对于 0~99 的数字，基数排序将数据集扫描两次。第一次按个位上的数字进行排序，第二
 * 次按十位上的数字进行排序
 * 
 */
//生成0~99随机数20个
/*
let randomNum = []
for (let i = 0; i < 20; i++) {
    randomNum[i] = Math.floor(Math.random() * 99)
}
console.log('遍历前的数组', randomNum)
//用数组产生10个队列
let queueArr = []
for (let i = 0; i < 10; i++) {
    queueArr[i] = new Queue()
}
//遍历个位数 并且返回新的序列数组
function first(numArr) {
    numArr.forEach((value) => {
        //value%10  产生个位数数值
        queueArr[value % 10].enqueue(value)
    })
    //遍历队列产生新顺序数组
    let newNumArr = []
    for (let i = 0; i < 10; i++) {
        while (!queueArr[i].empty()) {
            //队列不为空元素出队
            newNumArr.push(queueArr[i].dequeue())
        }
    }
    //返回新的数组顺序
    console.log('遍历个位数后新的数组顺序', newNumArr)
    return newNumArr
}
let firstArr = first(randomNum)
function second(newNumArr) {
    newNumArr.forEach((value) => {
        //Math.floor(value /10)  产生十位数数值
        queueArr[Math.floor(value / 10)].enqueue(value)
    })
    //遍历队列产生最终排序成功的数组
    let finalArr = []
    for (let i = 0; i < 10; i++) {
        while (!queueArr[i].empty()) {
            //队列不为空元素出队
            finalArr.push(queueArr[i].dequeue())
        }
    }
    //返回新的数组顺序
    console.log('遍历十位数后新的数组顺序', finalArr)
    return finalArr
}
second(firstArr)
*/

//优先队列问题
/**
 * 从优先队列中删除元素时，需要考虑优先权的限制。比如医院急诊科（Emergency
 * Department）的候诊室，就是一个采取优先队列的例子。当病人进入候诊室时，分诊护士
 * 会评估患者病情的严重程度，然后给一个优先级代码。高优先级的患者先于低优先级的患
 * 者就医，同样优先级的患者按照先来先服务的顺序就医
 * 
 */

function Patient(name, code) {
    this.name = name//用户姓名
    this.code = code//记录用户的优先级
}
function newdequeue() {
    var priority = this.dataStore[0].code;
    //拿到最高级优先级的人
    let index = 0//最高优先级的人的位置
    for (var i = 1; i < this.dataStore.length; ++i) {
        if (this.dataStore[i].code < priority) {
            priority = this.dataStore[i].code
            index = i
        }
    }
    //出队
    return this.dataStore.splice(index, 1);
}

var p = new Patient("Smith", 5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p)
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
console.log("all patient", ed.dataStore)
while (!ed.empty()) {
    let seen = ed.newdequeuqe()//出队
    console.log("Patient being treated: " + seen[0].name);
    console.log('----------------------------')
}

