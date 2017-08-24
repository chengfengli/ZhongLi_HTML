$(function(){
	$('.Application_direction li').click(function(e){
		var index=$(this).index();
		$(".Application_direction_content > div").eq(index).show().siblings().hide();
//		$(this).css({'color':'#FFFFFF','background':'#3F97D0'});
//		$(this).siblings().css('color':'#87898b','background':'#d1d3d6')
		$(".Application_direction li").css({'color':'#87898b','background':'#d1d3d6'});
		$(".Application_direction li:eq("+index+")").css({'color':'#FFFFFF','background':'#3F97D0'});
	})
});