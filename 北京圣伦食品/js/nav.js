$(".mes a").click(function() {
	sessionStorage.setItem("navTitle", $(this).html());

})
$(".pleft>a").click(function() {
	sessionStorage.setItem("navTitle", $(this).html());

})

function navFun() {
	var lastname = sessionStorage.getItem("navTitle");
	var navTitle = document.querySelectorAll(".left_list a p");
	for (var i = 0; i < navTitle.length; i++) {
		var item = navTitle[i];

		$(navTitle).removeClass("active2").siblings().removeClass("active1").parent().removeClass("active");
		if (item.innerHTML == lastname) {

			$(".con_right").css({
				display: "none"
			})
			$(item).addClass("active2").siblings().addClass("active1").parent().addClass("active");
			$(".con_right").eq(i).css({
				display: "block"
			})
			return;

		} else {
			$(navTitle[0]).addClass("active2").siblings().addClass("active1").parent().addClass("active");
		}
	}
}
navFun();
