$(function(){
	var img_width = $('#banner_img_box .banner_img img').width();
	var img_height = $('#banner_img_box .banner_img img').height();
	$('#banner_img_box .banner_img').width(img_width);
	$('#banner_img_box .banner_img').height(img_height);
	$('#banner_img_box').width(img_width*3);
	
	var img_width2 = $('#img_big_box1').width();
	$('#img_big_box1 img').width(img_width2/3);
	
	var img_width3 = $('#img_big_box2').width();
	$('#img_big_box2 img').width(img_width3/2);
	
	$("#banner_btn_box div").click(function(){
		$("#banner_btn_box div").removeClass('banner_btn_box_hover');
		$(this).addClass('banner_btn_box_hover');
		var img_width = $('#banner_img_box .banner_img img').width();
		var index = $(this).index();
		$("#banner_img_box").css({'margin-left':-(index*img_width)+"px"})
	});
});
