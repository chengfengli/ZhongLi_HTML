$(function(){
	$('.Computing_menu li').click(function(e){
		var index=$(this).index();
		$(".Computing_content > div").eq(index).show().siblings().hide();
	})
});