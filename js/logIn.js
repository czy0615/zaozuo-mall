$(function() {
	$("#nva1 .li11").hover(function() {
		// 获取下标index
		var index = $(this).index();
		// 显示对应的content
		$('#nva1 .li11').find('.tab1').eq(index - 1).stop().fadeIn();
	}, function() {
		$('#nva1 .li11').find('.tab1').stop().fadeOut();
	});

	/* 表单选项卡 */
	$(".logIn-ul li").click(function() {
		// 获取下标index
		var index = $(this).index();
		if (index == 0) {
			$('.logIn-ul .fast').css('color', '#000')
			$('.logIn-ul .psw').css('color', '#a0a0a0')

		} else {
			$('.logIn-ul .psw').css('color', '#000')
			$('.logIn-ul .fast').css('color', '#a0a0a0')
			$('.cot .cot2').css('display', 'block');
			$('.cot .cot1').css('display', 'none');
		}
		// 显示对应的content
		$(".cot .in-form").hide().eq(index).show();
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
	
	
	/* 第二个表单验证 */
	$(".password-tel").change(function() {
		//获取当前value
		var tel = $(this).val();
		//正则
		var reg = /^1[3456789]{1}\d{9}$/;
		var isValid = reg.test(tel);
		if (isValid) {
			$(this).css("border", "1px solid green");
			$('.warn-tel1').css('display', 'none')
		} else {
			$(this).css("border", "1px solid red");
			$('.warn-tel1').css('display', 'block')
		};
	});
	$(".password").change(function() {
		//获取当前value
		var tel = $(this).val();
		//正则
		var reg = /^[0-9]{6,18}$/;
		var isValid = reg.test(tel);
		if (isValid) {
			$(this).css("border", "1px solid green");
			$('.warn-psw').css('display', 'none')
		} else {
			$(this).css("border", "1px solid red");
			$('.warn-psw').css('display', 'block')
		};
	});
	var flagUser = false;
	var $myform = $('.input-text')
	$myform.blur(function() {
		// return false
		// 所有人都是打开的状态才允许提交
		if ($('.input-text')[0].value.length == 4) {
			$('.logIn-btn').css('background', 'black')
			flagUser = true;
		} else {
			// 条件不成立
			// alert('bu ok')
			return false
		}
	});
	var $mylogIn = $('.password');
	$mylogIn.blur(function() {
		// return false
		// 所有人都是打开的状态才允许提交
		if ($('.password')[0].value.length >= 6 && $('.password')[0].value.length <= 18) {
			$('.logIn-btn1').css('background', 'black')
			flagUser = true;
		} else {
			// 条件不成立
			// alert('bu ok')
			return false
		}
	});
	$(".logIn-btn1").click(function(){
		location.href = "index.html";
	});


});
