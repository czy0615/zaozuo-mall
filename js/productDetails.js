$("#nva1 .li11").hover(function() {
	// 获取下标index
	var index = $(this).index();
	// 显示对应的content
	$('#nva1 .li11').find('.tab1').eq(index - 1).stop().fadeIn();
}, function() {
	$('#nva1 .li11').find('.tab1').stop().fadeOut();
});


$(".box-item .text-box .text-box-border").click(function() {

	// 获取下标index
	var index = $(this).index();
	$('.text-box-border').css('borderColor', '#000');
	$('.text-box-border').eq(index - 1).css('borderColor', '');
	// 显示对应的content
	$(".box-item .item-img img").hide().eq(index).show();
});


//+点击事件
$('#plus').click(function() {
	var val = $('#figure').val();
	if (val < 10) {
		//解决字符串与数字运算
		$('#figure').val(val - 1 + 2);
		$('#textPrice').text('￥' + '4999' * (val - 1 + 2));
	}
});
//-点击事件
$('#minus').click(function() {
	var val = $('#figure').val();
	if (val > 1) {
		//解决字符串与数字运算
		$('#figure').val(val - 1);
		$('#textPrice').text('￥' + '4999' * (val - 1));
	}
});

//加入购物车成功
$('.text-btn-rgt').click(function() {
	$('#toCartSuc').stop().fadeIn(2000, function() {
		$('#toCartSuc').stop().fadeOut();
		location.href = "cartList.html";
	});
	
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
$("html,body").animate({ scrollTop: 0 }, 1000);
});

