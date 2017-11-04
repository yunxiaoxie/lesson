function format(string) {   

  var args = arguments;   

  var pattern = new RegExp("%([1-" + arguments.length + "])", "g");   

  return String(string).replace(pattern, function(match, index) {   

    return args[index];   

  });   

};

function makeFunc() {   
  //把arguments对象转换成一个真正的数组
  var args = Array.prototype.slice.call(arguments);   
  //把数组的第一个元素从其中删除,并返回第一个元素的值
  var func = args.shift();   

  return function() {   

    return func.apply(null, args.concat(Array.prototype.slice.call(arguments)));   

  };   

}

var majorTom = makeFunc(format, "This is Major Tom to ground control. I’m %1.");
console.log(majorTom("stepping through the door"))