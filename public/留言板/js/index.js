$(function() {
	//@@sessionStorage
	let storage = localStorage;
	//提交留言
	$(".submit").click(function() {
		submit();
	});

	//删除留言
	$(".deleteAll").click(function() {
		 storage.clear();
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
		storage.setItem(_name, _message);	
		$(".name,.message").val("");
		listShow();
	};
	//列表显示
	function listShow() {
		var list = $(".messageList"),str = "";
		if(storage.length > 0 ){
			for(var i=0; i<storage.length; i++) {
				var _name = storage.key(i),
					_message = storage.getItem(_name);
				str += `<li class="list-group-item">${_name}<span>说：</span>${_message}</li>`;
				/*
				str += '<li class="list-group-item">'+_name+
						'<span>说：</span>'+_message+
						'</li>';
				*/
			};
			list.html(str);
		}else {
			list.html('没有数据显示');
		}
	};

})