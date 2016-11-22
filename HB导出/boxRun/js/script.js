var aBox = document.getElementsByTagName('div');

var x = 0;
var y = 0;
var w = 0;
var h = 0;

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
	boxLocation(aBox.length);
}

function boxLocation(length){
	for (var i=1; i<length; i++) {
		aBox[i].style.left=parseInt(aBox[i-1].style.left)+50+'px';
		aBox[i].style.top=parseInt(aBox[i-1].style.top)+50+'px';
		if((parseInt(aBox[i].style.left)+50)>=w){
			aBox[i].style.left=parseInt(aBox[i-1].style.left)-50+'px';
		}
		if((parseInt(aBox[i].style.top)+50)>=h){
			aBox[i].style.top=parseInt(aBox[i-1].style.top)-50+'px';
		}
	}
}
