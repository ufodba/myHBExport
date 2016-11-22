//最终样式
function CSS(obj,attr,value)
		{
			if(value!=undefined){
				obj.style[attr]=value;
			}
			if(window.getComputedStyle){
				return getComputedStyle(obj)[attr];
			}else{
				return obj.currentStyle[attr];
			}
		}

//按class获取Obj
function  getClassObject(obj,sClass)
		{
			var  array=obj.getElementsByTagName('*');  //* 表示所有   低版本IE也可以使用
			var arr=[];  
			for (var i=0; i<array.length; i++) {
				if(array[i].className==sClass)
				{
					arr.push(array[i]);
				}
			}
           	 return  arr;
       }

//获取第一、最后、前一、后一的节点元素--返回obj
function getFirstNode(obj)
		{
			if(!obj.firstChild){
				return false;
			}
			else{
				return obj.firstElementChild || obj.firstChild;
			}
		}
function getLastNode(obj)
		{
			if(!obj.lastChild) return false;
			return obj.lastElementChild || obj.lastChild;
		}
function getPrevNode(obj)
		{
			if(!obj.previousSibling) return false;
			return obj.previousElementSibling || obj.previousSibling==1? obj.previousSibling : getPrevNode.previousSibling;
		}
function getNextNode(obj)
		{
			if(!obj.nextSibling) return false;
			return obj.nextElementSibling || obj.nextSibling==1? obj.nextSibling : getnextNode.nextSibling;
		}	

//获取元素到整个页面的距离      注意使用前确保*{margin:0;padding:0;}且obj 有定位。
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
			sum+=parseInt(CSS(obj,'borderLeftWidth'));    
				   	   	
			obj=obj.offsetParent;   
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
			sum+=parseInt(CSS(obj,'borderTopWidth'));    
				   	   	
			obj=obj.offsetParent;  
			}
			   	   
			return  sum;
		}
		
//获取滚动条位置
function getScrllTop()
		{
			return  document.documentElement.scrollTop || window.pageYOffset;
		}
//设置滚动条位置
function setScrllTop(value)
		{
			document.documentElement.scrollTop=document.body.scrollTop=value;
		}
		
//事件流转停止
function stopEvent(ev)
		{
			if (ev.stoppropagation) {
				ev.stoppropagation();
			} else{
				ev.cancelBubble=true;
			}
		}

//删除数组中特定元素
function removeArrObj(arr,obj)
		{
			for(var i=0;i<arr.length;i++){
				if(arr[i]==obj){
					arr.splice(i,1);
					i--;
				}
			}
		}

//获取可视宽高
function  windowWidth()
		{
			
			return   document.documentElement.clientWidth || document.body.clientWidth;
		}

function  windowHeight()
		{
			//注意：两个的先后顺序不能调换，否则FireFox不兼容
			return   document.body.clientHeight || document.documentElement.clientHeight;
		}

//中断事件流
function stopEvent(ev)
		{
			if(ev.stopPropagation) {
				ev.stopPropagation();
			}else{
				ev.cancelBubble=true;
			}
		}

//绑定事件
function addEvent(obj,event,method,boolean)
		{
			if(obj.addEventListener){
				obj.addEventListener(event,method,boolean);
			}else{
				obj.attachEvent('on'+event,method);
			}
		}

//取消绑定事件的事件
function  removeEvent(obj,event,method,boolean)
       	{
       		if(obj.removeEventListener)
       		{
       			
       			obj.removeEventListener(event,method,boolean);
       		}else
       		{
       			
       		    obj.detachEvent('on'+event,method);	
       			
       		}
       	}
//绑定事件+this指针指向obj
function addEventCall(obj,event,method,boolean)
		{
			if(obj.addEventListener){
				obj.addEventListener(event,method,boolean);
			}else{
				obj.attachEvent('on'+event,function(){
					method.call(obj);
				});
			}
		}

