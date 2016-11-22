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

//获取第一、最后、前一、后一的节点元素--返回obj----注意：封装成外部函数后不能使用
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
			return obj.previousElementSibling || (obj.previousSibling.nodeType==1? obj.previousSibling : getPrevNode(obj.previousSibling)) ;
		}
function getNextNode(obj)
		{
			if(!obj.nextSibling) return false;
			return obj.nextElementSibling || (obj.nextSibling.nodeType==1? obj.nextSibling : getNextNode(obj.nextSibling));
		}	

//获取元素到整个页面的距离
function windowOffsetLeft(obj)
		{
			var sum=0;
			if(obj) sum-=parseInt(CSS(obj,'borderLeftWidth'));
			while (obj){
				sum+=obj.offsetLeft;
				sum+=parseInt(CSS(obj,'borderLeftWidth'));
				obj=obj.offsetParent;
			}
			return sum;
		}

function windowOffsetTop(obj)
		{
			var sum=0;
			if(obj) sum-=parseInt(CSS(obj,'borderTopWidth'));
			while (obj){
				sum+=obj.offsetTop;
				sum+=parseInt(CSS(obj,'borderTopWidth'));
				obj=obj.offsetParent;
			}
			return sum;
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
