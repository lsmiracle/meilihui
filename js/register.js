$(function(){
	   $("#userNameId").blur(function(){
		 	  var regNumber= /^1[34578]\d{9}$/;;
		 	  var regMail = /^[1-9]\d{5,}@{1}q{2}(\.com)$/;
		      var nameStr=$("#userNameId").val();
		     if(regNumber.test(nameStr) || regMail.test(nameStr)){
		         $("#userMsg").text("√");

		     }else{
		     	  $("#userMsg").text("x");
		     }
	   });
        //密码
	   $("#userPassId").blur(function(){
		    var userpassStr=$("#userPassId");
		    var passwordStr=$("#userWordId");
		    passWord(userpassStr,passwordStr);
	   });
	   $("#btnId").click(function(){
	   	    $.ajax({
	   	    	type:"POST",
	   	    	url:"php/register.php",
	   	    	async:true,
	   	    	data:{
	   	    		userName:$("#userNameId").val(),
	   	    		userPass:$("#userPassId").val()
	   	    	},
	   	    	success:function(data){
	   	    		if(data=='1'){
	   	    			//保存cookie
	   	    			addCookie("userName",$("#userNameId").val(),7);
	   	    			//跳转到首页
	   	    			location.href = "index.html"
	   	    		}else{
	   	    			$("#registerError").text("用户名或密码有误");
	   	    		}
	   	    	}
	   	    });
	   });
});
