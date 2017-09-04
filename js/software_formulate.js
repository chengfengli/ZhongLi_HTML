$(function(){
	$('#tab_box div').click(function(){
		$('#tab_box div').removeClass('active');
		$(this).addClass('active');
		var data_class = $(this).data("class");
		var data_id = $(this).data("id");
		$("."+data_class).addClass('none');
		$("#"+data_id).removeClass('none');
	});
	$('#info').click(function(){
		$(this).css({'background-image': 'url('+path+'/img/hr.jpg)'});
		$('#powerBI').css({'background-image': 'url('+path+'/img/hr2.jpg)'});
		$('#tab_box img').attr("src",path+"/img/hr.jpg");
	});
	$('#website').click(function(){
		$(this).css({'background-image': 'url('+path+'/img/hr.jpg)'});
		$('#tab_365').css({'background-image': 'url('+path+'/img/hr.jpg)'});
		$('#tab_box img').attr("src",path+"/img/hr2.jpg");
	})
});