$("#nva1 .li11").hover(function() {
		// 获取下标index
		var index = $(this).index();
		// 显示对应的content
		$('#nva1 .li11').find('.tab1').eq(index - 1).stop().fadeIn();
	}, function() {
		$('#nva1 .li11').find('.tab1').stop().fadeOut();
	});
	
	$(window).scroll(function() {
		//滚动距离scrollTop
		var scrollToop = $(document).scrollTop();
		if (scrollToop > 500) {
			$('.icon-nva-top').css('display', 'block')
		} else {
			$('.icon-nva-top').css('display', 'none')
		}
	});
	$('.icon-nva-top').click(function() {
		$("html,body").animate({scrollTop:0}, 1000);
	});