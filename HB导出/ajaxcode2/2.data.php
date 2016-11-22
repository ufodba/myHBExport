<?php
	//$t=num /str
	//通过t参数判断取值数组
	$t = isset($_GET['t']) ? $_GET['t']:'num';

	$arr1 = array('1111','2222','3333');
	$arr2 = array('aaaa','bbbb','cccc');
	
	if($t == 'num'){
		$data = json_encode($arr1);
		echo "fn1($data)";
	}else{
		$data = json_encode($arr2);
		echo "fn2($data)";
	}
	
	//array [lily,lucy]
	//echo "fn($data)";

?>