function sleep(ms)
 {
  var date = new Date();
  var curDate = null;
  do { curDate = new Date(); }
  while(curDate-date < ms);
 }   

    function Dog(name) {
        this.name = name;
    };

    Dog.prototype.bark = function () {
        alert(this.name);
    };

    Dog.prototype.push = function () {
        sleep(1000);
	alert(this.name);
    };

    var dog = new Dog("name");
                     