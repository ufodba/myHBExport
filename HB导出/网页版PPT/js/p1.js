$(function(){
	var images=$('.url~img');
	var falg=0;
	var timer=null;
	
	//点击左右两侧跳转上下页面
	$('body').click(function(){
		if(event.pageX<170){
			window.location.href='index.html';
		}
		if(event.pageX>1195){
			window.location.href='webPPT/p2.html';
		}
	});
	
	//按空格键或回车键跳转到下一页
	$(document).keypress(function(ev){
		console.log(ev.keyCode);
		if(ev.keyCode==32 || ev.keyCode==13){
			window.location.href='webPPT/p2.html';
		}
	});
	
	//自动动画
	autoMove();
	
	//手动点击图片动画
	images.click(function(){
		clearInterval(timer);
		falg=$(this).css('left')
		if($(this).css('left')!='360px'){
			$(this).animate({
				width: '18em',
				height: '18em',
				top: '180px',
				left: '360px'
			},400,function(){
				$(this).addClass('disabled');
			});
		}
		images.each(function(){
			if($(this).css('left')=='360px'){
				$(this).animate({
					width: '10em',
					height: '10em',
					top: '200px',
					left: falg
				},400,function(){
				$(this).removeClass('disabled');
			});
			}
		});
	});

	
	function autoMove(){
		var arr=['744px','100px','744px','100px','744px','100px'];
		timer=setInterval(function(){
			var ra=Math.floor(Math.random()*6);
			var ran=arr[ra];
			images.each(function(){
				if($(this).css('left')=='360px'){
					$(this).animate({
						width: '10em',
						height: '10em',
						top: '200px',
						left: ran
					},400,function(){
					$(this).removeClass('disabled');
				});
				}
				if($(this).css('left')==ran){
					$(this).animate({
						width: '18em',
						height: '18em',
						top: '180px',
						left: '360px'
					},400,function(){
						$(this).addClass('disabled');
					});
				}
			});
		},1000);
	}
	
		
	
});
