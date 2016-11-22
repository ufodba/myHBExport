//window.onload=function(){
	//获取注册模块
	var username1=document.getElementById('username1');
	var password1=document.getElementById('password1');
	var btnReg=document.getElementById('btnReg');
	var userNameMsg=document.getElementById('verifyUserNameMsg');
	//获取登录模块
	var username2=document.getElementById('username2');
	var password2=document.getElementById('password2');
	var btnLogin=document.getElementById('btnLogin');
	//获取退出模块
	var logout=document.getElementById('logout');
	//获取留言板模块
	var content=document.getElementById('content');
	var btnPost=document.getElementById('btnPost');
	var list=document.getElementById('list');
	//获取大块的模块
	var user=document.getElementById('user');
	var userinfo=document.getElementById('userinfo');
	var reg=document.getElementById('reg');
	var login=document.getElementById('login');
	//获取加载模块
	var showMore=document.getElementById('showMore');
	
	var pageAdd=0;
	var pages=1;
	
	setDivCSS();
	refresh();
	
	//注册模块：1、检查用户名
	username1.onblur=function(){
		var usernameE=username1.value;
		ajax('post','guestbook/index.php','m=index&a=verifyUserName&username='+usernameE+'',function (data){
			var js=JSON.parse(data);
			userNameMsg.innerHTML=js.message;
			if (!js.code) {
				userNameMsg.style.color='green';
			} else{
				userNameMsg.style.color='red';
			}
		});
	}
	//注册模块：2、注册
	btnReg.onclick=function(){
		var username=username1.value;
		var password=password1.value;
		ajax('post','guestbook/index.php','m=index&a=reg&username='+username+'&password='+password+'',function (data){
			var js=JSON.parse(data);
			alert(js.message);
		});
	}
	//登录模块
	btnLogin.onclick=function(){
		var loginUsername=username2.value;
		var loginPassword=password2.value;
		ajax('post','guestbook/index.php','m=index&a=login&username='+loginUsername+'&password='+loginPassword+'',function (data){
			var js=JSON.parse(data);
			if(js.code){
				alert(js.message);
			}
			setDivCSS();
		});
	}
	//退出模块
	logout.onclick=function(){
		ajax('post','guestbook/index.php','m=index&a=logout',function (data){
			var js=JSON.parse(data);
			alert(js.message);
			setDivCSS();
		});
	}
	//获取浏览器cookie值，提供用户状态依据
	function getCookie(key){
		var cookie = document.cookie;
		var arr = cookie.split('; ');
		for(var i=0; i<arr.length; i++){
			var arrS = arr[i].split('=');
			if(arrS[0]==key){
				return arrS[1];
			}
		}
	}
	//根据登录状态改变显示模块
	function setDivCSS(){
		if(getCookie('uid')){
			userinfo.innerHTML=decodeURI(getCookie('username'));
			reg.style.display='none';
			login.style.display='none';
			user.style.display='block';
		}else{
			user.style.display='none';
			reg.style.display='block';
			login.style.display='block';
		}
	}
	
	//留言板模块
	btnPost.onclick=function(){
		var useContent=content.value;
		ajax('post','guestbook/index.php','m=index&a=send&content='+useContent+'',function (data){
			var js=JSON.parse(data);
			var jss=js.data;
			list.innerHTML='<dl>'+
								'<dt>'+
									'<strong>'+jss.username+'</strong> 说 :'+
								'</dt>'+
								'<dd>'+useContent+'</dd>'+
								'<dd class="t">'+
									'<a href="javascript:void(0)" onclick="supportD(this,'+jss.cid+')" id="support">顶(<span>'+jss.support+'</span>)</a>'+
									' | '+
									'<a href="javascript:void(0)" onclick="opposeC(this,'+jss.cid+')" id="oppose">踩(<span>'+jss.oppose+'</span>)</a>'+
								'</dd>'+
								'</dl>'+list.innerHTML;
//			alert(js.message);
		});
	}
	
	//加载更多
	showMore.onclick=function(){
//		list.innerHTML='';
		refresh();
	}
	
	function refresh(){
		pageAdd++;
		if(pageAdd>pages) {
//				pageAdd=0;
				alert(" 没有更多了");
				return;
			}
		ajax('post','guestbook/index.php','m=index&a=getList&page='+pageAdd+'&n=5',function(data){
//			console.log(typeof data);
			var js=JSON.parse(data);
			var jss=js.data;
//			console.log(jss); //含页数
			pages=jss.pages;
			var page=jss.page;
				var jsss=jss.list;
				for(var i=0; i<jsss.length; i++){
	//				console.log(jsss[i]);
					list.innerHTML+='<dl>'+
										'<dt>'+
											'<strong>'+jsss[i].username+'</strong> 说 :'+
										'</dt>'+
										'<dd>'+jsss[i].content+'</dd>'+
										'<dd class="t">'+
											'<a href="javascript:void(0)" onclick="supportD(this,'+jsss[i].cid+')" id="support">顶(<span>'+jsss[i].support+'</span>)</a>'+
											' | '+
											'<a href="javascript:void(0)" onclick="opposeC(this,'+jsss[i].cid+')" id="oppose">踩(<span>'+jsss[i].oppose+'</span>)</a>'+
										'</dd>'+
									'</dl>';
				}
		});
	}
	
	//顶和踩模块
	function supportD(obj,a){
		ajax('post','guestbook/index.php','m=index&a=doSupport&cid='+a+'',function (data){
			var js=JSON.parse(data);
//			alert(js.message);
			var span=obj.getElementsByTagName('span')[0];
			span.innerHTML=parseInt(span.innerHTML)+1;
		});
	}
	function opposeC(obj,a){
		ajax('post','guestbook/index.php','m=index&a=doOppose&cid='+a+'',function (data){
			var js=JSON.parse(data);
//			alert(js.message);
			var span=obj.getElementsByTagName('span')[0];
			span.innerHTML=parseInt(span.innerHTML)+1;
		});
	}


