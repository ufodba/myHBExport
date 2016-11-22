$(function(){
	var hover={background: '#558900'};
	var bgColor={background: 'green'};
//	var clickColor={background: '#005600'}
	var nav=$('#headerBtm ul li,#headerTopR div ');
	//点击改变颜色
//	nav.click(function(){
//		nav.removeAttr('style');
//		$(this).css(clickColor);
//	});
	//滑动改变颜色
	nav.mousemove(function(){
		$(this).css(hover);
	});
	nav.mouseout(function(){
		$(this).css(bgColor);
	});
	//后台获取导航名称
	$('#getNav').click(function(){
		$.post('my_php.php',{
			action: 'getTxt'
		},function(data,status){
			if('success' == status){
				var js=JSON.parse(data);
				console.log(js);
				for(var i in js){
//					var now=parseInt(i.substring(3));
					$('#headerBtm ul li[id='+i+']').html(js[i]);
				}
			}
		});
	});
	//后台获取颜色方案
	$('#getTopBg').click(function(){
		$.post('my_php.php',{
			action: 'getHeader'
		},function(data,status){
			if('success' == status){
				var js=JSON.parse(data);
				console.log(js);
				$('#header').css('background-color',js.background1);
				$('#headerChechR').css('background-color',js.background2);
				$('#headerBtm').css('border-color',js.background3);
//				$('.navLi1 ').css('background-color',js.background4);
				bgColor={background: js.background1};
				hover={background: js.background5};
				nav.css(bgColor);
			}
		});
	});
	//后台获取图片链接
	$('#getGuangGao').click(function(){
		$.post('my_php.php',{
			action: 'getGuangGao'
		},function(data,status){
			if('success' == status){
				var js=JSON.parse(data);
				console.log(js);
				$('#guagngao').attr('src',js.guanggao1);
			}
		});
	});
});