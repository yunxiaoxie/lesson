var Web = {
	init:function(){
		this.bind();
		this.popup();
	},
	bind: function() {
		$(".content-list .list-b").hover(function() {
			$(this).find(".see").show();
		},function() {
			$(this).find(".see").hide();
		});
		$(".see").click(function() {
			$(".bg ,.popupbox").show();
		});
		$(".cancel,.btn3").click(function() {
			$(".bg ,.popupbox").hide();
		});
	},
	popup: function() {
		var box = $(".popupbox");
		var width =document.body.clientWidth;//网页可见区域
		var height =document.body.clientHeight;//网页可见区域
		var _width = (width-box.width())/2;
		var _height = (height-box.height())/2;
		box.css({'left':_width,'top':_height});
	}
}


$(function() {
	Web.init();
	/*$(".content-list .list-b").hover(function() {
		$(this).find(".see").show();
	},function() {
		$(this).find(".see").hide();
	});
	$(".see").click(function() {
		$(".bg ,.popupbox").show();
	});
	$(".cancel,.btn3").click(function() {
		$(".bg ,.popupbox").hide();
	});
	popup();
	function popup() {
		var box = $(".popupbox");
		var width =document.body.clientWidth;//网页可见区域
		var height =document.body.clientHeight;//网页可见区域
		var _width = (width-box.width())/2;
		var _height = (height-box.height())/2;
		box.css({'left':_width,'top':_height});
	}*/

	/*var person ={};
	person.name="sonia";
	person.action = function() {
		alert(this.name);
	}
	person.action();*/

	/*var person ={
		name:"sonia",
		action : function() {
			alert(this.name);
		}
	};
	
	person.action();*/
})