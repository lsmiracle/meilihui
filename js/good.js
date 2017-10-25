$(function(){
  var str;
	$.ajax({
   	    	type:"GET",
   	    	url:"php/getGoodsList.php",
   	    	async:true,
   	    	cache:false,
   	    	success:function(data){
   	    	    str=eval(data);
   	    	    for(var i=0;i<str.length;i++){
   	    	    	//str1是每个商品列表的结构
   	    	    	let str1 = 
   	    	    	"<div class='productList'>"
   	    	    	    +"<div class='productList-img' prodectId='"+str[i].goodsId+"'>"
   	    	    	       +"<a><img src='img/"+str[i].goodsImg+"'"+"title='"+str[i].goodsDesc+"'/></a>"
   	    	    	       +"<div class='productList-type'>"
   	    	    	           +"<div class='productList-size'>"
   	    	    	              +"<ul class='size'>"
   	    	    	                 +"<li>"+str[i].beiyong1+"</li>"
   	    	    	                 +"<li>"+str[i].beiyong2+"</li>"
   	    	    	                 +"<li>"+str[i].beiyong3+"</li>"
   	    	    	                 +"<li>"+str[i].beiyong4+"</li>"
   	    	    	              +"</ul>"
   	    	    	              +"<ul class='size-img'>"
   	    	    	                 +"<li><img src='img/"+str[i].beiyong5+"' title='"+str[i].goodsDesc+"'/></li>"
   	    	                       +"<li><img src='img/"+str[i].beiyong6+"' title='"+str[i].goodsDesc+"'/></li>"
   	    	                    +"</ul>"
   	    	                 +"</div>"
   	    	                 +"<ul class='size-infro'>"
   	    	                    +"<li>"
   	    	                       +"<h3>规格/型号</h3>"
   	    	                       +"<p>"+str[i].beiyong7+"</p><p>【详情参考尺寸测量信息】</p>"
   	    	                    +"</li>"
   	    	                    +"<li>"
   	    	                       +"<h3>规格/型号</h3>"
   	    	                       +"<p>"+str[i].beiyong8+"</p><p>【详情参考尺寸测量信息】</p>"
   	    	                    +"</li>"
   	    	                    +"<li>"
   	    	                       +"<h3>规格/型号</h3>"
   	    	                       +"<p>"+str[i].beiyong9+"</p><p>【详情参考尺寸测量信息】</p>"
   	    	                    +"</li>"
   	    	                    +"<li>"
   	    	                       +"<h3>规格/型号</h3>"
   	    	                       +"<p>"+str[i].beiyong10+"</p><p>【详情参考尺寸测量信息】</p>"
   	    	                    +"</li>"
   	    	                 +"</ul>"
   	    	              +"</div>"
   	    	          +"</div>"
   	    	          +"<div class='productList-infro'>"
   	    	              +"<p>M&E</p>"
   	    	              +"<p>"+str[i].beiyong12+"</p>"
   	    	              +"<p><span>￥"+str[i].goodsPrice+"</span><span>￥"+str[i].beiyong11+"</span></p>"
   	    	          +"</div>"
   	    	      +"</div>";
   	    	      $(".good-content-list").append(str1); 
   	    	      $(".productList .productList-img").click(function(){
   	    	      	var id = $(this).attr('prodectId');
								 	  $(this).find("a").attr("href","shop.html?id="+id);
								 });
   	    	    }
   	    	    $(".good-content-page span b").text(str.length);
   	    	      //滑过商品时让其对应的的商品规格显示
								 $(".productList-img").hover(
								  	function(){
								  	 	$(this).children(".productList-type").toggle();
								  	 	$(this).next(".productList-infro").toggle();
								  });
								  
								  //给尺寸的信息栏定位
								var left;
								  	for(var j=0;j<$(".size-infro>li").length;j++){
								  		let index = $(this).index();
									 	$(".size-infro>li")[j].style.left = left+"px";
									 	left += 55;
								   }
								   //滑过商品型号显示信息描述
								$(".productList .size>li").hover(function(){
								  	 let index = $(this).index();
								  	$($(this).parent().siblings(".size-infro").children()[index]).toggle();
								});
								  //滑过商品种类，让其显示在放置商品放大效果的位置
								$(".size-img>li>img").mouseover(function(){
								  	let index = $(this).index();
								  	let src = $(this).attr("src");
								  	$(this).parents(".productList-type").prev().children("img").attr("src",src);
								  	$(this).css("border","1px solid black");
								});
								 $(".size-img>li>img").mouseout(function(){
								 	  $(".size-img>li>img").css("border","none");
								 });
								 
   	    	}
   	    });
  
	
	  
});