$(function(){
	
	$(".header-bottom-left>a").mouseout(function(){
	 	$(this).css({"color":"white"});
	 	let index = $(this).index();
	 	$($(".header-nav")[index-1]).hide();
	 	$(".header-bottom-left>a")[0].style.color = "red";
	});
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
		/*轮播图*/
		$("#index-today-right").Slider({
					"width" : 322,
					"height" : 506,		
					//图片数组
					"imgs" : ["img/20170922185537688.jpg","img/20170922135428198.jpg","img/20170818182918105.jpg"],
					//时间间隔
					"timeSpace" : 2000,
					"btnObj" : {
						"width":20,
						"height":20,
						"bgColor":"gray",
						"highBgColor":"red",
						"isCircle": true
					}
		});
	
});