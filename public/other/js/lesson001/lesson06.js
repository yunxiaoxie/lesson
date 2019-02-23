//动态原型模式
function Person(name,age,job){
this.name=name;
this.age=age;
this.job=job;
this.friends=["firend1","friend2"];
if(typeof this.sayName!="function"){
    console.log("初始化原型");//只执行一次
    Person.prototype.sayName=function(){
        console.log(this.name);
    }
}
}
     
var lxy=new Person("lxy",22,"Software Engineer");
lxy.sayName();
var personA=new Person("personA",25,"Doctor");
personA.sayName();