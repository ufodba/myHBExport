<?php
	header('content-text:text/html; charset="utf-8"');
	error_reporting(0);
	
	$arr =array(
		array('title'=>'奥巴马专机坠毁','time'=>'2016-9-20'),
		array('title'=>'奥巴马被黑人枪杀','time'=>'2016-9-18'),
		array('title'=>'奥巴马专车车祸','time'=>'2016-9-17'),
	) ;

	echo json_encode($arr);
?>