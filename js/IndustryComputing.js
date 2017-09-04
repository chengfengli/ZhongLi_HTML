$(function(){
	$('.Application_direction li').click(function(e){
		var index=$(this).index();
		$(".Application_direction_content > div").eq(index).show().siblings().hide();
		$(".Application_direction li").removeClass('active');
		$(this).addClass('active');
	})
});