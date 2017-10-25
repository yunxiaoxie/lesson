//稳妥的构造函数模式
function Person(name,age,job){
    //创建要返回的对象
    var o=new Object();
    //可以在这里定义私有变量和函数
    
    //添加方法
    o.sayName=function(){
        console.log(name);
    }
    return o;
}
var lxy=new Person("lxy",22,"Software Engineer");
lxy.sayName();
console.log(lxy.name);//undefined
console.log(lxy.age);//undefined
/*
稳妥对象最适合在一些安全的环境中（这些环境中会禁用this和new），或者防止数据被其他应用程序（如Mashup）改动时使用。
稳妥构造函数遵循与寄生构造函数类似的模式，但有两点不同：一是新创建对象的实例方法不引用this，而是不使用new操作符调用构造函数
*/