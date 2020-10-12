$(function(){
	$(".con_right:not(':first')").hide();
	$(".left_list>a").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(this).children("span")
		.addClass("active1")
		.parent()
		.siblings()
		.children("span")
		.removeClass("active1");
		
		$(this).children("p")
		.addClass("active2")
		.parent()
		.siblings()
		.children("p")
		.removeClass("active2");
		
		$(".con_right").hide().eq($(this).index()).show();
	})
	
})