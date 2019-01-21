/**
栈可以用来判断一个算术表达式中的括号是否匹配。编写一个函数，该函数接受一个算
术表达式作为参数，返回括号缺失的位置。下面是一个括号不匹配的算术表达式的例
子：2.3 + [23 / 12] + (3.14159×0.24
 */
function Stack() {
    this.dataStore = []
    this.top = 0
    this.push = push
    this.pop = pop
    this.peek = peek
    this.length = length
    this.clear = clear
}
function push(element) {
    this.dataStore[this.top++] = element
}
function pop() {
    return this.dataStore[--this.top]
}
function peek() {
    return this.dataStore[this.top - 1]
}
function clear() {
    delete this.dataStore
    this.dataStore = []
    this.top = 0
}
function length() {
    return this.top
}
var s = new Stack()
let str = '{2.3 + [23 / 12] + (3.14159×0.24' 
let right = ['(', ')', '[', ']', '{', '}']
function brackets() {
    //正则表达式匹配出所有括号
    let reg = /\(|\)|\[|\]|\{|\}/ig
    let arr = str.match(reg)
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        let topbracket = s.peek()//栈顶括号
        let shouldbracket = should(topbracket)//栈顶括号应该匹配的括号
        // console.log(s.peek(), shouldbracket)
        if (arr[i] == shouldbracket) {
            //匹配成功出栈
            s.pop()
        } else {
            //匹配失败新元素入栈
            s.push(arr[i])
        }
    }
    //显示异常的括号
    while (s.length() > 0) {
        console.log('bracketerr:' + s.pop())
    }
    //程序结束清空栈
    s.clear()
}
function should(bracket) {
    //返回应该匹配的括号
    let index
    for (let i = 0; i < right.length; i++) {
        if (bracket == right[i]) {
            index = i
        }
    }
    if (index % 2 == 0) {
        return right[index + 1]
    } else {
        //栈为空或者传入右括号的时候直接入栈
        return false
    }
}
brackets()//输出 ( {