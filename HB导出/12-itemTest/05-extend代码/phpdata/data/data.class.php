<?php

    require_once("./db.class.php");
 
  	class Data{
		//获取ajax的数据
		public function getDataFromAjax(){
			$db = new DB();//新建一个数据库连接
			@$data = $db->getObjListBySql("SELECT `title`,`date` FROM listdata ");//查找数据库相应表的所有数据
			//从数据库查询信息
			if(count($data)!=0){
				return $data;
			}else {
				return null;
			}
			
			
		}
		
	} 
  
?>