<?php
	$value = $_REQUEST['flag'];
	if ('java' == $value) {
		echo 'hello java';
	} else if('php') {
		echo "hello php";
	} else if('javascript') {
		echo "hello javascript";
	}else{
		echo'....';
	}
?>
