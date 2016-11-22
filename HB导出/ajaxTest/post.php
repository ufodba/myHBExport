<?php
	header('content-text:text/html; charset="utf-8"');
	error_reporting(0);
	
	$name = $_POST['username'];
	$age  = $_POST['age'];

	echo "名字：{$name}，年龄：{$age}";
?>