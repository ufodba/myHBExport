$(function() {

	var audioNow = document.getElementById('nowAudio');
	var flag = true; //音乐开关标记
	var miusicList = ['任贤齐 - 小狼狗.mp3','任贤齐 - 永夜.mp3','水木年华 - 借我一生.mp3','水木年华 - 老屋.mp3','水木年华 - 我们的岛.mp3', '水木年华 - 小爱人.mp3', '水木年华 - 一生有你.mp3', '水木年华 - 在他乡.mp3', '水木年华 - 中学时代.mp3', '水木年华、王筝 - 没有人比我更爱你.mp3'];
	var allTime = 0; //音乐总时长
	var nowCurrentTime = 0;
	var w = $('#rangeNow').css('width')
	var w1 = $('#miusicVolume').css('width')

	//加载音乐列表Strat
	$.each(miusicList, function(i, n) {
		var miusicName = '<li name="' + n + '" data-num = "' + i + '"><a href="#">' + n + '</a><span><span></li>';
		$('#miusicList').append(miusicName);
	});
	//加载音乐列表End	
	
	//加载歌词Start
//	$.get('lyric/小狼狗.txt',function(data,status){
//		if("success" == status){
//			$('#miusicLyric').html(data);
//		}
//	});
//	$('#miusicLyric').load('lyric/小狼狗.txt');
//	$('#miusicLyric').load('lyric/lyric.html');
	//加载歌词End
	
	//时间匹配Start
	var timer = setInterval(function() {
		allTime = $('#nowAudio')[0].duration;
		nowCurrentTime = $("#nowAudio")[0].currentTime;
		var jindu = nowCurrentTime / allTime * 100;
		$('#miusicRange div div a[class="ui-slider-handle ui-btn ui-shadow"]').css('left', jindu + '%');
		var jindu2 = jindu / 100 * parseInt(w);
		$('#rangeNow').css('width', jindu2 + 'px');
		var nowLi = $('#nowAudio').attr('src').substr(7);
		$('#miusicList li').removeAttr('style');
		$('#miusicList li a').removeAttr('style');
		$('#miusicList li span').removeAttr('style');
		$('#miusicList li[name="'+nowLi+'"]').css({"padding-right": "5px"});
		$('#miusicList li[name="'+nowLi+'"] a').css({"color": "rgba(138,43,226,1)",	"font-size": "16px","font-weight": "700"});
		$('#miusicList li[name="'+nowLi+'"] span').css({"display": "inline-block"});
		var nowMiusicTitle=nowLi.substr(0,(nowLi.length-4));
		if(nowMiusicTitle) {
			$('#miusicTitleM').html(nowMiusicTitle);
		}
		var next=parseInt($('#nowAudio').attr('data-num'));
		if(next==$('#miusicList li').length-1) {
			next=0;
		}else{
			next=next+1;
		}
		var nextTitle=$('#miusicList li[data-num="'+next+'"]').attr('name');
		if(nextTitle){
			nextTitle=nextTitle.substr(0,(nextTitle.length-4));
			$('#nextTitleM').html(nextTitle);
		}
		if(!isNaN(allTime)) {
			var all = setTime(allTime);
			var current = setTime(nowCurrentTime);
			$('#slider1-label').html(current + '/' + all);
		}
		if($("#nowAudio")[0].ended) {
			forwardMuisci();
		}
	}, 200);
	//时间匹配End

	//进度条显示样式及控制Start
	setW($("#slider1"), $('#rangeNow'), 100, w);
	setW($("#slider2"), $('#miusicVolume'), 1, w1);
	$("#slider1").on('change', function() {
		var now = $("#slider1").val();
		var nowT = now / 100 * allTime;
		$("#nowAudio")[0].currentTime = nowT;
		setW($("#slider1"), $('#rangeNow'), 100, w);
	});
	$("#slider2").on('change', function() {
		var now = $("#slider2").val();
		$("#nowAudio")[0].volume = now;
		setW($("#slider2"), $('#miusicVolume'), 1, w1);
	});
	var volumeFlag = true;
	$('#volumeLogo').on('tap', function() {
		if(volumeFlag) {
			$('#volumeLogo img').attr('src', 'img/1129172.png');
			$("#nowAudio")[0].muted = true;
			volumeFlag = false;
		} else {
			$('#volumeLogo img').attr('src', 'img/1129173.png');
			$("#nowAudio")[0].muted = false;
			volumeFlag = true;
		}
	});
	//进度条显示样式及控制End

	//点击音乐列表播放音乐Start
	$('#miusicList li').on('tap', playMiusic);
	//点击音乐列表播放音乐End	

	//音乐开关控制事件Start
	$('#onOff').on('tap', function() {
		if(flag) {
			$(this).toggleClass('ui-icon-31-pause');
			$(this).toggleClass('ui-icon-30-play');
			if('' == $('#nowAudio').attr('src')) {
				$('#nowAudio').attr('src', 'miusic/' + $('#miusicList li:first-child').attr('name'));
				$('#nowAudio').attr('data-num', $('#miusicList li:first-child').attr('data-num'));
				audioNow.play();
			} else {
				audioNow.play();
			}
			flag = false;
		} else {
			$(this).toggleClass('ui-icon-31-pause');
			$(this).toggleClass('ui-icon-30-play');
			audioNow.pause();
			flag = true;
		}
	});
	//音乐开关控制事件End

	//前后歌曲快速切换Start
	$('#rewind').on('tap', function() {
		rewindMuisci();
	});
	$('#forward').on('tap', function() {
		forwardMuisci();
	});
	//前后歌曲快速切换End

	//前后快进Start
	$('#adwance').on('tap', function() {
		var tt = $("#nowAudio")[0].currentTime + 5;
		$("#nowAudio")[0].currentTime = tt;
	});
	$('#retreat').on('tap', function() {
		var tt = $("#nowAudio")[0].currentTime - 5;
		$("#nowAudio")[0].currentTime = tt;
		if(tt <= -2.5) {
			rewindMuisci();
		}
	});
	//前后快进End	

	function setTime(t) {
		var ms = 0;
		var ss = 0;
		var mss = Math.floor(t / 60);
		var sss = Math.floor(t - mss * 60);
		if(mss < 10) {
			ms = '0' + mss
		} else {
			ms = mss;
		}
		if(sss < 10) {
			ss = '0' + sss
		} else {
			ss = sss;
		}
		return ms + ':' + ss;
	}

	function setW(obj1, obj2, num, w) {
		var now = obj1.val();
		var nowW = now / num * parseInt(w);
		obj2.css('width', nowW + 'px');
	}

	function playMiusic() {
		$('#nowAudio').attr('data-num', $(this).attr('data-num'));
		$('#nowAudio').attr('src', 'miusic/' + $(this).attr('name'));
		$('#onOff').toggleClass('ui-icon-31-pause');
		$('#onOff').toggleClass('ui-icon-30-play');
		audioNow.play();
		flag = false;
	}

	function jumpMuisci(numNew) {
		$('#nowAudio').attr('data-num', $('#miusicList li:nth-child(' + numNew + ')').attr('data-num'));
		$('#nowAudio').attr('src', 'miusic/' + $('#miusicList li:nth-child(' + numNew + ')').attr('name'));
		$('#onOff').toggleClass('ui-icon-31-pause');
		$('#onOff').toggleClass('ui-icon-30-play');
		audioNow.play();
		flag = false;
	}

	function rewindMuisci() {
		var numNow = $('#nowAudio').attr('data-num');
		var numNew = numNow;
		if(numNew == 0) {
			numNew = $('#miusicList li').length;
			jumpMuisci(numNew);
		} else {
			jumpMuisci(numNew);
		}
	}

	function forwardMuisci() {
		var numNow = $('#nowAudio').attr('data-num');
		var numNew = parseInt(numNow) + 2;
		if(numNew > $('#miusicList li').length) {
			numNew = 1;
			jumpMuisci(numNew);
		} else {
			jumpMuisci(numNew);
		}
	}
});