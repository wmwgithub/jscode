//栈
/**
 * 一种特殊的列表，栈内的元素只能通过列表一端访问,称为栈顶。栈是一种高效的数据结构，因为数据只能在栈顶添加或者删除
 * 先进后出的机制
 * 
 */
'use strict'
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
var s = new Stack();
//测试数据
/*
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length: " + s.length());
console.log(s.peek())
let popped = s.pop()
console.log('element pop',popped)
console.log(s.peek());
s.push("Cynthia");
console.log(s.peek());
s.clear();
console.log("length: " + s.length());
console.log(s.peek());
s.push("Clayton");
console.log(s.peek());
*/
//实例运用进位制的转换
/*
function change(num,base){
    // num为数值base为要求几进制
    while (num>0) {
        //取余余数入栈
        s.push(num%base)
        num=Math.floor(num/base)
    }
    while(s.length()>0){
        //出栈
        console.log(s.pop())
    }
}
change(3,2)//输出 11
change(1314,16)//输出 522
*/
//偶回文判断输入字符必须是偶数
/*
function judge(word){
    let wordArr= word.split("")
    for(let i=0;i<wordArr.length;i++){
        //判断是否和已有的栈顶元素相等 如果相等则出栈不相等继续入栈
        if(wordArr[i]==s.peek()){
            //相等就出栈
            // console.log(wordArr[i],s.peek())
            s.pop()
        }else{
            //不相等入栈 并且栈顶加一
            s.push(wordArr[i])
        }
    }
    //最后判断 如果栈的长度大于0说明栈内还有元素则不是回文否则是回文
    if(s.length()>0){
        // console.log(s.length())
        //清空栈
        s.clear()
        return word+"不是回文"
    }
    s.clear()
    return word+"是回文"
}
console.log(judge('hello'))//不是回文
console.log(judge('12Q33q21'))//不是回文
console.log(judge('1234554321'))//是回文
*/
//奇数的话直接全都入栈然后都出栈如果结果还是一样说明是回文
//递归模拟
function factorial(n) {
    if (n === 0) {
        return 1
    }
    else {
        return n * factorial(n - 1)
    }
}
console.log(factorial(5))
function stackfact(n) {
    while (n > 1) {
        s.push(n--)
    }
    let result = 1
    while(s.length()>0){
        result =result*s.pop()
    }
    return result
}
console.log(stackfact(5))
  