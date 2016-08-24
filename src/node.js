class Node {
	constructor(data, priority) {
this.data=data;
this.priority=priority;
this.left=null;
this.right=null;
this.parent=null;
	}


	appendChild(node) {

  if(this.left==null){this.left=node;
 node.parent=this;
  }
  else if(this.right==null){this.right=node;
 node.parent=this;
  }
 
	}

	removeChild(node) {

		if(this.left==node){
			this.left=null;
			node.parent=null;
		}

		else if(this.right==node){this.right=null;
        node.parent=null;
		}

		else{throw 'error';}



	}

	remove() {

		if(this.parent!==null){
			this.parent.removeChild(this);
		}


	}

	swapWithParent() {


var thisLeft=this.left;
var thisRight=this.right;



if(this.parent!==null){  //если есть родитель

if(this.parent.parent!==null){ //если есть родитель у родителя


		if(this.parent==this.parent.parent.left){    //если родитель node-левый ребенок
		this.parent.parent.left=this;

					if(this==this.parent.left){     //если node - левый ребенок

						this.left=this.parent;
						this.right=this.parent.right;
						if(this.right!==null){this.right.parent=this;}
						this.parent=this.parent.parent;

						this.left.left=thisLeft;
						this.left.right=thisRight;
						this.left.parent=this;
						if(this.left.left!==null){this.left.left.parent=this.left;}
						if(this.left.right!==null){this.left.right.parent=this.left;}
					}  
					else if(this==this.parent.right){     //если node - правый ребенок

						this.right=this.parent;
						this.left=this.parent.left;
						if(this.left!==null){this.left.parent=this;}
						this.parent=this.parent.parent;

						this.right.left=thisLeft;
						this.right.right=thisRight;
						this.right.parent=this;
						if(this.right.left!==null){this.right.left.parent=this.right;}
						if(this.right.right!==null){this.right.right.parent=this.right;}

					}
		}  

		else if(this.parent==this.parent.parent.right){    //если родитель node-правый ребенок

		this.parent.parent.right=this;

						if(this==this.parent.left){     //если node - левый ребенок

						this.left=this.parent;
						this.right=this.parent.right;
						if(this.right!==null){this.right.parent=this;}
						this.parent=this.parent.parent;

						this.left.left=thisLeft;
						this.left.right=thisRight;
						this.left.parent=this;
						if(this.left.left!==null){this.left.left.parent=this.left;}
						if(this.left.right!==null){this.left.right.parent=this.left;}
					}  
					else if(this==this.parent.right){     //если node - правый ребенок

						this.right=this.parent;
						this.left=this.parent.left;
						if(this.left!==null){this.left.parent=this;}
						this.parent=this.parent.parent;

						this.right.left=thisLeft;
						this.right.right=thisRight;
						this.right.parent=this;
						if(this.right.left!==null){this.right.left.parent=this.right;}
						if(this.right.right!==null){this.right.right.parent=this.right;}

					}
        			
		} 

}   //конец если есть родитель у родителя

	else{	//если нет у родителя родителя 

					if(this==this.parent.left){     //если node - левый ребенок

						this.left=this.parent;
						this.right=this.parent.right;
						if(this.right!==null){this.right.parent=this;}
						

						this.left.left=thisLeft;
						this.left.right=thisRight;
						this.left.parent=this;
						if(this.left.left!==null){this.left.left.parent=this.left;}
						if(this.left.right!==null){this.left.right.parent=this.left;}
					}  
					else if(this==this.parent.right){     //если node - правый ребенок

						this.right=this.parent;
						this.left=this.parent.left;
						if(this.left!==null){this.left.parent=this;}
						

						this.right.left=thisLeft;
						this.right.right=thisRight;
						this.right.parent=this;
						if(this.right.left!==null){this.right.left.parent=this.right;}
						if(this.right.right!==null){this.right.right.parent=this.right;}

					}

    }//конец else "если нет у родителя родителя"



}//конец если есть родитель


else{return;}


	}

}

module.exports = Node;



















