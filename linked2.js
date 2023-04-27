// const { log } = require("console");

class Node1{
    constructor(data){
this.data=data;
this.next=null
    }

}
class Link2{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    toAdd(data){
        let node=new Node1(data)
        if (!this.head){
            this.head=node;
            this.tail=this.head;
        }else{
            this.tail.next=node;
            this.tail=node ;
        }
            this.length++;
            return this;
    }
}

let links=new Link2();
console.log(links.toAdd(14))
console.log(links.toAdd(20))