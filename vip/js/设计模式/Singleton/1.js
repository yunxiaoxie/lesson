var mySingleton = (function () {
	//实例保持了Singleton的一个引用
	var instance;
	function init() {
		//私有方法和变量
		function privateMethod() {
			console.log('I am private.');
		}
		var privateVariable = "Im also private";
		var privateRandoNumber = Math.random();
		return {
			//公有方法和变量
			publicMethod: function () {
				console.log("The public can see me!");
			},
			publicProperty: "I am also public",
			getRandomNumber: function () {
				return privateRandoNumber;
			}
		};
	};
	return {
		//获取Singleton实例，如果存在就返回，不存在就创建新实例
		getInstance: function () {
			if (!instance) {
				instance = init();
			}
			return instance;
		}
	}
})();
var myBadSingleton = (function () {
	//实例保持了Singleton的一个引用
	var instance;
	function init() {
		//Singleton
		var privateRandoNumber = Math.random();
		return {
			getRandomNumber: function() {
				return privateRandoNumber;
			}
		}
	}
	return {
		//每次创建新实例
		getInstance: function () {
			instance = init();
			return instance;
		}
	}
})();

var singlea = mySingleton.getInstance(),
    singleb = mySingleton.getInstance();
	
console.log(singlea.getRandomNumber() == singleb.getRandomNumber());

var badSinglea = myBadSingleton.getInstance(),
    badSingleb = myBadSingleton.getInstance();
console.log(badSinglea.getRandomNumber() !== badSingleb.getRandomNumber());