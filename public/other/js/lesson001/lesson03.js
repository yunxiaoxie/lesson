//构造函数模式
function Person(name ,age,job){
    this.name=name;
    this.age=age;
    this.job=job;
    this.sayName=function(){
        console.log(this.name);
    }
}
var lxy=new Person("lxy",22,"Software Engineer");
var strangerA=new Person("strangerA",24,"Doctor");
lxy.sayName();
strangerA.sayName();