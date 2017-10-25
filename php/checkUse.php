<?php
    header("content-type:text/html;charset=utf-8");
    //接收客户端的数据
    $userId = $_GET['userName'];
    //处理
    //链接数据库服务器
    $con = mysql_connect("localhost","root","1314521");
    if(!$con){
    	echo "-1";
    }else{
    	//选择数据库
    	mysql_select_db("meilihui",$con);
    	//执行SQL语句(查)
    	$sqlStr = "select * from vipUser where userName='".$userId."'";
        //echo $sqlStr;
        $result = mysql_query($sqlStr,$con);
        //关闭数据库
        mysql_close($con);
        
        //数据库中查询出结果，表示用户名已经存在表中。
        if(mysql_num_rows($result)==1){
        	echo "1";
        }else{
        	echo "0";
        }
    }
?>