//构造函数和原型混合模式
function Person(name,age,job){
    this.name=name;
    this.age=age;
    this.job=job;
    this.friends=["firend1","friend2"];
}

Person.prototype={
    constructor:Person,
    sayName:function(){
        console.log(this.name);
    }
}
     
var lxy=new Person("lxy",22,"Software Engineer");
var personA=new Person("personA",25,"Doctor");
console.log(lxy.friends);//friend1,friend2
console.log(personA.friends);//friend1,friend2
console.log(lxy.friends==personA.friends);//false
lxy.friends.push("friend3");
console.log(lxy.friends);//friend1,friend2,friend3
console.log(personA.friends);//friend1,friend2