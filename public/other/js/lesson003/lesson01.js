//所有的函数都有属于自己的一个arguments对象，它包括了函所要调用的参数
//他不是一个数组，如果用typeof arguments，返回的是’object’。虽然我们可以用调用数据的方法来调用arguments。
//比如length,还有index方法。但是数 组的push和pop对象是不适用的。
function format(string) {   

  var args = arguments;   

  var pattern = new RegExp("%([1-" + arguments.length + "])", "g");   

  return String(string).replace(pattern, function(match, index) {   

    return args[index];   

  });   

};

var v = format("And the %1 want to know whose %2 you %3", "papers", "shirt", "wear");
console.log(v)