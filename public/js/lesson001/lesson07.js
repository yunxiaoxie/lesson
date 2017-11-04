//寄生的构造函数模式
function Person(name,age,job){
    var o=new Object();
    o.name=name;
    o.age=age;
    o.sayName=function(){
        alert(this.name);
    }
    return o;
}
var lxy=new Person("lxy",22,"Software Engineer");
lxy.sayName();
/*
类似构造函数，但有时可以为对象添加额外的方法，如：
function SpecialArray() {
    var values = [];
    values.push.apply(values, arguments);
    values.toPipedString = function(){
        return this.join('|');
    }
    return values;
}
var colors = new SpecialArray("red","blue");
console.log(colors.toPipedString());
*/