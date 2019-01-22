//链表 相互有联系的数据
/**
 * 链表是由一组节点组成的集合。每个节点都使用一个对象的引用指向它的后继。指向另一
   个节点的引用叫做链
 */
//1. 定义节点
function Node(element) {
	this.element = element
	this.next = null
	this.previous = null//双向链表特性
}
//2. 定义链表类
function LList() {
	this.head = new Node("head")//head节点初始化值为null当有新节点插入的时候next会指向新的元素
	this.find = find
	this.insert = insert
	this.remove = remove
	this.display = display
	this.findPrevious = findPrevious
	this.findLast = findLast//找最后一个节点
	this.dispReverse = dispReverse//反向展示
}
function insert(newElement, item) {
	//插入节点 在已知元素后面插入之前要找到后面的节点是什么 所以要用find方法进行查找
	let newNode = new Node(newElement)
	let current = this.find(item)//返回当前节点
	newNode.next = current.next //新插入的节点指向后面那个节点
	newNode.previous = current//新节点的前向指向当前item节点
	current.next = newNode//当前节点指向新插入的节点
}
function find(item) {
	//查找节点
	let currNode = this.head//当前节点
	while (currNode.element != item) {
		currNode = currNode.next
	}
	return currNode
}

function display() {
	let currNode = this.head
	while (!(currNode.next == null)) {
		//只要不是尾节点就一直遍历
		console.log(currNode.next.element)
		currNode = currNode.next
	}
}
function findPrevious(item) {
	//找到前面那个节点
	let currNode = this.head
	while (!(currNode.next == null) && !(currNode.next.element == item)) {
		currNode = currNode.next
	}
	return currNode
}
function remove(item) {
	/*
	单向链表代码
	let PreNode = this.findPrevious(item)
	if (PreNode.next != null) {
		PreNode.next = PreNode.next.next//前节点的next指向被删除节点的next略过了被删除节点
	}
	*/
	//双向链表代码
	var currNode = this.find(item)
	if (!(currNode.next == null)) {
		currNode.previous.next = currNode.next//前节点的后项直接指向后节点
		currNode.next.previous = currNode.previous//后节点前向直接指向前节点
		currNode.next = null
		currNode.previous = null
	}
}
function findLast() {
	let currNode = this.head
	while (!(currNode.next == null)) {
		currNode = currNode.next
	}
	return currNode
}
function dispReverse() {
	let currNode = this.findLast()//获取链表最后一个元素
	while (!(currNode.previous == null)) {
		console.log(currNode.element)
		currNode = currNode.previous
	}

}
//单向测试代码
/*
var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Alma", "Russellville");
cities.display()
console.log('---------------------------')
cities.remove('Alma')
cities.display()
console.log('---------------------------')
cities.remove('Conway')
cities.display()
*/
//双向链表 测试代码

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
console.log('反向显示')
cities.dispReverse()
console.log('----------------------')
cities.remove("Carlisle");
cities.display();
console.log('反向显示')
cities.dispReverse();
//循环链表
/**
 * 如果你希望可以从后向前遍历链表，但是又不想付出额外代价来创建一个双向链表，那么
   就需要使用循环链表。从循环链表的尾节点向后移动，就等于从后向前遍历链表。
 */
function loopNode() {
	this.head = new Node("head")//head节点初始化值为null当有新节点插入的时候next会指向新的元素
	this.head.next= this.head
	this.find = find
	this.insert = insert
	this.remove = remove
	this.display = display
}
//后面爱学习的人可自行完成各个函数的循环链表写法