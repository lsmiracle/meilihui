$(function(){
	
	//获取保存的cookie
	var user = getCookie("userName");
	$("#myAccount").text(user);
	if($("#myAccount").text()==user){
		$("#myAccount").attr("href","shopCar.html");
		$("#myName").text("退出");
		$("#myName").attr("href","register.html");
	}
	$("#myName").click(function(){
		 removeCookie("userName");
	    if($("#myName").text()=="退出"){
	    	$("#myName").text("登录");
	    	$("#myName").attr("href","index.html");
	    	if($("#myName").text()=="登录"){
		    	$("#myAccount").text("注册有礼");
		    	$("#myAccount").attr("href","login.html");
	        }
	    }
	});
	
	 //给导航栏的所属信息定位
	 $(".header-nav").css("position","absolute");
	  var left = 300;
	 for(var i=0;i<$(".header-nav").length;i++){
	 	$(".header-nav")[i].style.left = left+"px";
	 	left += 87;
	 }
	  //滑过导航时显示其所属信息
	 $(".header-bottom-left>a").hover(
	 	function(){
	 	 let index = $(this).index();
	 	 $($(".header-nav")[index-1]).toggle();
	  });
	   //活动开始
	  let d = new Date();
	      d = d.getDay();
	      
	  $(".liClass").click(function(){
	  	  $(this).css("border-bottom","4px solid black");
	  	  let index = $(this).index();
          for(var i=0;i<$(".weekLi").length;i++){
          	if(i==index){
          		$($(".weekLi")[i]).show();
          		let newHeight = $(this).outerHeight();
          		$("#weekLiId").css("height","newHeight");
          	}else{
          		$($(".liClass")[i]).css("border-bottom","none");
          	    $($(".weekLi")[i]).hide();
          	}
          }  
	  });
});

       //获取url中的参数
        function getUrlParam(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
            if (r != null) return unescape(r[2]); return null; //返回参数值
        }