 ////输入框获得焦点时
$("input").focus(function(event) {
    //label动态上升，升至顶部
    $(this).siblings("label").stop().animate({"bottom": "40px"}, 500);
    //div模拟的下边框伸出，其width动态改变至input的width
    $(this).next(".bottom-line").stop().animate({"width": "400px"}, 500);
});
////输入框失去焦点时
$("input").blur(function(event) {
    //label动态下降，恢复原位
    $(this).siblings("label").stop().animate({"bottom": "5px"}, 500);
    //用div模拟的下边框缩回，其width动态恢复为默认宽度0
    $(this).next(".bottom-line").stop().animate({"width": "0"}, 500);
});
$(document).ready(function(){
    $(".icon").hover(
		function(){
			$(".icon").css("margin-left","5px");
			$(".icon").css("margin-top","5px");
			$(".icon").height("40px");
			$(".icon").width("40px");
			$("#icon-right").css("-webkit-box-shadow","3px 3px 3px #888888");
		},
		function(){
			$(".icon").css("margin-left","10px");
			$(".icon").css("margin-top","10px") ;
			$(".icon").height("30px");
			$(".icon").width("30px");
			$("#icon-right").css("-webkit-box-shadow","-3px -3px 3px #888888");
		}
    )
});
