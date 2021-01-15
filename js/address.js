$("#nva1 .li11").hover(function() {
		// 获取下标index
		var index = $(this).index();
		// 显示对应的content
		$('#nva1 .li11').find('.tab1').eq(index - 1).stop().fadeIn();
	}, function() {
		$('#nva1 .li11').find('.tab1').stop().fadeOut();
	});
	var province = "{$user.location.0}";
	var city = "{$user.location.1}";
	var area = "{$user.location.2}";
	new PCAS("province4", "city4", "area4");

$('#clickAdd').click(function(){
	$('#address_main').fadeIn(500);
});
$('#address_content i').click(function(){
	$('#address_main').fadeOut(500);
});

//收货地址不能为空
var oInputAddress;
var textYes = false;
$('.addressText').blur(function(){
	if($('.addressText')[0].value.length == false){
		$('.addressText').css('border','1px solid red');
	} else{
		$('.addressText').css('border','1px solid green');
		oInputAddress = $('.addressText')[0].value;
		textYes = true;
	}
});
//收货人不能为空
var oInputPerson;
var personYes = false;
$('.addressPerson').blur(function(){
	if($('.addressPerson')[0].value.length == false){
		$('.addressPerson').css('border','1px solid red');
	} else{
		$('.addressPerson').css('border','1px solid green');
		oInputPerson = $('.addressPerson')[0].value;
		personYes = true;
	}
});

//判断手机号
var tel = /^1\d{10}$/;
var oInputPhone;
var telYes = false;
$('.addressTel').blur(function(){
	if($('.addressTel')[0].value.length == 0){
		$('.addressTel').css('border','1px solid red');
	} else if(tel.test($('.addressTel')[0].value)){
		oInputPhone = $('.addressTel')[0].value;
		$('.addressTel').css('border','1px solid green');
		telYes = true;
	} else {
		$('.addressTel').css('border','1px solid red');
	}
});
//点击添加收货地址
var addressDataarr = [];
var addressOc = {};
$('.adds').click(function(){
	if(textYes && personYes && telYes){
		addressOc = {
			oInputPerson,
			oInputPhone,
			oInputAddress
		}
		addressDataarr.push(addressOc);
		for(var j = addressDataarr.length - 1; j < addressDataarr.length; j++){
			$(`
		<div class="addItem" id="clickAdd">
			<div class="addT">
				<p class="p1">
					<span>${addressDataarr[j].oInputPerson}</span>
					<span>${addressDataarr[j].oInputPhone}</span>
				</p>
				<p>
					<span>山东&nbsp;青岛&nbsp;城阳区</span>
				</p>
				<p>
					<span>${addressDataarr[j].oInputAddress}</span>
				</p>
			</div>
			<div class="icons">
				<img src="img/add/ia_10001.png">
				<div class="as">
					<i class="fa fa-trash fa-2x" aria-hidden="true" id="removeAdd"></i>
					<i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
				</div>
			</div>
		</div>
			`).insertBefore('#clickAdd');
		}
		//点击确认清空并关闭
		$('.addressText')[0].value = '';
		$('.addressPerson')[0].value = '';
		$('.addressTel')[0].value = '';
		$('#address_main').fadeOut(500);
	}
	$('.fa-trash').click(function(){
	$(this).parent().parent().parent().remove();
	});
});

$('.fa-trash').click(function(){
$(this).parent().parent().parent().remove();
});
//页面跳转到支付页
$('.payBtn').click(function(){
	window.location.href="./pay.html"
});
