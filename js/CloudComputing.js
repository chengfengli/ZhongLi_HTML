var isExtends = true;
$(function(){
	$('.Computing_menu li').click(function(e){
		$('.Computing_menu li').removeClass('active');
		$(this).addClass('active');
		var index=$(this).index();
		$(".Computing_content > div").eq(index).show().siblings().hide();
	})
	$("#Computing_menu_list1").click(function(){
		isExtends = false;
		$(this).css({'background-image': 'url('+path+'/img/hr.jpg)'});
		$(this).children("div").addClass("Computing_menu_list1-click").removeClass('Computing_menu_list1-hover');
		$("#Computing_menu_list2").css({'background-image': 'url('+path+'/img/hr2.jpg)'}).children("div").removeClass("Computing_menu_list2-click").addClass('Computing_menu_list2-hover');
		$("#Computing_menu_list3").css({'background-image': 'url('+path+'/img/hr.jpg)'}).children("div").removeClass("Computing_menu_list3-click").addClass('Computing_menu_list3-hover');
		$(".Computing_menu img").attr("src",path+"/img/hr.jpg");
	})
	$("#Computing_menu_list2").click(function(){
		isExtends = false;
		$(this).css({'background-image': 'url('+path+'/img/hr.jpg)'});
		$(this).children("div").addClass("Computing_menu_list2-click").removeClass('Computing_menu_list2-hover');
		$("#Computing_menu_list1 div").removeClass("Computing_menu_list1-click").addClass("Computing_menu_list1-hover");;
		$("#Computing_menu_list3").css({'background-image': 'url('+path+'/img/hr2.jpg)'}).children("div").removeClass("Computing_menu_list3-click").addClass('Computing_menu_list3-hover');
		$(".Computing_menu img").attr("src",path+"/img/hr.jpg");
	});
	$("#Computing_menu_list3").click(function(){
		isExtends = false;
		$(this).css({'background-image': 'url('+path+'/img/hr.jpg)'});
		$(this).children("div").addClass("Computing_menu_list3");
		$(".Computing_menu ul img").attr("src",path+"/img/hr2.jpg");
		$("#Computing_menu_list1 div").removeClass("Computing_menu_list1-click").addClass("Computing_menu_list1-hover");
		$("#Computing_menu_list2").css({'background-image': 'url('+path+'/img/hr2.jpg)'}).children("div").removeClass("Computing_menu_list2-click").addClass('Computing_menu_list2-hover');
		$(this).children("div").addClass("Computing_menu_list3-click").removeClass('Computing_menu_list3-hover');
	});
	
	$("#Computing_menu_list1 div").hover(function(){
		var className = $(this).attr('class');
		if(className.indexOf('click')!=-1){
			isExtends = false;
		}
		$(this).addClass('Computing_menu_list1-click').removeClass('Computing_menu_list1-hover');
	},function(){
		if(isExtends){
			$(this).removeClass('Computing_menu_list1-click').addClass('Computing_menu_list1-hover');
		}
		isExtends = true;
	});
	
	$("#Computing_menu_list2 div").hover(function(){
		var className = $(this).attr('class');
		if(className.indexOf('click')!=-1){
			isExtends = false;
		}
		$(this).addClass('Computing_menu_list2-click').removeClass('Computing_menu_list2-hover');
	},function(){
		if(isExtends){
			$(this).removeClass('Computing_menu_list2-click').addClass('Computing_menu_list2-hover');
		}
		isExtends = true;
	})
	
	$("#Computing_menu_list3 div").hover(function(){
		var className = $(this).attr('class');
		if(className.indexOf('click')!=-1){
			isExtends = false;
		}
		$(this).addClass('Computing_menu_list3-click').removeClass('Computing_menu_list3-hover');
	},function(){
		if(isExtends){
			$(this).removeClass('Computing_menu_list3-click').addClass('Computing_menu_list3-hover');
		}
		isExtends = true;
	})
	
});