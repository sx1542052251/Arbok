$(function() {
	$(".ns:not(':first')>div").hide();
	$(".ns>p").click(function() {
		$(this).siblings().slideDown(500)
			.parent()
			.siblings()
			.children("div")
			.slideUp(500);
		$(this).children().removeClass("rot")
			.parent()
			.parent()
			.siblings()
			.children("p")
			.children()
			.addClass("rot");
	})

	//留言板
	var $re1 = /[\u4e00-\u9fa5]/, //姓名正则
		$re2 = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, //邮箱正则
		$re3 = /^([1]\d{10}|([\(（]?0[0-9]{2,3}[）\)]?[-]?)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?)$/; //电话正则

	$(".x1 :text").blur(function() {
		if ($(this).val() == "") {
			$(".x1 span").text("姓名不能为空!");
		} else if (!$(this).val().match($re1)) {
			$(".x1 span").text("请输入汉字!");
		} else {
			$(".x1 span").text("正确!");
		}
	})

	$(".x2 :text").blur(function() {
		if ($(this).val() == "") {
			$(".x2 span").text("邮箱不能为空!");
		} else if (!$(this).val().match($re2)) {
			$(".x2 span").text("邮箱格式不正确！");
		} else {
			$(".x2 span").text("正确!");
		}
	})
	
	$(".x3 :text").blur(function() {
		if ($(this).val() == "") {
			$(".x3 span").text("号码不能为空!");
		} else if (!$(this).val().match($re3)) {
			$(".x3 span").text("手机号码格式不正确！");
		} else {
			$(".x3 span").text("正确!");
		}
	})
	
	$(".x4 :text").blur(function(){
		if ($(this).val() == "") {
			$(".x4 span").text("标题不能为空!");
		}else{
			$(".x4 span").text("正确!");
		}
	})
	
	$(".x5 textarea").blur(function(){
		if ($(this).val() == "") {
			$(".x5 span").text("内容不能为空!");
		}else{
			$(".x5 span").text("正确!");
		}
	})
	
	$(".x6 :button").click(function(){
		if($(".x1 :text").val().match($re1) && $(".x2 :text").val().match($re2)
		&& $(".x3 :text").val().match($re3) && $(".x4 :text").val() !== "" && $(".x5 :text").val() !== ""){
			alert("反馈成功，我们会尽早回复您")		
		}
	})

})
