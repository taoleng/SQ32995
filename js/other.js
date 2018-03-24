(function(){
	
	
	
	var i=3,num=$(".wrapper_sixyear_time"),t,timer;
	
	t=setTimeout(function(){
		
			$(".wrapper_red_envelope").show()
			
			clearTimeout(t);
			
			timer=setInterval(function(){
				i--;
				num.html(i)
				if(i==0){
					clearInterval(timer)
					num.hide();
					$(".wrapper_red_envelope_mod").show()
				}
				
			},1000);
			
		},1000)
	
	
	
	
	
	
})()
//点击红包   出弹窗
$(".wrem_wrap p").on('touchstart',function(){
	$(".wrapper_get").show();
});

//点击领取   关弹窗
$(".wgwl_get").on('touchstart',function(){
	$(".wrapper_get").hide();
});