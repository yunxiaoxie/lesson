//原型式继承--用beget函数得到得到一个“纯洁”的新对象（“纯洁”是因为没有实例属性），再逐步增强之
//ES5提供了Object.create()函数，内部就是原型式继承
function beget(obj){   // 生孩子函数 beget：龙beget龙，凤beget凤。
    var F = function(){};
    F.prototype = obj;
    return new F();
}
function Super(){
    this.val = 1;
    this.arr = [1];
}
 
// 拿到父类对象
var sup = new Super();
// 生孩子
var sub = beget(sup);   // 核心
// 增强
sub.attr1 = 1;
sub.attr2 = 2;
//sub.attr3...
 
alert(sub.val);     // 1
alert(sub.arr);     // 1
alert(sub.attr1);   // 1
/*
优点：
从已有对象衍生新对象，不需要创建自定义类型（更像是对象复制，而不是继承。。）
缺点：
原型引用属性会被所有实例共享，因为是用整个父类对象来充当了子类原型对象，所以这个缺陷无可避免

无法实现代码复用（新对象是现取的，属性是现添的，都没用函数封装，怎么复用）
*/