$(function(){
	$("#useNameId").blur(function(){
		 	var regNumber= /^1[34578]\d{9}$/;;
		 	var regMail = /^[1-9]\d{5,}@{1}q{2}(\.com)$/;
		    var nameStr=$("#useNameId").val();
		    if(regNumber.test(nameStr) || regMail.test(nameStr)){
		        $.ajax({
					type:"get",
					url:"php/checkUse.php",
					async:true,
					data:{
						userName:$(this).val()
					},
					success:function(data){
						if(data=="1"){
							$("#useMsg").text("用户名已存在");
						}else if(data=="0"){
							$("#useMsg").text("√");
						}else if(data=="-1"){
							$("#useMsg").text("服务器端异常");
						}
					}
		        });

		     }else{
		     	  $("#useMsg").text("x");
		     }
	   });
        //密码
	   $("#usePassId").blur(function(){
		      var userpassStr=$("#usePassId");
		      var passwordStr=$("#useWordId");
		       passWord(userpassStr,passwordStr);
	   });
	   //验证两次输入密码是否一致
	   $("#checkPassWord").blur(function(){
		    let checkPassWord = $("#usePassId").val();
			if($("#checkPassWord").val()==checkPassWord){
			   	$("#useCheckId").text("√");
			}else{
			   	$("#useCheckId").text("×");
		    };
	   });
	   
	    //随机产生验证码
	    $("#checkWordId").val(function(){
	    	var code="";
			var arr=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q"];
			// var colorArr=['red','black','green','orange','ac0','yellow','pink','#999'];
			 for(i=0;i<4;i++){
			 	//var color1=parseInt(Math.random()*8);
			    var index=parseInt(Math.random()*53);
			    code=code+arr[index];
			 }
			 return code;
		});
		/*//点击验证，让其随机产生
		$("#checkWordId").click(function(){
			var code="";
		    var arr=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q"];
			for(i=0;i<4;i++){
			    var index=parseInt(Math.random()*53);
			    code=code+arr[index];
			}
			return code;
		});*/
	    //验证验证码
	    $(".btnClass").blur(function(){
	  	    let num = $("#checkWordId").val();
	  	    if($(".btnClass").val()==num){
	  	    	$("#checkDate").text("√");
	  	    }else{
	  	    	$("#checkDate").text("×");
	  	    }
	    });
	  
	 
	  	/*let arr=[];
	  	 for(var i=0;i<$(".register-content-right form>span").length;i++){
	  	 	let text1 = $($(".register-content-right form>span")[i]).text();
	  	 	arr.push(text1);
	  	 }
	  	 if((arr[0] & arr[1] & arr[2] & arr[3])=='√'){
	  	 		$(".register-content-right form").submit();
	  	 }*/
	   
});
