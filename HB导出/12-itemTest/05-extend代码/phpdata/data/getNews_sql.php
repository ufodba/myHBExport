<?php
header('content-type:text/html;charset="utf-8"');

require_once("./data.class.php");//加载一个文件，加载一次
$dataObj = new Data();//新建对象
$news = $dataObj->getDataFromAjax();//调用对象里的一个方法
/**
 * 1、创建数据库，创建表，  进行数据保存
 * 2、数据库连接
 * 3、程序里写sql语句，获取数据库内容
 * 4、数据库获取的内容赋值给 $news
 */
//print_r($news);
//exit(0);
error_reporting(0);

$callback = $_GET['callback'];//接收js传过来的值
$result = json_encode($news);//将数组转成json格式  json_decode()将json转成数组
echo $callback."($result)";//把返回值和json连成字符串
exit;
