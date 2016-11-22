$(function(){
	
	//图片轮播
	(function(){
		var showImg = $('#fade ul li');
		var btnImg = $('#fade ol li');
		var arrData = ['爸爸去哪儿啦~','可爱型美女','性感型美女'];
		
		moveImg(0);
		btnImg.on('click',function(){
			 moveImg($(this).index());
		});
		var numNow=0;
		var timer1=null;
		function autoMonveImg(){
			timer1=setInterval(function(){
				numNow++;
				if(numNow>allNum-1) {
					numNow=0;
				}
				moveImg(numNow);
			},3000);
		}
		
		autoMonveImg();
		
		showImg.hover(function(){
			clearInterval(timer1);
		},function(){
			autoMonveImg();
		});
		btnImg.hover(function(){
			clearInterval(timer1);
		},function(){
			autoMonveImg();
		});
		
		var allNum=showImg.length;
		function moveImg(num){
			showImg.css('opacity',0.1);
			showImg.eq(num).show().siblings().hide();
			btnImg.eq(num).addClass('active').siblings().removeClass('active');
			$('#fade p').html(arrData[num]);
			showImg.eq(num).animate({
			   opacity: 1
			}, 800);
			numNow=num;
		}
	})();
});
