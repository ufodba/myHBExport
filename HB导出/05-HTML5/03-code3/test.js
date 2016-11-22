
//self:当前工作的worker对象
//监听数据：接收消息
self.onmessage = function(ev){
	
//	alert(ev.data);
	console.log(ev.data);
	
	//发送数据
	
	self.postMessage('收到收到');
	
}
