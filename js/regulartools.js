//邮箱
//var reg = /^[\w\.]+@\w+\.\w+$/; //必须有@和.，而且@在.的前面，而且，@不能开头，@前面可以是数字字母下划线和点。
function mailBox(num1,num2){
    var reg = /^[1-9]\d{5,}@{1}q{2}(\.com)$/;
    if(reg.test(num1.value)){
        num2.text("√");
    }else{
    	num2.text("x");
    }
}

//密码
function passWord(num1,num2){
   //var reg = /^\d{6}(\*|\+)[a-z]{5}/;
    var reg = /^[a-zA-Z0-9]\d{5,}$/;
    if(reg.test(num1.value)){
        num2.text("√");
    }else{
    	num2.text("x");
    }
}

//身份证号码
function IDCardNumber(num1,num2){
	var reg = /^[1-9]\d{5}(1|2)\d{3}(0[1-9]|1[0-2])(0[1-9]|1\d|2\d|3[0-1])\d{3}[\dX]$/;
    if(reg.test(num1.value)){
        num2.innerHTML="√";
    }else{
    	num2.innerHTML="x";
    }
}


//手机号码
function moblieNumber(num1,num2){
	var reg = /^1[34578]\d{9}$/; 
	if(reg.test(num1.value)){
        num2.text("√");
    }else{
    	num2.text("x");
    }
}

//出生年月日
  function birthday(num1,num2){
  	var reg = /^(1|2)\d{3}[\.\/-](0[1-9]|1[0-2])[\.\/-](0[1-9]|1\d|2\d|3[0-1])$/;
     if(reg.test(num1.value)){
        num2.innerHTML="√";
    }else{
    	num2.innerHTML="x";
    }
  }

//电子邮箱
function emailAddress(num1,num2){
	var reg = /^[\w\.]+@\w+(\.com|\.net|\.cn|\.com\.cn)$/;
	if(reg.test(num1.value)){
        num2.innerHTML="√";
    }else{
    	num2.innerHTML="x";
    }
}

//邮政编码
function postalCode(){
	var reg = /^[1-9]\d{5}/;
	if(reg.test(num1.value)){
        num2.innerHTML="√";
    }else{
    	num2.innerHTML="x";
    }
}

//IP地址
function ipAddress(){
	var reg = /^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/;
    if(reg.test(num1.value)){
        num2.innerHTML="√";
    }else{
    	num2.innerHTML="x";
    }
}
