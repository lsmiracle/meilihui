jQuery.fn.extend({
	checked:function(isChecked){
		this.each(function(){
			this.checked = isChecked;
		});
	},
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