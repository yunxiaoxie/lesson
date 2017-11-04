//原型模式
function Person(){

}
Person.prototype.name="lxy";
Person.prototype.age=22;
Person.prototype.job="Software Engineer";
Person.prototype.sayName=function(){
    alert(this.name);
}
     
var lxy=new Person();
lxy.sayName();
var personA=new Person();
personA.sayName();
alert(lxy.sayName()==personA.sayName());//true