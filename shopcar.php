<?php
     header("Content-type:text/html; charset=utf-8");
     $shopCar =$_GET['shopCar-goods-infor'];
     //处理
     //连接服务器数据库
     $con = mysql_connect("localhost","root","1314521");
     if(!$con){
     	echo "-1";
     }else{
     	//选择数据库
     	musql_select_db("meilihui",$con);
     	//执行SQL语句（查）
   	    $sqlStr = "select * from shoppingCart";
        $result = mysql_query($sqlStr,$con);
         //关闭数据库
        mysql_close($con);
        //数据库中查询出结果，表示登录成功。
		if(mysql_num_rows($result)==1){
			echo "1";
		}else{
			echo "0";
		}	
     }
     
?>