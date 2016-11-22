window.onload=function(){
	var oUl=$id('headerNav');
	var aLi=$tag(oUl,'li');
	var aDiv=$class(oUl,'up');
	var arrow=$id('arrow');
	var iNow=0;
	
	
	
	
	aDiv[0].style.width='100%';
	arrow.style.left=aLi[0].offsetLeft+(aLi[0].offsetWidth-arrow.offsetWidth)/2+'px';
	for (var i=0; i<aLi.length; i++) {
		aLi[i].index=i;
		aLi[i].onclick=function(){
			iNow=this.index;
			move(iNow);
		}
	}
	
	
	function move(num) {
		for (var i=0; i<aDiv.length; i++) {
			aDiv[i].style.width=0;
		}
		aDiv[num].style.width='100%';
		arrow.style.left=aLi[num].offsetLeft+(aLi[num].offsetWidth-arrow.offsetWidth)/2+'px';
	}
	
	
	/*********************封装对象获取方法******************************/
	function $id(id) {
		var obj=document.getElementById(id);
		return obj;
	}
	function $tag(obj,tagName) {
		var arrObj=obj.getElementsByTagName(tagName);
		return arrObj;
	}
	function $class(obj,className) {
		var arrObj=obj.getElementsByTagName('*');
		var arr=[];
		for (var i=0; i<arrObj.length; i++) {
			if (arrObj[i].className == className) {
				arr.push(arrObj[i]);
			}
		}
		return arr;
	}
}
