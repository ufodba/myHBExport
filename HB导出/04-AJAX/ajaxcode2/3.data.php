<?php
	
	$t = isset($_GET['t']) ? $_GET['t']:'num';
	
	$callback = isset($_GET['callback']) ? $_GET['callback'] :'fn1';
	//$callback = fn1   $callback = fn2


	$arr1 = array('1111','2222','3333');
	$arr2 = array('aaaa','bbbb','cccc');
	
	if($t == 'num'){
		$data = json_encode($arr1);
		
	}else{
		$data = json_encode($arr2);
		
	}
	//callback = fn1 ===echo "fn1($data)";
	echo "$callback($data)";

?>