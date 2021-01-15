$(function(){
	//header_top_left顶部导航左边划过出现下划线
	$('#header_top_left ul li a').mouseover(function() {
		$(this).css('border-bottom', '1px solid #fff');
	});
	$('#header_top_left ul li a').mouseout(function() {
		$(this).css('border-bottom', 'none');
		// $('#header_top_left ul li #a1').css('border-bottom', '1px solid #fff');
	});
	
	//header_top_right顶部右边导航划过出现下划线
	$('#header_top_right ul li .aa').mouseover(function() {
		$(this).css('border-bottom', '1px solid #fff');
		$(this).siblings().css('border', 'none');
	});
	$('#header_top_right ul li .aa').mouseout(function() {
		$(this).css('border-bottom', 'none');
	});
	
	//header_top顶部导航划过出现子导航
	$('#header_top_left ul li').hover(function() {
		$('#header_topA .subnav_top').eq($(this).index() - 1).stop().fadeIn().css('display', 'block');
		$('#header_topA .subnav_top').eq($(this).index() - 1).stop().fadeIn().siblings().css('display', 'none');
		$('#header_topA .subnav_top').eq($(this).index() - 1).hover(function() {
			$(this).css('display', 'block');
		}, function() {
			$(this).css('display', 'none');
		})
	}, function() {
		$('#header_topA .subnav_top').eq($(this).index() - 1).stop().fadeIn().css('display', 'none');
	});
	$('#header_top_left ul li').eq(0).mouseover(function() {
		$('#header_topA .subnav_top').eq($(this).index() - 1).css('display', 'none');
	});
	$('#header_topA .subnav_top ul li a').hover(function() {
		$(this).css('color', '#fff');
	}, function() {
		$(this).css('color', '#a0a0a0');
	})
	
	//侧边栏滑动弹出
	$(window).scroll(function() {
		var moveHeight2 = $(this).scrollTop();
		if (moveHeight2 > 771) {
			$('#sdb_4').css('display', 'block');
		} else {
			$('#sdb_4').css('display', 'none');
		}
	})
	
	//侧边栏点击回顶部
	$('#sidebar #sdb_4').click(function(){
		$('html,body').animate({scrollTop:0},1000);
	});
	
	// 支付方式
	$('.pay_input').click(function(){
		$(this).prop('checked',true);
		$(this).parent().siblings().find('.pay_input').prop('checked',false);
		// console.log(111);
	})
	$('#pay_input1').click(function(){
		$('#pay_zhifubao').css('display','block');
		$('#pay_wechat').css('display','none');
		$('#pay_way_huabei div').css('border','#d2d2d2 1px solid');
	})
	$('#pay_input2').click(function(){
		$('#pay_zhifubao').css('display','none');
		$('#pay_wechat').css('display','block');
		$('#pay_way_huabei div').css('border','#d2d2d2 1px solid');
	})
	$('#pay_input3').click(function(){
		$('#pay_zhifubao').css('display','block');
		$('#pay_wechat').css('display','none');
		$('#pay_way_huabei_1').css('border','#000 1px solid');
		
	})
	$('#pay_way_huabei div').click(function(){
		$('#pay_zhifubao').css('display','block');
		$('#pay_wechat').css('display','none');
		$(this).css('border','#000 1px solid');
		$(this).siblings().css('border','#d2d2d2 1px solid');
		$('#pay_input3').prop('checked',true);
		$('#pay_input3').parent().siblings().find('.pay_input').prop('checked',false);
	})
	
	// 支付成功跳转
	$('#pay_zhifubao .sure').click(function(){
		location.assign('success.html');
	})
})