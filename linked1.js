const { log } = require("console");


class Node{
    constructor(val){
this.val=val;
this.next=null
    }
}

class Linklist{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0
    }
 
    Push(val){
let node=new Node(val)
if (!this.head) {
   this.head=node;
   this.tail=this.head 
}else{
    this.tail.next=node;
    this.tail=node
}
this.length++;
return this;
}


Pop(){
  if(!this.head) {
    return undefined;
  }else{
let current=this.tail;
let newTail=current;


while (current.next) {
    this.tail=current;
    this.tail.next=null
}
this.length--;
return current;
  }
}
}
console.clear()
let linkedlist=new Linklist();
console.log(linkedlist.Push(39))
console.log(linkedlist.Push(50))
console.log(linkedlist.Push(0.6))

console.log(linkedlist.length);
linkedlist.Pop();
linkedlist.Pop();
linkedlist.Pop();
console.log(linkedlist.length)


