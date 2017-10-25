//寄生式继承--给原型式继承穿了个马甲而已，看起来更像继承了
function beget(obj){   // 生孩子函数 beget：龙beget龙，凤beget凤。
    var F = function(){};
    F.prototype = obj;
    return new F();
}
function Super(){
    this.val = 1;
    this.arr = [1];
}
function getSubObject(obj){
    // 创建新对象
    var clone = beget(obj); // 核心
    // 增强
    clone.attr1 = 1;
    clone.attr2 = 2;
    //clone.attr3...
 
    return clone;
}
 
var sub = getSubObject(new Super());
alert(sub.val);     // 1
alert(sub.arr);     // 1
alert(sub.attr1);   // 1
/*
优点：
还是不需要创建自定义类型
缺点：
无法实现函数复用（没用到原型，当然不行）
*/