$(function() {


	$("#nva1 .li11").hover(function() {
		// 获取下标index
		var index = $(this).index();
		// 显示对应的content
		$('#nva1 .li11').find('.tab1').eq(index - 1).stop().fadeIn();
	}, function() {
		$('#nva1 .li11').find('.tab1').stop().fadeOut();
	});


	var cartList = [{
			proId: 11,
			msg: '美术馆餐桌1.6米',
			msg1: '灰绿',
			count: 1,
			totalPrice: 4999,
			img: 'productDetails/002.jpg'
		},
		{
			proId: 12,
			msg: '美术馆餐桌1.6米',
			msg1: '脂灰',
			count: 1,
			totalPrice: 4999,
			img: 'productDetails/001.jpg'
		}
	]

	cartList.map(function(item1) {
		$(
			`<div class="goodsList">
							<div class="listRadio">
								<input type="checkbox" value="" class="cartListCheck">
							</div>
							<div class="goodsInfo">
								<div class="listImg">
									<img src="./img/${item1.img}">
								</div>
								<div class="" id="goodsInfoP">
									<p>${item1.msg}</p>
									<p>${item1.msg1}</p>
								</div>
							</div>
							<div class="cart-class">
								<p>预计2020-11-17前发货</p>
							</div>
							<div class="price">
							<span class='money'>￥</span>
								<span id="price" class="cartListAllPrice">${item1.totalPrice}</span>
								<div class="price-btn">
									<button class="button cartListCountRe" type="button">-</button>
									<input type="text" value="${item1.count}" class="cartListCountVal">
									<button class="button cartListCountAdd" type="button">+</button>
								</div>
								<span class="add">修改</span>
								<span class="move cartListModify">删除</span>
							</div>
						</div>`
		).appendTo($('.item'));
	});


	// 声明变量作为购物车选中的数组	
	var goodsSelect = []
	var count = 0;
	//单个商品的复选框点击事件
	console.log($('.cartListCheck'));

	$('.cartListCheck').click(function() {
		//可以获取当前元素在class的index
		var index = $('.cartListCheck').index(this);
		// console.log(index);
		// console.log(this)

		if (this.checked) {
			count++;
			goodsSelect.push(cartList[index])
		} else {
			count--;
			var i = goodsSelect.indexOf(cartList[index]);
			goodsSelect.splice(i, 1);
		}
		//当全选泽时，全选框的状态改为true

		if (count == cartList.length) {
			$('#cartListAllSel')[0].checked = true;
		} else {
			$('#cartListAllSel')[0].checked = false;
		}
		/* console.log($('#cartListAllSel')[0].checked); */
		//改变总价结算的方法
		changeTotalPrice();
	});
	//全选的复选框点击事件
	$('#cartListAllSel').click(function() {
		console.log(this.checked)
		if (this.checked) {
			// $('.cartListCheck').attr('checked', true);
			$('.cartListCheck').prop('checked', true);
			goodsSelect = cartList;
		} else {
			// $('.cartListCheck').attr('checked', false);
			$('.cartListCheck').prop('checked', false);
			goodsSelect = [];
		}
		changeTotalPrice();
	});
	//把选中的购物车里面的单价和数量算出总价
	function changeTotalPrice() {
		var total = 0;
		for (var i = 0; i < goodsSelect.length; i++) {
			total += goodsSelect[i].totalPrice;
		}
		$('.goodsPrice').html(total);
	};

	//- 的点击事件
	$('.cartListCountRe').click(function() {
		//通过index传this下标得到this为第几个class
		var index = $('.cartListCountRe').index(this);
		cartList[index].count--;
		//不操作数组，直接dom操作，从dom获取数据
		if (cartList[index].count < 0) {
			cartList[index].count = 0
		}
		$('.cartListCountVal').eq(index).val(cartList[index].count);
		OneGoodsPrice(index);
		changeTotalPrice();
	});

	//+ 的点击事件
	$('.cartListCountAdd').click(function() {
		//通过index传this下标得到this为第几个class
		var index = $('.cartListCountAdd').index(this);
		cartList[index].count++;
		//如果有最大库存就判断
		// if( cartList[index].count <= 0 ){
		// 	cartList[index].count = 0;
		// }
		$('.cartListCountVal').eq(index).val(cartList[index].count);
		OneGoodsPrice(index);
		changeTotalPrice();
	});


	//点击删除按键
	$('.cartListModify').click(function() {
		var index = $('.cartListModify').index(this);
		//js remove（）
		$('.goodsList')[index].remove();
		var i = goodsSelect.indexOf(cartList[index]);
		goodsSelect.splice(i, 1);
		cartList.splice(index, 1);
		changeTotalPrice();
	});
	//单个商品的总价
	function OneGoodsPrice(index) {
		cartList[index].totalPrice = cartList[index].count * 4999;
		$('.cartListAllPrice').eq(index).html(cartList[index].totalPrice);
	}
	$(".checkBtn").click(function() {
		location.href = "address.html";
	});
});
