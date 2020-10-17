function setPage(container, count, pageindex) {
	var container = container;
	var count = count;
	var pageindex = pageindex;
	var a = [];
	//总页数少于10 全部显示,大于10 显示前3 后3 中间3 其余....
	if (pageindex == 1) {
		a[a.length] = "<a href=\"#\" class=\"prev unclick\">上一页</a>";
	} else {
		a[a.length] = "<a href=\"#\" class=\"prev\">上一页</a>";
	}

	function setPageList() {
		if (pageindex == i) {
			a[a.length] = "<a href=\"#\" class=\"on\">" + i + "</a>";
		} else {
			a[a.length] = "<a href=\"#\">" + i + "</a>";
		}
	}
	//总页数小于10
	if (count <= 10) {
		for (var i = 1; i <= count; i++) {
			setPageList();
		}
	}
	//总页数大于10页
	// else {
	// 	if (pageindex <= 4) {
	// 		for (var i = 1; i <= 5; i++) {
	// 			setPageList();
	// 		}
	// 		a[a.length] = "...<a href=\"#\">" + count + "</a>";
	// 	} else if (pageindex >= count - 3) {
	// 		a[a.length] = "<a href=\"#\">1</a>...";
	// 		for (var i = count - 4; i <= count; i++) {
	// 			setPageList();
	// 		}
	// 	} else { //当前页在中间部分
	// 		a[a.length] = "<a href=\"#\">1</a>...";
	// 		for (var i = pageindex - 2; i <= pageindex + 2; i++) {
	// 			setPageList();
	// 		}
	// 		a[a.length] = "...<a href=\"#\">" + count + "</a>";
	// 	}
	// }
	if (pageindex == count) {
		a[a.length] = "<a href=\"#\" class=\"next unclick\">下一页</a>";
	} else {
		a[a.length] = "<a href=\"#\" class=\"next\">下一页</a>";
	}
	container.innerHTML = a.join("");
	//事件点击
	var pageClick = function() {
		var oAlink = container.getElementsByTagName("a");
		var inx = pageindex; //初始的页码
		oAlink[0].onclick = function() { //点击上一页
			if (inx == 1) {
				return false;
			}else{
				inx--;
				setPage(container, count, inx);
				$(".news_left1").html("");
				$.getJSON("data/news1.json", function(data) {
					for (var j = 0; j < data.length; j++) {
						var item = data[j];
						if (inx == j + 1) {
							for (var k = 0; k < item.length; k++) {
								var itemContent = item[k];
								var newsLists =
									`
								<div class="clearfix">
									<div class="rimg pleft">
										<a href="#"><img src="${itemContent.images}" alt=""></a>
									</div>
									<div class="rnr pleft">
										<a href="#">
											<h3>
												${itemContent.title}
											</h3>
										</a>
										<p>
											${itemContent.news}
										</p>
									</div>
								</div>
								`;
								$(".news_left1").append(newsLists);
							}
						}
					}
				})
				// return false;
			}
			
			
		}
		for (var i = 1; i < oAlink.length - 1; i++) { //点击页码
			oAlink[i].onclick = function() {
				inx = parseInt(this.innerHTML);
				$(".news_left1").html("");
				$.getJSON("data/news1.json", function(data) {
					for (var j = 0; j < data.length; j++) {
						var item = data[j];
						if (inx == j + 1) {
							for (var k = 0; k < item.length; k++) {
								var itemContent = item[k];
								var newsLists =
									`
								<div class="clearfix">
									<div class="rimg pleft">
										<a href="#"><img src="${itemContent.images}" alt=""></a>
									</div>
									<div class="rnr pleft">
										<a href="#">
											<h3>
												${itemContent.title}
											</h3>
										</a>
										<p>
											${itemContent.news}
										</p>
									</div>
								</div>
								`;
								$(".news_left1").append(newsLists);
							}
						}
					}
				})

				setPage(container, count, inx);
				return false;
			}
		}
		oAlink[oAlink.length - 1].onclick = function() { //点击下一页
			if (inx == count) {
				return false;
			}else{
				inx++;
				setPage(container, count, inx);
				$(".news_left1").html("");
				$.getJSON("data/news1.json", function(data) {
					for (var j = 0; j < data.length; j++) {
						var item = data[j];
						if (inx == j + 1) {
							for (var k = 0; k < item.length; k++) {
								var itemContent = item[k];
								var newsLists =
									`
								<div class="clearfix">
									<div class="rimg pleft">
										<a href="#"><img src="${itemContent.images}" alt=""></a>
									</div>
									<div class="rnr pleft">
										<a href="#">
											<h3>
												${itemContent.title}
											</h3>
										</a>
										<p>
											${itemContent.news}
										</p>
									</div>
								</div>
								`;
								$(".news_left1").append(newsLists);
							}
						}
					}
				})
				// return false;
			}
			
			
		}
	}()
}
