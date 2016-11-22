$(function(){

	
	//点击左右两侧跳转上下页面
	$('body').click(function(){
		if(event.pageX<170){
			window.location.href='p2.html';
		}
		if(event.pageX>1195){
			window.location.href='p3.html';
		}
	});
	
	//按空格键或回车键跳转到下一页
	$(document).keypress(function(ev){
		console.log(ev.keyCode);
		if(ev.keyCode==32 || ev.keyCode==13){
			window.location.href='p3.html';
		}
	});
	
	$('.content1').fadeIn(1000);
	$('.content2').fadeIn(2500);
	$('.content3').slideDown(3000);
});
