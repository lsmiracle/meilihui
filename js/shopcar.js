$(function(){
	//获取保存的cookie
	var user = getCookie("userName");
	$.ajax({
    	type:"GET",
    	url:"php/getShoppingCart.php",
    	async:true,
    	cache:false,
    	data:{
    		vipName:user
    	},
    	success:function(data){
    		let str = eval("("+data+")");
    		for(var i=0;i<str.length;i++){
    			let data11 = getCookie(str[i].goodsId);
    		let str4 = 
    		"<div class='goods-detail'>"
    		    +"<input type='checkbox' class='radio-button'/>"
    		    +"<div class='shopCar-goods-infor'>"
    		        +"<img src='img/"+str[i].goodsImg+"'/>"
    		        +"<div class='color-add-size'>"
    		            +"<a href='shop.html'>"+str[i].goodsType+"</a>"
    		            +"<a href='shop.html'>"+str[i].goodsName+"</a>"
    		            +"<div class='color-add-size-infor'>"
    		                +"<div>"
    		                    +"<p>颜色：<span>"+str[i].beiyong12+"</span></p><p>尺寸：<span class='size'>S</span></p>"
    		                +"</div>"
    		                +"<input type='button' value='修改'/>"
    		            +"</div>"
    		            +"<div class='shopCar-size'>"
    		                +"<p class='close'>×</p>"
    		                +"<div class='size-alter'>"
    		                    +"<p>尺寸</p>"
		                        +"<div>"
		                            +"<ul class='shopCar-size-list'><li>"+str[i].beiyong1+"</li><li>"+str[i].beiyong2+"</li><li>"+str[i].beiyong3+"</li><li>"+str[i].beiyong4+"</li></ul>"
		                        +"</div>"
    		                +"</div>"
    		                +"<input type='button' value='确定'/>"
		                +"</div>"
		            +"</div>"
		            +"<p class='goods-detail-price'>￥<span class='unitPrice'>"+str[i].goodsPrice+"</span></p>"
		            +"<p class='shopCar-data' numId='"+str[i].goodsId+"'>"
		                +"<input class='shopCar-data-subtract' type='button' value='-'/>"
		                +"<span>"+data11+"</span>"
		                +"<input class='shopCar-data-plus' type='button' value='+'/>"
		            +"</p>"
		            +"<p class='goods-detail-price'>￥<span>0.00</span></p>"
		            +"<p class='goods-data-price'>￥<span class='total-price'>"+data11*str[i].goodsPrice+"</span></p>"
		            +"<input class='delete-good' type='button' value='删除'/>"
		            +"<div>"
		                +"<p>您确定要删除该商品吗？</p>"
		                +"<input class='cancel' type='button' value='取消'/>"
		                +"<input class='confirm' type='button' value='确定'/>"
		            +"</div>"
		        +"</div>"
		    +"</div>";
    		 $("#sect").append(str4); 
    		 //点击尺寸修改，显示能修改的尺寸信息
			$(".color-add-size-infor>input").click(function(){
				$(this).addClass("change");
				$(this).parent().addClass("styleChange");
				$(this).parents(".goods-detail").find(".shopCar-size").css("display","block");
				//判断尺寸是XL或者M...,点击修改，显示的页面尺寸与前边尺寸一样让其样式改变
				let text1 = $(this).prev().children("p:last").children().text();
				for(var i=0;i<$(this).parent().next().find(".shopCar-size-list>li").length;i++){
					if($($(this).parent().next().find(".shopCar-size-list>li")[i]).text()==text1){
						$($(this).parent().next().find(".shopCar-size-list>li")[i]).addClass("choiceSize");
						continue;
					}
				}
				//点击选中的尺寸，让其背景变黑，其他尺寸恢复正常
				$(".shopCar-size-list>li").click(function(){
					let that = this;
					$(that).parent().children().removeClass("choiceSize");
					$(that).addClass("choiceSize");
				});
				//点击确定按钮，让显示尺寸内容变成当前选中的尺寸
				$(this).parent().next().find("input").click(function(){
					let that = this;
					$(that).parent().prev().children("input").removeClass("change");
					$(that).parent().prev().removeClass("styleChange");
					if($(that).prev().find(".shopCar-size-list .choiceSize").length==1){
						let text2 = $(that).prev().find(".shopCar-size-list .choiceSize").text();
						$(that).parent().prev().find(".size").text(text2);
					};
					$(that).parent().css("display","none");
				});
				//点击关闭×，该显示框关闭
			   $(".close").click(function(){
			   	    let that = this;
					$(that).parent().prev().children("input").removeClass("change");
					$(that).parent().prev().removeClass("styleChange");
					$(that).parent().css("display","none");
			    });
			});
			//购买商品数量
			
			$(".shopCar-data-plus").click(function(){
				var numId = $(this).parent().attr("numId"),
					count = $(this).prev().text();
				let that = this;
				$.ajax({
				    	type:"GET",
				    	url:"php/updateGoodsCount.php",
				    	async:true,
				    	cache:false,
				    	data:{
				    		vipName:user,
				    		goodsId:numId,
				            goodsCount:1+Number(count)
				    	},
				    	success:function(data){
				    		console.log(data);
				    		if(data=="1"){
				    			var count = Number($(that).prev().text())+1;
				    			$(that).prev().text(count);
								addCookie(numId,count);
								let numDate1 = Number($(that).parent().prev().children(".unitPrice").text());
							    let numDate2 = Number($(that).prev().text());
							    let numDate = numDate1*numDate2;
							    $(that).parent().siblings(".goods-data-price").children(".total-price").text(numDate);
				    		}
				    		
				    	}
			     });
			});
			$(".shopCar-data-subtract").click(function(){
				var numId = $(this).parent().attr("numId");
				let that = this;
				$.ajax({
				    	type:"GET",
				    	url:"php/updateGoodsCount.php",
				    	async:true,
				    	cache:false,
				    	data:{
				    		vipName:user,
				    		goodsId:numId,
				            goodsCount:$(this).next().text()-1
				    	},
				    	success:function(data){
				    		if(data=="1"){
				    			if($(that).next().text()!=1){
								var count = Number($(that).next().text())-1;
				    			$(that).next().text(count);
								addCookie(numId,count);
								let numDate1 = Number($(that).parent().prev().children(".unitPrice").text());
						        let numDate2 = Number($(that).next().text());
						        let numDate = numDate1*numDate2;
						        $(that).parent().siblings(".goods-data-price").children(".total-price").text(numDate);
							    $(".shopCar-data-subtract").css("color","#000");
								}else if($(".shopCar-data-subtract").next().text()==1){
									$(".shopCar-data-subtract").css("color","#999");
								};
				    		}else if(data=="0"){
				    			$(that).next().text(Number($(that).next().text()));
				    		}
				    	}
			     });
				
			});
			//点击删除按钮，删除商品
			$(".delete-good").click(function(){
				var numId = $(this).prevAll(".shopCar-data").attr("numId");
			    $(this).next("div").css("display","block");
			    $(this).next("div").children(".cancel").click(function(){
			    	let that = this;
			       $(that).parent().css("display","none");
				});
			    $(this).next("div").children(".confirm").click(function(){
			    	let that = this;
			    	$.ajax({
				    	type:"GET",
				    	url:"php/deleteGoods.php",
				    	async:true,
				    	cache:false,
				    	data:{
				    		vipName:user,
				    		goodsId:numId
				    	},
				    	success:function(data){
				    		if(data=="1"){
				    			$(that).parent().css("display","none");
				    			$(that).parents(".goods-detail").remove();
				    		}else if(data=="0"){
				    			$(that).parent().css("display","none");
				    		}	
				    	}
			      });
			    });
			});
    		}

			//点击心愿行的任意一个，人让其对应的部分显示，其余的隐藏
			$(".status>p").click(function(){
				$(".status>p").css("background","none");
				$(this).css("background","#eee");
				let index = $(this).index();
				$("#detailBox>div").css("display","none");
				$($("#detailBox>div")[index]).css("display","block");
			});
			//点击input带有checkbox的按钮，给其增加一个属性，判断其祖先元素下增加的其属性的个数，大于等于1的让go-shopping的第一个隐藏，第二个显示
		    $("#detailBox input:radio").click(function(){
		    	$(this).addClass("hits");
		    	if($("#detailBox .hits").length!=0){
		    		$(".shopOne").css("display","none");
		    		$(".shopTwo").css("display","block");
		    	}
		    });
		   // 单选反选
			jQuery.fn.extend({
				//全选
				checked:function(isChecked){
					this.each(function(){
						this.checked = isChecked;
					});
				},
				//反选
				unchecked:function(){
					this.each(function(){
						this.checked = !this.checked;
					});
				},
				backControl:function(leaderDom){
					let isTrue = true;
					this.each(function(){
						if(this.checked==false){
							isTrue = false;	
						}
					});
					leaderDom.checked = isTrue;		
				}
			});
			$(function(){
				$("#choseAll").click(function(){
			        $(".shopCar-sell :checkbox").checked($("#choseAll")[0].checked);
		        });
				$("#choseAll1").click(function(){
					$(".shopCar-sell :checkbox").checked($("#choseAll1")[0].checked);
				});
				$("#lastCheckAll").click(function(){
					$(".shopCar-sell :checkbox").checked($("#lastCheckAll")[0].checked);
				});
				$("#sect .radio-button").click(function(){
					for(var i=0;i<$(".checkAll").length;i++){
						$("#sect .radio-button").backControl($(".checkAll")[i]);
					}
				});
			});
    	}
    });
	

});
