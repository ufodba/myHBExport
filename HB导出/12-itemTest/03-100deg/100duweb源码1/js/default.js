$(function(){
	//匿名函数就是没有函数名的函数   function test(){} 是非匿名函数
	//匿名函数的特点：匿名函数可以自执行，匿名函数我们一般用来划分作用域，以防全局污染
	//搜索框切换
	(function(){
		//定义变量
		var oMenu = $('#menu');
		var oMenuLi = oMenu.find('li');
		var oText = $('#search .text');
		var textArr = ['例如：荷塘鱼坊烧鱼','例如：竹子林','例如：万达影院优惠券','例如：东莞事件','例如：北京出降雪'];
		var iNow = 0;//当前的按钮的下标	
		//文本框的默认值
		oText.val(textArr[0]); 
		//进行事件绑定
		oMenuLi.on('click',function(){
			iNow = $(this).index();
			//文本填充
			oText.val(textArr[iNow]);  //attr('value','');
			//按钮颜色变换
			$(this).attr('class','active').siblings().attr('class','gradient');
		});
		//光标进入文本框时清除默认数据
		oText.on('focus',function(){
			if($(this).val() == textArr[iNow]){
				$(this).val('');
			}
		});
		//光标移出文本框时，添加默认数据
		oText.on('blur',function(){
			if($(this).val() == ''){
				$(this).val(textArr[iNow]);
			}
		});
	})();
	//文字的弹动效果
	/**
	 * 1、定义变量
	 * 2、将json的数据回填dom
	 * 3、对下箭头进行了事件绑定
	 * 4、写了moveTo的函数调取下一条记录（判断是第一条，还是最后一条，并且做了相应的处理）
	 * 5、轮播效果   setInterval
	 * 6、hover  
	 */
	(function(){
		//定义变量
		var oUpdate = $('.update');
		var oUl = oUpdate.find('ul');
		var iH = 0;//li的高度
		var iNow = 0;//li的当前记录的下标
		
		var arrData = [
			{"name":"轩轩","time":2,"title":"aa那些灿烂华美的瞬间…","url":"http://www.163.com"},
			{"name":"丽丽","time":3,"title":"那些灿烂华美的瞬间…","url":"http://www.163.com"},
			{"name":"轩轩","time":4,"title":"aa那些灿烂华美的瞬间…","url":"http://www.163.com"},
			{"name":"丽丽","time":5,"title":"那些灿烂华美的瞬间…","url":"http://www.163.com"},
			{"name":"轩轩","time":6,"title":"aa那些灿烂华美的瞬间…","url":"http://www.163.com"},
			{"name":"丽丽","time":7,"title":"那些灿烂华美的瞬间…","url":"http://www.163.com"},
			{"name":"轩轩","time":8,"title":"aa那些灿烂华美的瞬间…","url":"http://www.163.com"},
			{"name":"丽丽","time":9,"title":"那些灿烂华美的瞬间…","url":"http://www.163.com"}
		];
		//动态回填dom
		var str = '';
		for(var i=0;i<arrData.length;i++){
			str += '<li><a href="'+arrData[i].url+'"><strong>'+arrData[i].name+'</strong><span>'+arrData[i].time+'分钟前</span>写了一篇新文章：'+arrData[i].title+'…</a></li>';
		}
		oUl.html(str);
		//获取新的li的高度
		iH = oUl.find('li').height();
		//console.log(iH);
		//按钮的点击事件
		var up = $("#updateUpBtn");
		var down = $("#updateDownBtn");
		down.on('click',function(){
			//显示下一条数据
			moveTo(-1);
		});
		up.on('click',function(){
			//显示下一条数据
			moveTo(1);
		});
		
		//自动轮播
		var timer = null;
		function autoMove(){
			timer = setInterval(function(){
				moveTo(-1);
			},2000);
		}
		autoMove();
		//mouseover   mouseout
		//hover 绑定两个方法，第一个方法等同于mouseover，第二个方法等同于mouseout
		oUpdate.hover(function(){
			clearInterval(timer);
		},function(){
			autoMove();
		});

		//li的移动
		function moveTo(num){
			iNow  += num;//0,1,2,3,4,5,6,7
			//如果是最后一条记录，按向下的按钮，要将下标置为0
			if(iNow == -(arrData.length)){
				iNow = 0;
			}
			//如果是第一条记录，按向上的按钮，要将下标置为-7
			if(iNow > 0){
				iNow = -(arrData.length-1);
			}
			oUl.stop().animate({'top':iH*iNow},2000,'elasticOut');
		}
	})();
	//选项卡
	/**
	 * 1、先做一个选项卡的事件   对内容进行样式的设置   
	 * 2、封装函数  抽取相同或者类似的地方  让他能够在其他的四个地方调用
	 */
	(function(){
		var oTabNav1 = $('.tabNav1');
		var oTabCon1 = $('.tabCon1');
		//第一个选项卡
		fnNav(oTabNav1,oTabCon1,'click');
		//第四个选项卡
		fnNav($('.tabNav4'),$('.tabCon4'),'mouseover');
		fnNav($('.tabNav2'),$('.tabCon2'),'click');
		fnNav($('.tabNav3'),$('.tabCon3'),'mouseover');
		//封装函数
		function fnNav(oNav,oCon,fnEvent){
			
			var oLi = oNav.find('li');
			//设置初始值
			oCon.hide().eq(0).show();
			//点击事件
			oLi.on(fnEvent,function(){
				var iNow = $(this).index();
				var oNavA = $(this).find('a');
				oCon.hide().eq(iNow).show();
				//动态设置样式gradient   
				$(this).addClass('active').removeClass('gradient').siblings().addClass('gradient').removeClass('active');
				oNavA.attr('class','triangle_down_red');
				$(this).siblings().find('a').attr('class','triangle_down_gray ');
			});
		}
	})();
	//图片轮播
	(function(){
		var oFade = $('#fade');
		var oUlLi = oFade.find('ul li');
		var oOlLi = oFade.find('ol li');
		var oP = oFade.find('p');
		var textObj = ['aaaaaaaa','bbbbbbbbbbb','cccccccccccc'];
		var iNow = 0;//当前图片的下标
		var timer = null;
		//初始值设置
		oUlLi.eq(0).show().siblings().hide();
		oP.html(textObj[0]);
		//点击事件
		oOlLi.on('click',function(){
			iNow = $(this).index();
			//封装函数
			toMove(iNow);
			
		});
		//轮播
		function autoMove(){
			timer = setInterval(function(){
				iNow++;
				if(iNow == textObj.length){
					iNow = 0;
				}
				toMove(iNow);
			},2000);
			
		}
		autoMove();
		oFade.hover(function(){
			clearInterval(timer);
		},function(){
			autoMove();
		});
		//当前图片的设置
		function toMove(num){
			oUlLi.eq(num).show().siblings().hide();
			//设置样式
			oOlLi.eq(num).attr('class','active').siblings().attr('class','');
			//p；里边的字要变化
			oP.html(textObj[num]);
		}
	})();
	
	//日历
	/**
	 * 1、定义变量
	 * 2、做鼠标悬浮事件 hover
	 * 3、显示浮动层
	 * 4、改变浮动层位置
	 * 5、改变浮动层内容
	 */
	(function(){
		var oImg = $('.calendar ol li img');
		var oToday = $('.today_info');
		var oSpan = $('.calendar h3 span');
		//鼠标悬浮事件
		oImg.hover(function(){
			//需要改变oToday的位置
			var iTop = $(this).parent().position().top - 30 ;
			var iLeft = $(this).parent().position().left + 50;
			oToday.show().css({'top':iTop,'left':iLeft});
			//改变oToday的内容
			var oImgSrc = $(this).attr('src');
			oToday.find('img').attr('src',oImgSrc);
			var oTitle = $(this).attr('info');
			oToday.find('p').html(oTitle);
			//星期
			var week = $(this).parent().index()%7;
			var weekText = oSpan.eq(week).html();
			oToday.find('strong').html(weekText);
			
		},function(){
			oToday.hide();
			
		});
	})();
	
	//bbs论坛
	(function(){
		var oLi = $('.bbs ol li');
		oLi.on('mouseover',function(){
			$(this).attr('class','active').siblings().attr('class','');
		});
	})();
	
	//鼠标的提示效果
	(function(){
		var oLi = $('.hot_area ul li');
		var textArr = [
		'用户1','用户2','用户3','用户4','用户5','用户6','用户7','用户8','用户9','用户10'
		];
		
		oLi.on('mouseover',function(){
			var iNow = $(this).index();
			if(iNow != 0){
				$('.hot_area ul li p').remove();
				$(this).append('<p style="width:'+($(this).width()-12)+'px;">'+textArr[iNow-1]+'</p>');
			}
		});
	})();
});
