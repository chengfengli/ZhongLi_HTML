$(function(){
	$('.Product_content_img_little li').click(function(e){
		var index=$(this).index();
				$('.Product_content_img_big').empty();
		$('.Product_content_img_big').append('<img src="'+path+'/img/product/'+(index+1)+'-1.jpg" width="488" height="450"/>')
		
	})
});