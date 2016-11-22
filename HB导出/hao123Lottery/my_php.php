<?php
	$value = $_REQUEST['action'];
	if ('getTxt' == $value) {
		$returnData = array(
			'nav1'	=>	 '完全没戏1',
			'nav2'  =>   '国足渣渣2',
			'nav3'  =>   '足协渣中渣3',
			'nav4'  =>   '国足渣渣4',
			'nav5'  =>   '足协渣中渣5',
			'nav6'  =>   '国足渣渣6',
			'nav7'  =>   '足协渣中渣7',
			'nav8'  =>   '国足渣渣8',
			'nav9'  =>   '足协渣中渣9',
			'nav10'  =>   '国足渣渣10',
		);
		echo json_encode($returnData);
	} 
	if ('getHeader' == $value) {
		$returnData = array(
			'background1'	=>	 '#ff4444',
			'background2'	=>	 '#ee3333',
			'background3'	=>	 '#ff3636',
			'background4'	=>	 '#ee3333',
			'background5'	=>	 '#ff5b5b',
			
		);
		echo json_encode($returnData);
	}
	
	if ('getGuangGao' == $value) {
		$returnData = array(
			'guanggao1'	=>	 'img/02.jpg',
		);
		echo json_encode($returnData);
	}
	
//	if ('getTxt' == $value) {
//		echo ;
//	} 
?>