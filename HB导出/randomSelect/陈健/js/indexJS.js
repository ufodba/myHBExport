var warp=getElementId('warp');
var call=getElementId('call');

var arrStu=['程建政','傅超军','刘世颖','邓晓丰','孙志亮','张超凡','冼瑞健','陈峰','韦文会','周喜良',
			'俞钧龙','阳聪','李家盛','贾亚丽','樊占军','李城','朱何优','刘驰誉','吴闻','陈健',
			'钟利民','钟伟伟','刘志明','李君','马红亮','李为龙'];
var stuSeat=[];
var flag=true;
var time

//给学生排座位
stuSort();
//随机功能
call.onclick=function(){
	call.style.backgroundColor='antiquewhite';
	clearInterval(time);
	flag=!flag;
	time=setInterval(function(){
		//重置座位的状态
		clearSeat();
		var rdm=Math.floor(Math.random()*26);
		stuSeat[rdm].style.backgroundColor='orchid';
		call.innerHTML=stuSeat[rdm].stuName;
		stuSeat[rdm].mark=true;
	},100);
	if(flag){
		clearInterval(time);
		call.style.backgroundColor='';
		for (var i=0;i<stuSeat.length;i++) {
			if(stuSeat[i].mark){
				call.innerHTML=stuSeat[i].stuName+'&nbsp;本期头彩';
			}
		}
	}
}

function stuSort(){
	for (var i=0;i<arrStu.length;i++) {
		var cell=i%7;
		var row=parseInt(i/7);
			var stu=document.createElement('div');
			stu.className='stuSeat';
			if(cell<=3){
				stu.style.top=(240-row*60)+'px';
				stu.style.left=(670-cell*100)+'px';
			}
			else if (cell>3){
				stu.style.top=(240-row*60)+'px';
				stu.style.left=(670-cell*100-40)+'px';
			}
			var stuName=document.createElement('span');
			stuName.className='stuName';
			stuName.innerHTML=arrStu[i];
			stu.stuName=arrStu[i];
			stu.appendChild(stuName);
			var stuNum=document.createElement('span');
			stuNum.className='stuNum';
			stuNum.innerHTML=i+1;
			stu.appendChild(stuNum);
			stuSeat[i]=stu;
			warp.appendChild(stu);
	}
}
function clearSeat(){
	for (var i=0;i<stuSeat.length;i++) {
			stuSeat[i].style.backgroundColor='';
			stuSeat[i].mark=false;
		}
}
function getElementId(element){
	return document.getElementById(element);
}
////清空所有座位
//for (var i=0;i<arrStu.length;i++) {
//	warp.removeChild(stuSeat[i]);
//}
//stuSeat.length=0;