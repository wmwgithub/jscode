/*
创建一个记录学生成绩的对象，提供一个添加成绩的方法，以及一个显示学生平均成绩
的方法。
*/
function avg() {
    var sum = this.grade.reduce((a, b) => {
        return a + b
    })
    return sum / this.grade.length
}
function add(grade) {
    this.grade.push(grade)
    return xiaoming.grade
}
function student() {
    this.add = add
    this.avg = avg
    this.grade = []
}
let xiaoming = new student()
// let{ chinese, english, math } = {chinese:100,english:100,math:150}
let [chinese, english, math] = [50, 100, 150]
xiaoming.add(chinese)
xiaoming.add(english)
xiaoming.add(math)
console.log(xiaoming.avg())

/**
 * 将一组单词存储在一个数组中，并按正序和倒序分别显示这些单词
 */
var words= ['apple','orange','yellow','blue']
console.log(words.sort())//正序
console.log(words.sort().reverse())//倒序

/**
 * 修改本章前面出现过的 weeklyTemps 对象，使它可以使用一个二维数组来存储每月的有
用数据。增加一些方法用以显示月平均数、具体某一周平均数和所有周的平均数。
function weekTemps() {
this.dataStore = [];
this.add = add;
this.average = average;
}
function add(temp) {
this.dataStore.push(temp);
}
function average() {
var total = 0;
for (var i = 0; i < this.dataStore.length; ++i) {
total += this.dataStore[i];
}
return total / this.dataStore.length;
}
var thisWeek = new weekTemps();
thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);
print(thisWeek.average()); // 显示 54.875
 */
//题目如上 我没看懂  you can you up ^_^

/**
 * 创建这样一个对象，它将字母存储在一个数组中，并且用一个方法可以将字母连在一
起，显示成一个单词。
 */
function create(){
    this.words= []
    this.store = store
    this.showWord=showWord
}

function store(letter){
    this.words.push(letter)
    return this.words
}
function showWord(){
    return this.words.join("")
}
let createWord= new create()
createWord.store('a')
createWord.store('p')
createWord.store('p')
createWord.store('l')
createWord.store('e')
console.log(createWord.showWord())


