<?php
	header('content-text:text/html; charset="utf-8"');
	error_reporting(0);
	
	//数组
	//$arr = array('lily','tom','lucy');
	
	//json数据  name:xiaoming 
	$arr2 = array('name'=>'xiaoming','age'=>32);
	
	//echo $arr;
	echo json_encode($arr2);
?>