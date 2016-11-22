function ajax(method,url,data,success){
	//1.打开浏览器
	var xhr = null;
	//异常捕获处理
	try{
		xhr = new XMLHttpRequest();
	}catch(e){
		xhr = ActiveXObject('Microsoft.XMLHTTP');
	}
	
	if (method=='get'&& data) {
		url += '?'+data;
	}
	
	//2.在地址栏输入地址
	xhr.open(method, url, true);	//true-异步	false-同步
	//3. 提交
	if (method=='get') {
		xhr.send();
	}else{
		xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
		xhr.send(data);
	}
	
	//4. 等待服务返回内容				
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200)
			{
				success && success(xhr.responseText); //返回内容(字符串)
			}
			else{
				alert('出错了,err:'+xhr.status);
			}		
		};	
	};
	
};
