/*
//@@jq
$(function() {
	$(".i_item").hide();
	//展开当前且+-变更，默认第一个显示
	$(".m_item").find(".i_item").eq(0).show();
	$(".item_title").find("b").not(":eq(0)").text("+");
	$(".item_title").click(function() {
		$(".i_item").slideUp();//隐藏所有
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
*/

//@@js
function hideAll() {
    let items = document.querySelectorAll(".i_item");
    items.forEach(function(e){
        e.style.display = 'none';
    });
}

//复位+号
function resetStatus(itemTitles, targetTitle) {
    itemTitles.forEach(function(item, i){
        //1==>title, 0==>+-
        if (item.children[1].innerHTML !== targetTitle) {
            item.children[0].innerHTML = '+';
        }
    })
}

function dirTree () {
    hideAll();
    
    let mitem = document.querySelector(".m_item");
    //get ul
    mitem.children[1].style.display = 'block';
    
    //set +
    let itemTitles = document.querySelectorAll(".item_title");
    itemTitles.forEach(function(item, i){
        if (i > 0) {
           item.children[0].innerHTML = '+';
        }
    });
    
    //event
    itemTitles.forEach(function(item, i){
        item.onclick = function(e){
            //hideAll(); //立即隐藏所有
            resetStatus(itemTitles, e.currentTarget.children[1].innerHTML);
            if (e.currentTarget.nextElementSibling.style.display == 'block') {
                //e.currentTarget.nextElementSibling.style.display = 'none';
                e.currentTarget.children[0].innerHTML = '+';
                slideUp(e.currentTarget.nextElementSibling, 500);
            } else {
                //e.currentTarget.nextElementSibling.style.display = 'block';
                e.currentTarget.children[0].innerHTML = '-';
                slideDown(e.currentTarget.nextElementSibling, 500);
            }
        }
    });
}

//缓慢隐藏
function slideUp(element, time) {
    // 获取元素总高度
    var totalHeight = element.offsetHeight;
    // 定义一个变量保存元素当前高度
    var currentHeight = totalHeight;
    // 计算每次减去的值
    var decrement = totalHeight/ (time/10);
    // 开始循环定时器
    var timer = setInterval(function() {
        // 减去当前高度的一部分
        currentHeight = currentHeight - decrement;
        // 把当前高度赋值给height属性
        element.style.height = currentHeight + "px";
        // 如果当前高度小于等于0，就关闭定时器
        if (currentHeight <= 0) {
            // 关闭定时器
            clearInterval(timer);
            // 把元素display设置为none
            element.style.display = "none";
            // 把元素高度值还原
            element.style.height = totalHeight + "px";
        }
    }, 10);
}
//缓慢展开
function slideDown(element, time) {
    // 获取元素总高度
    element.style.display = "block";            // 1.显示元素，元素变为可见
    var totalHeight = element.offsetHeight;     // 2.保存总高度
    element.style.height = "0px";               // 3.再将元素高度设置为0，元素又变为不可见
    // 定义一个变量保存元素当前高度
    var currentHeight = 0;                      // 当前元素高度为0
    // 计算每次增加的值
    var increment = totalHeight / (time/10);
    // 开始循环定时器
    var timer = setInterval(function () {
        // 增加一部分高度
        currentHeight = currentHeight + increment;
        // 把当前高度赋值给height属性
        element.style.height = currentHeight + "px";
        // 如果当前高度大于或等于总高度则关闭定时器
        if (currentHeight >= totalHeight) {
            // 关闭定时器
            clearInterval(timer);
            // 把高度设置为总高度
            element.style.height = totalHeight + "px";
        }
    }, 10);
}

window.onload = dirTree;