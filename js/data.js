$("#nva1 .li11").hover(function() {
	// 获取下标index
	var index = $(this).index();
	// 显示对应的content
	$('#nva1 .li11').find('.tab1').eq(index - 1).stop().fadeIn();
}, function() {
	$('#nva1 .li11').find('.tab1').stop().fadeOut();
});
