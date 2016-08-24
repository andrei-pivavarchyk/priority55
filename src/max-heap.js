const Node = require('./node');

class MaxHeap {
constructor() {
this.root=null;
this.parentNodes=[];

}

push(data, priority) {
var newNode=new Node(data, priority);
this.insertNode(newNode);

this.shiftNodeUp(this.parentNodes[this.parentNodes.length-1]);






}

pop() {

}

detachRoot() {
var root=this.root;
	this.root=null;
	return root;

}

restoreRootFromLastInsertedNode(detached) {

}

size() {
return this.parentNodes.length;

}

isEmpty() {


}

clear() {

}

 


insertNode(node) {

var parent=this.root;
var array=this.parentNodes;
this.parentNodes.push(node); 

if(this.root===null){this.root=node;     }

else {
reverse();
function reverse(){

 if(parent.right==null&&parent.left==null){parent.appendChild(node); }

else if(parent.left!==null&&parent.right==null){parent.appendChild(node); array.shift();}



else{ parent=parent.left;   return reverse();   }

}
}



 }//конец insert//

shiftNodeUp(node) {
//чет пока все крашится

}//конец shift//

shiftNodeDown(node) {






}
}

module.exports = MaxHeap;