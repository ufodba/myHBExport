$(function(){
	//背景
	var heifht=$(window).height();
	var top=Math.floor((heifht-80)/2)+'px';
	$('#warp').height(heifht);
	$('.left').css('top',top);
	$('.right').css('top',top);
	
	$('body').mousemove(function(){
		if(event.pageX<170 || event.pageX>1195){
			$('.left').css('display','block');
			$('.right').css('display','block');
		}
		if(event.pageX>170 && event.pageX<1195){
			$('.left').css('display','none');
			$('.right').css('display','none');
		}
	});
});