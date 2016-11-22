$(function(){
	var stuName=['李为龙',
				'邓晓丰',
				'陈健',
				'吴闻',
				'刘世颖',
				'韦文会',
				'冼瑞健',
				'李家盛',
				'程建政',
				'周喜良',
				'孙志亮',
				'钟利民',
				'张超凡',
				'陈峰',
				'樊占军',
				'李城',
				'朱何优',
				'阳聪',
				'俞钧龙',
				'傅超军',
				'刘驰誉',
				'钟伟伟',
				'刘志明',
				'李君',
				'马红亮',
				'贾亚丽'];
	var rows=Math.ceil(stuName.length/4);
	
	//加载学生
	addStu(4);
	
	//点击事件
	userClick();
	
	//改变列数
	$('#userSubmit').on('click',function(){
		var inpNum=$('#numberInp')[0].value;
		if (inpNum<13 && inpNum>0 && inpNum==parseInt(inpNum)) {
			addStu(inpNum);
			userClick();
		} else {
			alert('太随便不好，真的！');
		}
//		$('#numberInp').attr('value','');
		$('#numberInp')[0].value='';
	});
	
	function addStu(inpNum) {
		$('thead').empty();
		for (var i=0; i<inpNum; i++) {
			$('thead').append('<th class="text-center">第'+(i+1)+'排</th>');
		}
		$('tbody').empty();
		var rows=Math.ceil(stuName.length/inpNum);
		for (var i=0; i<rows; i++) {
			var row=$('#userTd').append('<tr id="row'+i+'"></tr>');
			for (var j=0; j<inpNum; j++) {
				if(inpNum*i+j<stuName.length){
					var col=$('#row'+i+'').append('<td>'+stuName[inpNum*i+j]+'</td>');
				}
			}
		}
	}
	function userClick() {
		$('td').on('click',function(){
			$('td[class="userClick"]').addClass('userOutClick');
			$('td').removeClass('userClick');
			$(this).removeClass('userOutClick');
			$(this).addClass('userClick');
		});
	}
});