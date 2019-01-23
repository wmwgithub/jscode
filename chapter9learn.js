//集合 set
/**
 *  集合（set）是一种包含不同元素的数据结构。集合中的元素称为成员。集合的两个最重
    要特性是：首先，集合中的成员是无序的；其次，集合中不允许相同成员存在
 * 
 */
function Set() {
    this.add = add
    this.dataStore = []
    this.remove=remove
    this.show=show
}
function add(data) {
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data)
        return true
    }
    else {
        return false
    }
}
function remove(data){
    let pos=this.dataStore.indexOf(data)
    if(pos>-1){
        this.dataStore.splice(pos,1)
        return true
    }
    else{
        return false
    }
}

function show(){
    return this.dataStore
}
//测试代码
var names = new Set();
names.add("David");
names.add("Jennifer");
names.add("Cynthia");
names.add("Mike");
names.add("Raymond");
console.log(names.show())
console.log('------------------')
//重复添加
names.add("Mike");
names.add("Raymond");
console.log(names.show())
console.log('------------------')
//删除
names.remove('Mike')
names.remove('Raymond')
console.log(names.show())
//还有 交并补 一些操作 感觉书上写的不是很合理 此处省略 直接去看树