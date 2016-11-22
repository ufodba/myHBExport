$(function(){
	var lyric="<li>小狼狗</li>"+
			"<li>演唱：任贤齐</li>"+
			"<li>有个漂亮的妞</li>"+
			"<li>站在第一道街口</li>"+
			"<li>她有黑色的长发</li>"+
			"<li>姿态诱人的挺拔</li>"+
			"<li>总之美得让人怕</li>"+
			"<li>我就悄悄靠近她</li>"+
			"<li>然后摇一摇尾巴</li>"+
			"<li>猜猜她会抱我吗</li>"+
			"<li>谁知却招来警察</li>"+
			"<li>有个够酷的妞</li>"+
			"<li>走过第二道街口</li>"+
			"<li>穿着白色露脐衫</li>"+
			"<li>耳朵挂满了铁环</li>"+
			"<li>眼神迷人的旋转</li>"+
			"<li>我就这样走向前</li>"+
			"<li>然后晃晃我的头</li>"+
			"<li>想要舔舔她的手</li>"+
			"<li>可她竟飞奔逃走</li>"+
			"<li>我是不停</li>"+
			"<li>追逐你的小狼狗</li>"+
			"<li>咬住你绝不松口</li>"+
			"<li>我是偷偷</li>"+
			"<li>爱上你的小狼狗</li>"+
			"<li>跟在你背后从不回头</li>"+
			"<li>我是静静</li>"+
			"<li>等待爱的小狼狗</li>"+
			"<li>我也有一种温柔</li>"+
			"<li>我是容易</li>"+
			"<li>受伤的小狼狗</li>"+
			"<li>如果你决定不带我走</li>"+
			"<li>如果你决定不带我走</li>"+
			"<li>如果我这样一直走</li>"+
			"<li>又有谁会为我停留</li>"+
			"<li>寒冷的世界没有终点</li>"+
			"<li>路上的街灯串成了线</li>"+
			"<li>此刻你正向我招手</li>"+
			"<li>微笑的表情还很温柔</li>"+
			"<li>虽然心里还没把握</li>"+
			"<li>可我眼泪已滴落</li>"+
			"<li>你是可爱的妞</li>"+
			"<li>来自第三道街口</li>"+
			"<li>有着微笑的脸庞</li>"+
			"<li>和最善良的眼光</li>"+
			"<li>一切温柔的模样</li>"+
			"<li>我已禁不住幻想</li>"+
			"<li>相像陪在你身旁</li>"+
			"<li>不管到任何地方</li>"+
			"<li>都是最美的地方</li>"+
			"<li>我是不停</li>"+
			"<li>追逐你的小狼狗</li>"+
			"<li>咬住你绝不松口</li>"+
			"<li>我是偷偷</li>"+
			"<li>爱上你的小狼狗</li>"+
			"<li>跟在你背后从不回头</li>"+
			"<li>我是静静</li>"+
			"<li>等待爱的小狼狗</li>"+
			"<li>我也有一种温柔</li>"+
			"<li>我是容易</li>"+
			"<li>受伤的小狼狗</li>"+
			"<li>如果你决定不带我走</li>"+
			"<li>我是不停</li>"+
			"<li>追逐你的小狼狗</li>"+
			"<li>咬住你绝不松口</li>"+
			"<li>我是偷偷</li>"+
			"<li>爱上你的小狼狗</li>"+
			"<li>跟在你背后从不回头</li>"+
			"<li>我是静静</li>"+
			"<li>等待爱的小狼狗</li>"+
			"<li>我也有一种温柔</li>"+
			"<li>我是容易</li>"+
			"<li>受伤的小狼狗</li>"+
			"<li>如果你决定不带我走</li>";
	$("#miusicLyric").html(lyric);
//	$('#miusicLyric').scroll(function(){
//		console.log($('#miusicLyric').scrollTop());
//	});
	var tt=30;
	var lyricTimer=setInterval(function(){
		if($('#nowAudio').attr('src').substr(7) == "任贤齐 - 小狼狗.mp3"){
			var playTime=$("#nowAudio")[0].currentTime;
			playTime=Math.floor(playTime);
			if(playTime<1){
//				$('#miusicLyric li').removeClass('lyric');
				$('#miusicLyric li:nth-child(1)').toggleClass('lyric');
				$('#miusicLyric li:nth-child(2)').toggleClass('lyric');
				$('#miusicLyric').scrollTop(0);
			}
			switch (playTime){
				case 1: $('#miusicLyric li').removeClass('lyric');
						$('#miusicLyric li:nth-child(3)').toggleClass('lyric');
						$('#miusicLyric').scrollTop(tt);
					break;
				case 3: $('#miusicLyric li').removeClass('lyric');
						$('#miusicLyric li:nth-child(4)').toggleClass('lyric');
						$('#miusicLyric').scrollTop(tt+1*24);
					break;
				case 5: $('#miusicLyric li').removeClass('lyric');
						$('#miusicLyric li:nth-child(5)').toggleClass('lyric');
						$('#miusicLyric').scrollTop(tt+2*24);
					break;
				case 7: $('#miusicLyric li').removeClass('lyric');
						$('#miusicLyric li:nth-child(6)').toggleClass('lyric');
						$('#miusicLyric').scrollTop(tt+3*24);
					break;
				case 9: $('#miusicLyric li').removeClass('lyric');
						$('#miusicLyric li:nth-child(7)').toggleClass('lyric');
						$('#miusicLyric').scrollTop(tt+4*24);
					break;
				case 10: $('#miusicLyric li').removeClass('lyric');
						$('#miusicLyric li:nth-child(8)').toggleClass('lyric');
						$('#miusicLyric').scrollTop(tt+5*24);
					break;
				case 12: $('#miusicLyric li').removeClass('lyric');
						$('#miusicLyric li:nth-child(9)').toggleClass('lyric');
						$('#miusicLyric').scrollTop(tt+6*24);
					break;
				case 13: $('#miusicLyric li').removeClass('lyric');
						$('#miusicLyric li:nth-child(10)').toggleClass('lyric');
						$('#miusicLyric').scrollTop(tt+7*24);
					break;
				case 15: $('#miusicLyric li').removeClass('lyric');
						$('#miusicLyric li:nth-child(11)').toggleClass('lyric');
						$('#miusicLyric').scrollTop(tt+8*24);
					break;
				case 19: $('#miusicLyric li').removeClass('lyric');
						$('#miusicLyric li:nth-child(12)').toggleClass('lyric');
						$('#miusicLyric').scrollTop(tt+9*24);
					break;
				case 22: $('#miusicLyric li').removeClass('lyric');
						$('#miusicLyric li:nth-child(13)').toggleClass('lyric');
						$('#miusicLyric').scrollTop(tt+10*24);
					break;
				case 24: $('#miusicLyric li').removeClass('lyric');
						$('#miusicLyric li:nth-child(14)').toggleClass('lyric');
						$('#miusicLyric').scrollTop(tt+11*24);
					break;
				case 26: $('#miusicLyric li').removeClass('lyric');
						$('#miusicLyric li:nth-child(15)').toggleClass('lyric');
						$('#miusicLyric').scrollTop(tt+12*24);
					break;
				case 27: $('#miusicLyric li').removeClass('lyric');
						$('#miusicLyric li:nth-child(16)').toggleClass('lyric');
						$('#miusicLyric').scrollTop(tt+13*24);
					break;
	//			case value:
	//				break;
//				default:
//					break;
			}
		}else{
			$('#miusicLyric li').removeClass('lyric');
		}
		
	},200);
	
	
});
