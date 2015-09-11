function DLLNode(data){
	this.data=data;
	this.next=null;
	this.prev=null;
};

function DLList(){
	this.head=null;
	this.tail=null;
	this.count=0;
};

DLList.prototype.append = function(val){
	var newEl = new DLLNode(val);
	if(!this.head){this.head=this.tail=newEl; this.count++;}
	else	      { this.head.next = new DLLNode(val);
			this.head.next.prev=this.head; 
			this.head=this.head.next;
			this.count++;}
	return this;
};

DLList.prototype.at = function(val){
	var i,element=this.tail;
	if(val>=this.count) console.log("no such element");
	if(typeof val != 'number') console.log("not number");
	else {  for(i=0;i<val;i++){
			element=element.next;
		}
		console.log(element.data);
		}
	return this;
};

DLList.prototype.deleteAt = function(val){
	var i,element=this.tail;
	if(val>=this.count) console.log("no such element");
	if(typeof val != 'number') console.log("not number");
	else {  for(i=0;i<val;i++){
			element=element.next;
		}
		element.prev.next=element.next;
		element.next.prev=element.prev;
		this.count--;
		}
	return this;
};

DLList.prototype.insertAt = function(index,val){
	var i,element=this.tail,tmp=new DLLNode(val);
	if(index<0) console.log("don't break index");
	if(typeof index != 'number') console.log("not number");
	else {  for(i=0;i<index;i++){
			element=element.next;
		}
		this.count++;
		element.prev.next=tmp;
		tmp.prev = element.prev;
		tmp.next=element;
		element.prev=tmp;
		}
	return this;
}

DLList.prototype.indexOF = function(val){
	var i,element=this.tail;
	for(i=0;i<this.count;i++){
			if(element.data===val) {console.log(i); break;}
			element=element.next;}
	return this;
}

DLList.prototype.each = function(f){
	var i,element=this.tail;
	for(i=0;i<this.count;i++){
			f(element)
			element=element.next;}
	return this;
}

DLList.prototype.reverse = function(){
	var i,element=this.tail,tmp;
	for(i=0;i<this.count;i++){
		tmp=element.next;
		element.next=element.prev;
		element.prev=tmp;
		element=element.prev;}
	tmp=this.head;
	this.head=this.tail;
	this.tail=tmp;
	return this;
}

var a = new DLList();
var f = function(val){console.log(val.data)}
a.append(1).append(2).append(3);