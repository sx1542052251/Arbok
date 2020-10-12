$(function() {
	// $(".section .wrap:not(':first')").hide();
	$.getJSON("data/data.json",function(data){
		var newsLi = "";
		$.each(data,function(k,v){
			newsLi +=`
			<li class="clearfix">
				<div class="l_img pleft">
					<a href="#">
						<img src="${v.images}" width="100%" height="100%"/>
					</a>
				</div>
				<div class="pleft rnr">
					<a href="#"><h3>${v.title}</h3></a>
					<p>${v.news}</p>
				</div>
			</li>
			`
		})
		$(".news_article ul").html(newsLi);
	})
	//page1

	//page2
	$(".procon:not(':first')").hide();
	$(".protxt").css("opacity","0");
	$(".pro-head a:first").addClass("pro-head-active");
	$(".proimg").each(function() {
		$(this).hover(function() {
			$(this).children(".protxt").css({
				"opacity":"1",
				"transition":".3s"
			});
		}, function() {
			$(this).children(".protxt").css("opacity", "0");
		})
	})
	$(".pro-head a").click(function(){
		$(this).addClass("pro-head-active").siblings().removeClass("pro-head-active");
		$(".procon").hide().eq($(this).index()).show();
	})
	
	//page3
	$(".serv-right div").each(function(){
		$(this).hover(function(){
			$(this).children(".ball").children("span").css({
				"transform":"scale(0)",
				"transition":".3s"
			});
		},function(){
			$(this).children(".ball").children("span").css({
				"transform":"scale(1)",
				"transition":".3s"
			});
		})
	})
	$(".ding").each(function(){
		$(this).hover(function(){
			$(this).siblings().children().css("opacity","1");
			$(this).children("img").animate({
				top:"-15px"
			},100).animate({
				top:"0"
			},100).animate({
				top:"-10px"
			},100).animate({
				top:"0"
			},100)
		},function(){
			$(this).siblings().children().css("opacity","0");
		})
	})
	
	//page4
	
})
