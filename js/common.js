var path = '/zhongli_html';
$(function(){
	$("header").load("header.html");
	$("footer").load("footer.html");
	var userAgent = navigator.userAgent;
	$('.link').click(function(){
		var id=$(this).attr("id");
		if(!id){
			id=$(this).data("id");
		}
		$.cookie("id",id);
	});
});