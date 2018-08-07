//未完成版本 部分jq完成（思考中。。）
window.onload()=function{
	let i = 0;
	var time;
	$(function ()
	{
		//找到第一个对象，让它显示，它的兄弟元素隐藏
		$(".picture").eq(0).fadeIn(300).siblings().fadeOut(300);
		showTime();
		//当鼠标放到下标上显示该图片，鼠标移走继续轮播
		$(".tab").hover(
			function ()
			{
				//获取到当前鼠标所在的下标的索引
				i = $(this).index();
				show();
				//清除轮播
				clearInterval(time);
			}, function ()
			{
				showTime();
		    }
		);
		//左右切换
		$("#btn-left").click(function ()
			{
				//停止轮播
				clearInterval(time);
				//点了之后，4
				if (i == 0)
				{
					i = 4;
				}
				i--;
				show();
				showTime();
			});
		$("#btn-right").click(function () {
			//停止轮播
			clearInterval(time);
			//点了之后，-1
			if (i == 3) {
				i = -1;
			}
			i++;
			show();
			showTime();
		});
	});
	function show() {
		//fadeIn(300)淡入，fadeout(300)淡出，过滤时间0.3s
		$(".picture").eq(i).fadeIn(300).siblings().fadeOut(300);
		$(".tab").eq(i).addClass("active").siblings().removeClass("active");
	}
	function showTime()
	{
		time = setInterval(function () {
			i++;
			if (i == 3) {
				i = 0;
			}
			show();
		}, 2000);
	}

}