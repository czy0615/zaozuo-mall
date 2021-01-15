$(function(){
	$("#nva1 .li11").hover(function() {
		// 获取下标index
		var index = $(this).index();
		// 显示对应的content
		$('#nva1 .li11').find('.tab1').eq(index - 1).stop().fadeIn();
	}, function() {
		$('#nva1 .li11').find('.tab1').stop().fadeOut();
	});
	
	
	
	/* 表单验证 */
	$(".input-tel").change(function() {
		var username = $(this).val();
		var reg = /^1[3|4|5|7|8][0-9]{9}$/;
		var isValid = reg.test(username);
		if (isValid) {
			$(this).css("border", "1px solid green");
			$('.warn-tel').css('display', 'none')
			$('.auth-code').css('backgroundColor', 'black');
			$('.auth-code').hover(function() {
				$('.auth-code').css('cursor', 'pointer')
			})
			$('.auth-code').click(function() {
				$('.auth-code').css('cursor', '')
				$(this).css('backgroundColor', '#d2d2d2')
			});
		} else {
			$(this).css("border", "1px solid red");
			$('.warn-tel').css('display', 'block')
	
		};
	});
	$(".input-text").change(function() {
		//获取当前value
		var password = $(this).val();
		//正则
		var reg = /[0-9]{4}/;
		var isValid = reg.test(password);
		if (isValid) {
			$(this).css("border", "1px solid green");
			$('.warn-txt').css('display', 'none')
		} else {
			$(this).css("border", "1px solid red");
			$('.warn-txt').css('display', 'block')
		};
	});
	
	var flagUser = false;
	var $myform = $('.input-text')
	$myform.blur(function() {
		// return false
		// 所有人都是打开的状态才允许提交
		if ($('.input-text')[0].value.length == 4) {
			$('.logIn-btn').css('background','black')
			flagUser = true;
		} else {
			// 条件不成立
			// alert('bu ok')
			return false
		}
	});
});