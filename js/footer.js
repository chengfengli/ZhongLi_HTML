$(function(){
	$('.link').click(function(){
		var id=$(this).attr("id");
		if(!id){
			id=$(this).data("id");
		}
		$.cookie("id",id);
	});
});
