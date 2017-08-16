function select_header(id){
	if(id){
		$('#'+id).addClass('bg_color').css("color","#fff");
	}else{
		$('#home').addClass('bg_color').css("color","#fff");
	}
	
}
$(function(){
	var id = $.cookie("id");
	select_header(id);
	$('#header li a').click(function(){
		var id=$(this).attr("id");
		if(!id){
			id=$(this).data("id");
		}
		$.cookie("id",id);
	});
	
	$('#header li').hover(function(){
		$(this).find("div").show();
	},function(){
		$(this).find("div").hide()
	});
});
