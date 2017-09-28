<?php
   header("Content-type:text/html; charset=utf-8");
   //接收客户端的数据
   $userName = $_POST['userName'];
   $userPass = $_GET['userPass'];
   //
   if($userName=='lishan'){
		echo "亲，登录成功";
	}else{
		echo "亲，账户名有误请重新输入！";
	}
?>
