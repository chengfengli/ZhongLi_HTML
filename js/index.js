/*根据屏幕的宽度计算bannner图片的大小*/
function img_width_auto(){
	/*banner*/
	var img_width = $('#banner_img_box .banner_img img').width();
	var img_height = $('#banner_img_box .banner_img img').height();
	$('#banner_img_box .banner_img').width(img_width);
	$('#banner_img_box .banner_img').height(img_height);
	$('#banner_img_box').width(img_width*3);
	/*高速运算*/
	var img_width2 = $('#img_big_box1').width();
	$('#img_big_box1 img').width(img_width2/3);
	/*软件服务*/
	var img_width3 = $('#img_big_box2').width();
	$('#img_big_box2 img').width(img_width3/2);
}
/*banner图片定时自动轮播*/
var index = 0;
function bannerScroll(){
	index++;
	if(index>=3){
		index = 0;
	}
	var img_width = $('#banner_img_box .banner_img img').width();
	$("#banner_img_box").css({'margin-left':-(index*img_width)+"px"});
	$("#banner_btn_box div").removeClass('banner_btn_box_hover');
	$("#banner_btn_box div:eq("+index+")").addClass('banner_btn_box_hover');
}
/*新闻动态图片定时自动轮播*/
	var news_index = 0;
function newsScroll(){
	news_index++;
	if(news_index>=3){
		news_index = 0;
	}
	var img_width = $('#SafeMgr_dynamic_left_banner .banner_img li').width();
	$("#SafeMgr_dynamic_left_banner .banner_img").css({'margin-left':-(news_index*img_width)+"px"});
}
$(function(){
	img_width_auto();
	var pull = setInterval(function(){
		bannerScroll()
	},3000);
	
	
	var pull2 = setInterval(function(){
		newsScroll();
	},3000);
	
	/*点击切换banner*/
	$("#banner_btn_box div").click(function(){
		clearInterval(pull);
		$("#banner_btn_box div").removeClass('banner_btn_box_hover');
		$(this).addClass('banner_btn_box_hover');
		var img_width = $('#banner_img_box .banner_img img').width();
		index = $(this).index();
		$("#banner_img_box").css({'margin-left':-(index*img_width)+"px"});
		setTimeout(function(){
			pull = setInterval(function(){
				bannerScroll()
			},3000);
		},1000);
		
	});
	/*高速运算： 鼠标移入移除效果*/
	$('#img_big_box1 .img_box,#SafeMgr_dynamic_img_box a').hover(function(){
		$(this).find('img').toggle();
		$(this).find('.t').toggle();
	},function(){
		$(this).find('img').toggle();
		$(this).find('.t').toggle();
	});
	
	/*新闻动态图片切换*/
	var news_banner_index = 0;
	$('#SafeMgr_dynamic_left_banner .left').click(function(){
		clearInterval(pull2);
		var img_width = $('#SafeMgr_dynamic_left_banner .banner_img li').width();
		news_index--;
		if(news_index<0){
			news_index = 2;
		}
		$('#SafeMgr_dynamic_left_banner .banner_img').css({'margin-left':-(news_index*img_width)+"px"});
		setTimeout(function(){
			pull2 = setInterval(function(){
				newsScroll();
			},3000);
		},3000);
	});
	$('#SafeMgr_dynamic_left_banner a').hover(function(){
		$(this).find('img').toggle();
	},function(){
		$(this).find('img').toggle();
	});
	$('#SafeMgr_dynamic_left_banner .right').click(function(){
		clearInterval(pull2);
		var img_width = $('#SafeMgr_dynamic_left_banner .banner_img li').width();
		news_index++;
		if(news_index>=3){
			news_index = 0;
		}
		$('#SafeMgr_dynamic_left_banner .banner_img').css({'margin-left':-(news_index*img_width)+"px"});
		setTimeout(function(){
			pull2 = setInterval(function(){
				newsScroll();
			},3000);
		},3000);
	});
});
