$(function() {
	var data=[];
	var currentIndex;
	var _img = $(".list img");
	$.each(_img,function(index,item){
		let idx = $(item).attr("index");
		let src = $(item).attr("src");
		//@@用字符串拼接会很长，不易读
		data.push(`<li data-id=${idx}><img src='${src}'/></li>`);
	})
	$(".content-img").html(data.join(""));
	//单击图片，弹层显示
	$(".list img").click(function() {
		var _src = $(this).attr("src");
		currentIndex = $(this).attr("index");
		$(".back").show();
		showImg(currentIndex);
		//$(".content-img li").eq(currentIndex).show().siblings("li").hide();
		//$(".content-img").html('<li><img src="'+_src+'"/></li>');
	})
	//单击关闭，弹层消失
	$(".close").click(function() {
		$(".back").hide();
	})
	//左按钮
	$("#left").click(function() {
		if(currentIndex == 0){
			currentIndex = data.length-1;
			showImg(currentIndex);
		}else {
			showImg(--currentIndex);
		}
		
	})
	//右按钮
	$("#right").click(function() {
		if(currentIndex == data.length-1){
			currentIndex = 0;
			showImg(currentIndex);
		}else {
			showImg(++currentIndex);
		}
		
	})
	function showImg(i) {
		$(".content-img li").eq(i).show().siblings("li").hide();
	}
})