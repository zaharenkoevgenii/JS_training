function Stack(data){
	this.data=data;
	this.next=null;
};

Stack.prototype.push = function(val){
	if(!this.next)  this.next = new Stack(val) 
	else 		this.next.push(val);
	return this;
};
Stack.prototype.pop = function(){
	if(!this.next.next) {var val=this.next.data;this.next=null;console.log(val);}
	else		    this.next.pop();
	return this;	
};
Stack.prototype.peek = function(){
	if(!this.next.next) {console.log(this.next.data);}
	else		    this.next.peek();
	return this;
	
};