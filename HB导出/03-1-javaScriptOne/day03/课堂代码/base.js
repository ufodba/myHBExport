



function CSS(obj,attr,value)
{
	     if(value==undefined)
	     {
	     	  if(window.getComputedStyle)
	     	  {
	     	  	  return  getComputedStyle(obj)[attr];
	     	  }
	     	  else
	     	  {
	     	  	  return  obj.currentStyle[attr];
	     	  }
	     }
         obj.style[attr]=value;
}   
