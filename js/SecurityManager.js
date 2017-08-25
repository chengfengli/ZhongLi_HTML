$(function(){
	$('.Application_scenarios li').click(function(e){
		var index=$(this).index();
		$(".Application_scenarios_content > div").eq(index).show().siblings().hide();
		$(".Application_scenarios li").css({'color':'#87898b','background':'#d1d3d6'});
		$(".Application_scenarios li:eq("+index+")").css({'color':'#FFFFFF','background':'#3F97D0'});
	})
});