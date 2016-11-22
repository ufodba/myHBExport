var aBox = document.getElementsByTagName('div');

var x = 0;
var y = 0;
var w = 0;
var h = 0;
var a=0;
var b=4;

for (var i=0;i<aBox.length; i++) {
	aBox[i].style.left=i*50+'px';
	aBox[i].style.top=i*50+'px';
}

document.onmousemove=function(ev){
	w = document.documentElement.clientWidth;
	h = document.documentElement.clientHeight;
	var ev = ev ||window.event;
	if(ev.pageX > w-50){
		x = w-50;
	}
	else{
		x = ev.pageX;
	}
	if(ev.pageY > h-50){
		y = h-50;
	}
	else{
		y = ev.pageY;
	}
	aBox[0].style.left=x+'px';
	aBox[0].style.top=y+'px';
	if(parseInt(aBox[0].style.left)==w-50){
		a=1;
	}
	if(parseInt(aBox[0].style.left)==0){
		a=0;
	}
	boxLocation(aBox.length);
}

function boxLocation(length){
	if(a==0){
		console.log(a==0);
		for (var i=1; i<length; i++) {
			aBox[i].style.left=parseInt(aBox[0].style.left)+i*50+'px';
			aBox[i].style.top=parseInt(aBox[0].style.top)+i*50+'px';
			if((parseInt(aBox[i].style.left)+50)>=w ){
				aBox[i].style.left=2*w-(x+i*50)-100+'px';
			}
			if((parseInt(aBox[i].style.top)+50)>=h){
				aBox[i].style.top=2*h-(y+i*50)-100+'px';
			}
		}
	}
	if(a==1){
		for (var i=1; i<length; i++) {
			aBox[i].style.left=parseInt(aBox[0].style.left)-i*50+'px';
			aBox[i].style.top=parseInt(aBox[0].style.top)+i*50+'px';
			if(parseInt(aBox[i].style.left)<=0 ){
				aBox[i].style.left=(i-1)*50-x+50+'px';
			}
			if((parseInt(aBox[i].style.top)+50)>=h){
				aBox[i].style.top=2*h-(y+i*50)-100+'px';
			}
		}
	}
}
