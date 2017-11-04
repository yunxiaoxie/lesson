//创建引用自身的函数
//Arguments.callee包括了一个函数的引用去创建一个argument对象
function repeat(fn, times, delay) {   

  return function() {   

    if(times-- > 0) {   

      fn.apply(null, arguments);

      var args = Array.prototype.slice.call(arguments);   

      var self = arguments.callee;   

      setTimeout(function(){self.apply(null,args)}, delay);   

    }   

  };   

}

function comms(s) {   

  console.log(s);   

}

var result = repeat(comms, 3, 2000)('Can you hear me, major tom?'); 
if (result) {
    console.log(result)
}
