
$(function(){
    //获取保存的cookie
    var user = getCookie("userName");
	//获取url参数
	var dataId = getUrlParam('id');
    $.ajax({
    	type:"GET",
    	url:"php/getGoodsInfo.php",
    	async:true,
    	cache:false,
    	data:{
    		goodsId:dataId
    	},
    	success:function(data){
    		let str = eval("("+data+")");
    		let str2 = 
    		"<div id='shop-content'>"
	    		+"<aside class='shop-content-left'>"
	               +"<div id='shop-content-left-top'>"
	                  +"<img src='img/"+str.goodsImg+"'/>"
	               +"</div>"
	               +"<div class='jiantou'>></div>"
	               +"<ul>"
	                  +"<li><img src='img/"+str.beiyong5+"'/></li>"
	                  +"<li><img src='img/"+str.beiyong6+"'/></li>"
	               +"</ul>"
	             +"</aside>"
	             +"<aside class='shop-content-right'>"
		             +"<div class='shop-title'>"
		                  +"<p class='bianhao'>"+str.goodsType+"</p>"
		                  +"<span>分享</span>"
		             +"</div>"
		             +"<p>"+str.goodsName+"</p>"
		             +"<div class='shop-price'>"
		                  +"<p>￥<span>"+str.goodsPrice+"</span></p>"
		                  +"<p>￥"+str.beiyong11+"</p>"
		                  +"<p>2.4<span>折</span></p>"
		             +"</div>"
		             +"<p>购M&E 精选初秋女士羊绒；M&E 精选初秋男士羊绒专场任意产品，累计满490元，减50元；满790元，减100元；满1590元，减150元；满1990元，减200元</p>"
		             +"<p class='shop-color'>"
		                  +"<span>颜色：</span>"
		                  +"<span>"+str.beiyong12+"</span>"
		             +"</p>"
		             +"<div class='shop-good-display'>"
		                   +"<img src='img/"+str.goodsImg+"'/>"
		                   +"<p>"+str.beiyong12+"</p>"
		             +"</div>"
		             +"<div class='shop-size'>"
		                  +"<div class='size-choice'>"
		                      +"<p>选择尺寸</p><p>请选择尺寸</p>"
		                  +"</div>"
		                  +"<span>"+str.beiyong1+"</span><span>"+str.beiyong2+"</span><span>"+str.beiyong3+"</span><span>"+str.beiyong4+"</span>"
		    	     +"</div>"
		    	     +"<ul class='shop-size-infro'>"
		    	           +"<li><h3>规格/型号:<b>"+str.beiyong7+"</b></h3><p>【详情参考尺寸测量信息】</p></li>"
		    	           +"<li><h3>规格/型号:<b>"+str.beiyong8+"</b></h3><p>【详情参考尺寸测量信息】</p></li>"
		    	           +"<li><h3>规格/型号:<b>"+str.beiyong9+"</b></h3><p>【详情参考尺寸测量信息】</p></li>"
		    	           +"<li><h3>规格/型号:<b>"+str.beiyong10+"</b></h3><p>【详情参考尺寸测量信息】</p></li>"
		    	     +"</ul>"
		    	     +"<div class='shop-data'>"
		                   +"<p>数量</p>"
		                   +"<p>"
		                       +"<input id='subtract' type='text' value='-' style='color: #999;'/>"
		                       +"<span>1</span>"
		        	           +"<input id='plus' type='text' value='+'/>"
		        	       +"</p>"
		        	       +"<p><span>预计出库日期：</span>"+str.beiyong13+"</p>"
		        	 +"</div>"
		        	       +"<input id='add-car' type='button' value='加入购物车' style='background: black;'/>"
		        	       +"<input id='shopping' type='button' value='立即购买' style='background: red;margin-left: 20px;'/>"
		        	       +"<div class='shop-time'>"
		        	          +"<p><span>限时抢购</span><span>活动剩余</span></p>"
		        	          +"<p><b class='days'></b>天<b class='hours'></b>时<b class='minutes'></b>分<b class='seconds'></b>秒</p>"
		                   +"</div>"
		                   +"<div class='shop-declare'><span>正</span><p>100%正品保证</p><span>退</span><p>7天无理由退货</p></div>"
	    	     +"</aside>"
	    	+"</div>"
	    	+"<div class='shop-describe'>"
	    	    +"<p>SIZE INFO</p><p>尺寸信息</p><p>单位：CM</p>"
	    	    +"<table>"
	    	        +"<tr><th class='colume'>品牌尺寸</th><th>105</th><th>110</th><th>115</th></tr>"
    	            +"<tr><td class='colume'>规格型号</td><td>170/88A</td><td>175/92A</td><td>180/96A</td></tr>"
    	            +"<tr><td class='colume'>衣长</td><td>65</td><td>66</td><td>67</td></tr>"
        			+"<tr><td class='colume'>胸围</td><td>102</td><td>106</td><td>110</td></tr>"
        			+"<tr><td class='colume'>腰围</td><td>94</td><td>98</td><td>102</td></tr>"
        			+"<tr><td class='colume'>肩宽</td><td>42</td><td>43</td><td>44</td></tr>"
        			+"<tr><td class='colume'>袖长</td><td>58</td><td>59</td><td>60</td></tr>"
        			+"<tr><td class='colume'>下摆</td><td>78</td><td>82</td><td>86</td></tr>"
        		+"</table>"
            +"</div>";
            
    	    $(".shop-content").append(str2);  
				//商品尺寸信息信息定位
			    var left = 0;
			    for(var i=0;i<$(".shop-size-infro>li").length;i++){
			    	$(".shop-size-infro>li")[i].style.left = left+"px";
				 	left += 80;
			    }
				//滑过商品尺寸，显示详细信息
				$(".shop-size>span").mouseenter(function(){
					let index = $(this).index();
					$($(".shop-size-infro>li")[index-1]).show();
				});
				$(".shop-size>span").mouseleave(function(){
					let index = $(this).index();
					$($(".shop-size-infro>li")[index-1]).hide();
				});
				$(".shop-size>span").click(function(){
					$(".shop-size>span").removeClass("active");
					$(this).addClass("active");
					$(".size-choice p")[1].style.display = "none";
				 }); 
				//购买商品数量
				$("#plus").click(function(){
					$("#plus").prev().text(Number($("#plus").prev().text())+1);
				});
				$("#subtract").click(function(){
					if($("#subtract").next().text()!=1){
						$("#subtract").next().text(Number($("#subtract").next().text())-1);
					}
				});
				//加入购物车
				$("#add-car").click(function(){
					if($(".shop-size .active").length==1){
					    let num1 = Number($("#plus").prev().text());
						let num2 = Number($(".shop-price>p:first>span").text());
						let num3 = Number($(".header-bottom-right>a:first").text());
						let num4 = Number($(".header-bottom-right .tatol").text());
						let num = num4+num1*num2;
						$(".header-bottom-right>a:first").text(num3+1);
						$(".header-bottom-right .tatol").text(num);
						$.ajax({
					    	type:"GET",
					    	url:"php/addShoppingCart.php",
					    	async:true,
					    	cache:false,
					    	data:{
					    		vipName:user,
					    		goodsId:dataId,
					    		goodsCount:$("#subtract").next().text()
					    	},
					    
					    	success:function(data){
					    		if(data=="1"){
					    			//保存当前商品加入购物车的数量
					    			addCookie(dataId,$("#subtract").next().text());
					    			//alert("添加成功");
					    			location.href = "shopCar.html";
					    		}else if(data=="0"){
					    			alert("添加失败");
					    		}
					    		
					    	}
					    });
						
					}else{
						$(".size-choice p")[1].style.display = "block";
					}
				});
				//点击细节图让其放大显示
				$(".shop-content-left ul>li").click(function(){
					let src = $(this).children("img").attr("src");
					$("#shop-content-left-top>img").attr("src",src);
				});
        }
     }); 
   });
   
 
function checkTime(i) { //将0-9的数字前面加上0，例1变为01 
	if(i < 10) {
		i = "0" + i;
	}
	return i;
}

function leftTimer(year, month, day, hour, minute, second) {
	var leftTime = (new Date(year, month - 1, day, hour, minute, second)) - (new Date()); //计算剩余的毫秒数
	var days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数 
	var hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时 
	var minutes = parseInt(leftTime / 1000 / 60 % 60, 10); //计算剩余的分钟 
	var seconds = parseInt(leftTime / 1000 % 60, 10); //计算剩余的秒数 
	days = checkTime(days);
	hours = checkTime(hours);
	minutes = checkTime(minutes);
	seconds = checkTime(seconds);
	setInterval("leftTimer(2017, 10, 25, 12, 27, 50)", 1000);
	$(".days").text(days);
	$(".hours").text(hours);
	$(".minutes").text(minutes);
	$(".seconds").text(seconds);
}