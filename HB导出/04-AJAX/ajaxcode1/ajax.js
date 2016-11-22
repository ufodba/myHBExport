//封装一个网络请求函数
//get post
//参数分析：请求方式  url  参数   回调函数fn

function ajax(method, url, data, success) {

	//1.c创建请求对象

	var xhr = null;

	try {
		xhr = new XMLHttpRequest();
	} catch(e) {
		//TODO handle the exception
		xhr = ActiveXObject('Microsoft.XMLHTTP');
	}
	
	//判断请求方式 open
	if(method=='get'&&data){
		
		url += '?' + data; 
	}
	xhr.open(method,url,true);
	
	//send
	if(method=='get'){
		
		xhr.send();
		
	}else if(method=='post'){
		
		xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded')
		xhr.send(data);
	}
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4){
			
			if(xhr.status==200){
				
				var data = xhr.responseText;
				//回调函数返回数据
				success(data);
				
			}else{
				alert('出错了');
			}
			
		}
		
		
	}
	
}