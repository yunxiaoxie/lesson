$(function() {
	//提交留言
	$(".submit").click(function() {
		submit();
	});

	//删除留言
	$(".deleteAll").click(function() {
		 localStorage.clear();
		 $(".messageList").html('全部数据已经清除');
	});
	//查看留言
	$(".viewMes").click(function() {
		listShow();
	});
	//提交
	function submit() {
		var _name = $(".name").val(),
			_message = $(".message").val();
		if(_name =='' || _message =='') {
			alert('请输入信息！');
			return false;
		} 
		localStorage.setItem(_name,_message);	
		$(".name,.message").val("");
		listShow();
	};
	//列表显示
	function listShow() {
		var list = $(".messageList"),str = "";
		if(localStorage.length > 0 ){
			for(var i=0; i<localStorage.length; i++) {
				var _name = localStorage.key(i),
					_message = localStorage.getItem(_name);
				str += '<li class="list-group-item">'+_name+
						'<span>说：</span>'+_message+
						'</li>';
			};
			list.html(str);
		}else {
			list.html('没有数据显示');
		}
	};

})