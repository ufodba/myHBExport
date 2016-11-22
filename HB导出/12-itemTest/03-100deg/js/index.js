//$(function(){
//	for (var i=0; i<42; i++) {
//		$('.dateDay').append('<li></li>');
//	}
//});
window.onload=function (){
	var oUl=document.getElementById('dateDay');
	var changeCity = document.getElementById('changeCity').getElementsByTagName('dd');
	var searchBtn = document.getElementById('searchBtnLink').getElementsByTagName('li');
	var searchTxt = ['例如：荷塘夜色，月影迷','例如：这是一只大象','例如：灯火暗淡的黎明','例如：朝阳初起意渐暖','例如：柳暗花明又一村'];
	var searchContent = document.getElementById('searchText');
	var fangun = document.getElementById('fangun');
	var runBtn = document.getElementById('runBtn').getElementsByTagName('div');
	var shopBtn = document.getElementById('shopBtnWarp').getElementsByTagName('div');;
	
	var nowTop=-6;
	var num=0;
	var moveFlag=true;
	
	for (var i=0; i<42; i++) {
		var oLi=document.createElement('li');
		oLi.innerHTML=i;
		oUl.appendChild(oLi);
	}
	for (var j=0; j<changeCity.length; j++) {
		changeCity[j].index=j;
		changeCity[j].onclick=function(){
			for (var i=0; i<changeCity.length; i++) {
				changeCity[i].getElementsByTagName('a')[0].className='';
			}
			this.getElementsByTagName('a')[0].className='active';
		}
	}
	for (var j=0; j<searchBtn.length; j++) {
		searchBtn[j].index=j;
		searchBtn[j].onclick=function(){
			for (var i=0; i<changeCity.length; i++) {
				searchBtn[i].className=('');
				searchBtn[i].className=('PIE btnLink');//兼容IE67
			}
			this.className=('PIE btnLink active1');
			searchContent.value=searchTxt[this.index];
			searchContent.style.color= '#F7BEA6';
		}
	}
	searchContent.index=true;
	searchContent.onfocus=function(){
		
		if(this.index)
		{
			this.txt=this.value;
			this.value='';
			this.style.color='black';
			this.index=false;
		}
	}
	
	searchContent.onblur=function(){
		
	  if(this.value=='')
	  {
	  	this.value=this.txt;
	  	this.style.color= '#F7BEA6';
	  	this.index=true;
	  }
	}
	//上移和下移
	setInterval(function(){
		if (moveFlag) {
			move('up');
		}
	},6000);
	
	runBtn[0].onclick=function(){
		if (moveFlag) {
			move('up');
		}
	}
	runBtn[1].onclick=function(){
		if (moveFlag) {
			move('down');
		}
	}
	
	function move(a){
		if(a=='up'){
			moveFlag=false;
			var timer=setInterval(function(){
				if(parseInt(fangun.style.top)<-58){
					nowTop=19;
				}
				nowTop--;
				num++;
				fangun.style.top=nowTop+'px';
				if(num>25){
					num=0;
					moveFlag=true;
					clearInterval(timer);
				}
			},50);
		}
		if(a=='down'){
			moveFlag=false;
			var timer=setInterval(function(){
				if(parseInt(fangun.style.top)>-6){
					nowTop=-83;
				}
				nowTop++;
				num++;
				fangun.style.top=nowTop+'px';
				if(num>25){
					num=0;
					moveFlag=true;
					clearInterval(timer);
				}
			},50);
		}
	}
	btnWarp(shopBtn,'active2');
	function btnWarp(btnObjList,active) {
		for (var i=0; i<btnObjList.length; i++) {
			btnObjList[i].onclick=function(){
				for (var j=0; j<btnObjList.length; j++) {
					var temp=btnObjList[j].className;
					if (temp.indexOf(active)) {
						temp=temp.substring(0,(temp.length-active.length));
						console.log(temp);
					}
					
//					console.log(temp);
//					btnObjList[j].className='';
//					btnObjList[j].className='';
				}
			}
		}
	}
}
