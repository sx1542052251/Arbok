$(function() {
	setPage(document.querySelector(".page"), 6, 1);
	$(".left_list>a").click(function() {
		$(this).next(".lists").slideToggle(300);
	})
	$(".lists>a").click(function() {
		$(this).addClass("pcur").siblings().removeClass("pcur")
			.parent().siblings(".lists").children().removeClass("pcur");

		$(this).parent().prev().addClass("active").children("span")
			.addClass("active1").siblings().addClass("active2")
			.parent().siblings().removeClass("active").children("span")
			.removeClass("active1").siblings().removeClass("active2");
	})

	$(".lists:first a").click(function(){
		$(".con_right").hide().eq($(this).index()).show();
		$(".con_right1").hide();
		$(".con_right2").hide();
	})
	
	$(".lists:eq(1) a").click(function(){
		$(".con_right1").hide().eq($(this).index()).show();
		$(".con_right").hide();
		$(".con_right2").hide();
	})

	$(".lists:eq(2) a").click(function(){
		$(".con_right2").hide().eq($(this).index()).show();
		$(".con_right").hide();
		$(".con_right1").hide();
	})
});
