<?php
	header('content-text:text/html; charset="utf-8"');
	error_reporting(0);
	
	$name = $_GET['username'];
	$age = $_GET['age'];
	
	//print "名字:{$name},年龄:{$age}";
	echo "名字:{$name},年龄:{$age}";

?>