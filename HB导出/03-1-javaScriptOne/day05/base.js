

function  windowOffsetLeft(obj)
{
	var sum=0;
		   	   
	if(obj)
	{
		sum -=parseInt(CSS(obj,'borderLeftWidth'));
	}
	while(obj)
	{
	sum+=obj.offsetLeft;
	sum+=parseInt(CSS(obj,'borderLeftWidth'));    //因为内部的所有边框都 要计算，只有最开始的对象的边框不参与计算
		   	   	
	obj=obj.offsetParent;   // 让obj指向obj.offsetParent，然后再计算（现在的）obj的offsetLeft;（现在的obj就是之前obj的offsetParent）
	}
		   	   
	return  sum;
}
			
			
function  windowOffsetTop(obj)
{
	var sum=0;
		   	   
	if(obj)
	{
		sum -=parseInt(CSS(obj,'borderTopWidth'));
	}
	while(obj)
	{
	sum+=obj.offsetTop;
	sum+=parseInt(CSS(obj,'borderTopWidth'));    //因为内部的所有边框都 要计算，只有最开始的对象的边框不参与计算
		   	   	
	obj=obj.offsetParent;   // 让obj指向obj.offsetParent，然后再计算（现在的）obj的offsetTop;（现在的obj就是之前obj的offsetParent）
	}
		   	   
	return  sum;
}
				
			
function CSS(obj,attr,value)
{
	if(value!=undefined)
	{
	  obj.style[attr]=value;
				
	}
				
	//获取 最终样式
	if(window.getComputedStyle)
	{
		return   getComputedStyle(obj)[attr];
	}else
	{
					
	return   obj.currentStyle[attr];
	}

}
	

function getScrollTop()
{
	
	return  document.documentElement.scrollTop || window.pageYOffset;
}




