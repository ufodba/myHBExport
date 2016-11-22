var oCityWeather=document.getElementById('cityWeather');
var oTop=document.getElementById('top');
var ali=oTop.getElementsByTagName('li');
var oUl=document.getElementById('rollNavR');
var oRoll=document.getElementById('rollNav');
var oQuan=document.getElementById('quan');
var selectType=document.getElementById('selectType');
var types=document.getElementById('types');
var searchTextL=document.getElementById('searchTextL');
var types=document.getElementById('types');
var aTypes=types.getElementsByTagName('li');
var selectType=document.getElementById('selectType');
oCityWeather.onmouseover=function(){
	this.className='active';
}
oCityWeather.onmouseout=function(){
	this.className='';
}
for (var i=0;i<ali.length;i++) {
	ali[i].onmouseover=function(){
		this.className='active';
	}
	ali[i].onmouseout=function(){
		this.className='';
	}
}
var left=0;
setInterval(function(){
	clearInterval(t);
	var t=setInterval(function(){
		left-=10;
		oUl.style.left=left+'px';
		if(left%(-120)==0){
			clearInterval(t);
		}
		if(left<-360){
			left=120;
		}
	},50);
},5000);
oRoll.onmouseover=function(){
	oRoll.className='rollNavBg';
	oQuan.style.display='inline-block';
}
oRoll.onmouseout=function(){
	oRoll.className='';
	oQuan.style.display='none';
}
var flag=true;
searchTextL.onclick=function(ev){
	if(flag){
		types.style.display='block';
		downD.className='down1 up';
	}
	else{
		types.style.display='none';
		downD.className='down1';
	}
	flag=!flag;
	ev=ev||window.event;
   if(ev.stopPropagation)
   {
   		ev.stopPropagation();  //标准
   }else
   {
   	   ev.cancelBubble=true;   //IE6~IE7
   }
}
window.onclick=function(){
	types.style.display='none';
	downD.className='down1';
}
for (var i=0;i<aTypes.length;i++) {
	aTypes[i].index=i;
	aTypes[i].onmouseover=function(){
		this.style.backgroundColor='#ccc';
	}
	aTypes[i].onmouseout=function(){
		this.style.backgroundColor='#FFF';
	}
	aTypes[i].onclick=function(){
		if(this.index<aTypes.length-1){
			selectType.innerHTML=this.innerHTML;
		}
		types.style.display='none';
//		console.log(1);
//		downD.className='down1';
	}
}

