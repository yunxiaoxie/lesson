$(function() {
	var i =1;
	//单击添加
	$(".add").on('click',function() {
		//let str = '<li class="list-group-item list"><span class="badge delbtn">删除</span><input type="checkbox"/>'+i+'</li>';
		let str = `<li class="list-group-item list"><span class="badge delbtn">删除</span><input type="checkbox"/>第${i}项</li>`;
		$(".rows").append(str);
		i++;
		//callback();
	})
	//删除
	$(".del").on('click',function() {
		var  rows = $(".rows input");
		rows.each(function(index,item){
			if($(item).prop("checked")){
				$(item).parent().remove();
			}
		})
	})
	//当前删除的对象
	$(".rows").on("mouseover mouseout",".list",function(event) {
		if(event.type=='mouseover'){
			$(this).find(".delbtn").show();
		}else {
			$(this).find(".delbtn").hide();
		}
	});
	$(".rows").on("click",".list .delbtn",function() {
		$(this).parent().remove();
	})
	/*function callback() {
		$(".rows .list").hover(function() {
			$(this).find(".delbtn").show();
		},function() {
			$(this).find(".delbtn").hide();
		});
		$(".rows .delbtn").on("click",function() {
			$(this).parent().remove();
		})
	}*/
	
})