function print(str){
  document.write(str + "<br />");
}

function Car(manufact, name){
  this.manufact = manufact;
  this.name = name;
}

Car.prototype.info = function(){return this.manufact + " " + this.name;};

document.write("<p>");

var car1 = new Car("Toyota", "PRIUS");
print(car1.info());

var car2 = new Car("Honda", "INSIGHT");
print(car2.info());

document.write("</p>");