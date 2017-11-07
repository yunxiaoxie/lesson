    
/*
 * js 观察者模式 又称 订阅/发布模式
 * 通过创建“可观察”对象，当发生一个感兴趣的事件时可将该事件通告给
 * 所有观察者，从而形成松耦合
*/

// 通用的发布者
var publisher = {

    subscribers : {
        any : []    // 事件类型： 订阅者
    },

    // 将订阅者提供的调用方法添加到subscribers 订阅的事件数组中
    subscribe : function(fn, type) {
        type = type || 'any';
        if (typeof this.subscribers[type] === 'undefined') {
            this.subscribers[type] = [];
        }
        this.subscribers[type].push(fn);
    },

    // 删除订阅者
    unsubscribe : function(fn, type) {
        this.visitSubscribers('unsubscribe', fn, type);
    },

    // 循环遍历subscribers中每个元素，并调用他们所提供的方法
    publish : function(publication, type) {
        this.visitSubscribers('publish', publication, type);
    },

    // helper
    visitSubscribers: function (action, arg, type) {
        var pubtype = type || 'any',
            subscribers = this.subscribers[pubtype],
            i,
            max = subscribers.length;
        for (i = 0; i < max; i += 1) {
            if (action === 'publish') {
                // 调用订阅者订阅该事件所提供的方法
                subscribers[i](arg);
            } else {
                // 找到当前订阅事件中提供的方法，并删除
                if (subscribers[i] === arg) {
                    subscribers.splice(i, 1);
                }
            }
        }
    }
};

// 转化为通用发布者
function makePublisher(o) {
    var i;
    // 将通用发布者的方法复制到o对象中
    for (i in publisher) {
        if (publisher.hasOwnProperty(i) && typeof publisher[i] === "function") {
            o[i] = publisher[i];
        }
    }
    // 引用类型单独赋值
    o.subscribers = {any: []};
}

// 实现paper 对象，他所做的就是发布日刊和月刊
var paper = {
    daily : function() {
        this.publish('今个有重要新闻');
    },
    monthly : function() {
        this.publish('每月调查', 'monthly');
    }
};

// 将paper构造为一个发布者
makePublisher(paper);

// 订阅者对象joe,该对象有2个方法
var joe = {
    drinkCoffee : function(paper) {
        console.log('开始阅读' + paper);
    },
    sundayPreNap : function(monthly) {
        console.log('关于失眠阅读这里' + monthly);
    }
};

// 订阅者1
function subscriberFunc1(arg) {
    console.log('又是一个订阅者1：' + arg);
}
// 订阅者2
function subscriberFunc2(arg) {
    console.log('又是一个订阅者2：' + arg);
}
// 订阅者3
function subscriberFunc3(arg) {
    console.log('又是一个订阅者3：' + arg);
}
// joe向paper订阅
paper.subscribe(joe.drinkCoffee);
paper.subscribe(joe.sundayPreNap, 'monthly');

// 订阅者1，2向paper订阅
paper.subscribe(subscriberFunc1, 'monthly');
paper.subscribe(subscriberFunc2, 'monthly');
paper.subscribe(subscriberFunc3);

paper.unsubscribe(subscriberFunc3);

// paper开始发布日刊 和 月刊
paper.daily();
paper.monthly();


console.log('转换分割线======================================================');
// // 将任意一个订阅者变成发布者比如joe,可以在微博上发布状态更新
makePublisher(joe);
joe.weibo = function(msg) {
    this.publish(msg);
};

// paper(订阅者)决定读取weibo信息，则需要提供一个读取方法
paper.readWeibo = function(info) {
    console.log('重大新闻' + info);
};

// paper向joe订阅
joe.subscribe(paper.readWeibo);
// joe发布微博信息
joe.weibo('今日头条，你全家都是假日办！');