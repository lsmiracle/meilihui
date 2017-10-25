<?php
    header("Content-type:text/html; charset=utf-8");
    //接收客户端信息
    $userId = $_POST['userName'];
    $userPass = $_POST['usePass'];
    //处理（判断该用户是否被注册过，如果没有相互测过，保存用户输入的信息到数据库中）
    //1，链接服务器数据库
       $con = mysql_connect("localhost","root","1314521");
       if(!$con){
       	     echo "注册失败,服务器异常请稍后再试...";
       }else{
	        //2.选择数据库
	        mysql_select_db("meilihui",$con);
		    //3.执行SQL语句（增）
		    $sqlStr = "insert into vipUser(userName,userPass) values('".$userId."','".$userPass."')";
		   //echo $sqlStr;
		   $t = mysql_query($sqlStr,$con);
		    //4.关闭数据库
		    mysql_close($con);
		    
		    //echo $t;
		    //响应成功与否
		    if($t==0){
		    	echo "注册失败，用户名已存在，请重新输入";
		    }else{
		    	echo '<script>location.href="../register.html"</script>'; 
		    }
       
    }
   
?>