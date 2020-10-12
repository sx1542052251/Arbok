$(function(){
	$("#img>li").each(function() {
		var str = 'url(images/i' + $(this).index() + '.png) center center no-repeat';
		var str1 = 'url(images/j' + $(this).index() + '.png) #F73C3F center center no-repeat';
		$(this).css("background", str);
		$(this).hover(function() {
			$(this).css("background", str1);
		}, function() {
			$(this).css("background", str);
		})
		$(this).mouseenter(function() {
			$(this).children(".mes").stop(false, true).slideDown();
		})
		$(this).mouseleave(function() {
			$(this).children(".mes").stop(false, true).slideUp();
		})
	})
	var flag = 1;
	$(".mob-btn").click(function(){
		if(flag == 1){
			$(".mobnav").css("left","0");
			flag = 0;
			$(".line1").css({
				"transform":"rotate(405deg)",
				"top":"13px"
			});
			$(".line2").addClass("mopen").removeClass("centerhr");
			$(".line3").css({
				"transform":"rotate(-405deg)",
				"top":"13px"
			})
		}else if(flag == 0){
			$(".mobnav").css("left","-101%");
			flag = 1;
			$(".line1").css({
				"transform":"rotate(0)",
				"top":"0"
			});
			$(".line2").addClass("centerhr").removeClass("mopen");
			$(".line3").css({
				"transform":"rotate(0)",
				"top":"100%"
			})
		}
	})
})