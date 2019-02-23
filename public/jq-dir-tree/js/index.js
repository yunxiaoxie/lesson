$(function() {
	$(".i_item").hide();
	/*$(".item_title").toggle(function() {
		$(this).next().slideUp();  //隐藏
		$(this).find('b').text('+');
	},function() {
		$(this).next().slideDown();  //显示
		$(this).find('b').text('-');
	});*/
	/*$(".btn").toggle(function() {
		$('body').css('background','red'); 
	},function() {
		$('body').css('background','green'); 
	},function() {
		$('body').css('background','blue'); 
	})*/
	//当前单击的显示，反之隐藏
	/*$(".item_title").click(function() {
		$(".i_item").slideUp();
		if($(this).next().is(":visible")){
			$(this).next().slideUp();  //隐藏
			$(this).find('b').text('+');
		}else {
			$(this).next().slideDown();  //显示
			$(this).find('b').text('-');
		}
	});*/
	//展开当前且+-变更，默认第一个显示
	$(".m_item").find(".i_item").eq(0).show();
	$(".item_title").find("b").not(":eq(0)").text("+");
	$(".item_title").click(function() {
		$(".i_item").slideUp();
		if($(this).next().is(":visible")){
			$(this).next().slideUp();  //隐藏
			$(this).find('b').text('+');
		}else {
			$(this).next().slideDown();  //显示
			$(".item_title").find("b").text("+");
			$(this).find('b').text('-');
		}
	});

})