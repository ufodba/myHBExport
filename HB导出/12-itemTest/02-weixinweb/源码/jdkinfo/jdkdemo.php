<?php

	require_once("config.php"); 
	include('jssdk.php');
	ini_set('date.timezone','Asia/Shanghai');
	$appUrl = $_GET['appUrl'];//需要接收js的某个get参数
    $jssdk = new JSSDK(APP_ID, APP_SECRET,$appUrl);//声明了一个类
    $signPackage = $jssdk->GetSignPackage(); 
    $result =  json_encode($signPackage);
	//print_r($signPackage);//打印数组
	//exit;//设置的结束 
	$result=json_encode($signPackage); 
	echo  $result;
	exit;
?>