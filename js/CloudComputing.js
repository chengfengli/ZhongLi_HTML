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
	$(".Application_scenarios_bg1").hover(function(){
		var className = $(this).attr('class');
		if(className.indexOf('click')!=-1){
			isExtends = false;
		}
		$(this).addClass('Application_scenarios_bg_style2').removeClass('Application_scenarios_bg_style');
		
		$('.Application_scenarios_bg1').empty();
		$('.Application_scenarios_bg1').append('<div style="margin-top: 80px;"><p>如今，视频监控技术已经广泛的应用在城市安防系统中。'+
		'智能视频分析是视频监控技术的一个重要的发展方向，他利用图像识别处理来判断已经发生的或即将要发生的威胁，并实时提醒用户。</p>'+
		'<p>实时视频分析的需求在今天日益增长，他对视频监控服务商来说是个巨大的挑战。实时视频分析需要对视频进行整理并 立即处理，'+
		'实时的提供有意义的、可操作的数据。从外，由于用于分析的视频量正在成倍的增长，因此如何成功的利用大数据处理技术检索所需'+
		'的视频片段将成为一项新的挑战。</p></div>')
		
	    },function(){
		if(isExtends){
			$(this).removeClass('Application_scenarios_bg_style2').addClass('Application_scenarios_bg_style');
			$('.Application_scenarios_bg1').empty();
			$('.Application_scenarios_bg1').append('<div style="margin-top: 160px;"><p style="font-size: 40px; line-height: 90px;">视频分析'+
			    			'</p><p style="font-size: 24px; line-height: 50px;">应用于安防</p><p style="font-size: 24px; line-height: 50px;">'+
			    				'为人脸识别技术</p></div>')
		}
		isExtends = true;
	})
	
	$(".Application_scenarios_bg2").hover(function(){
		var className = $(this).attr('class');
		if(className.indexOf('click')!=-1){
			isExtends = false;
		}
		$(this).addClass('Application_scenarios_bg_style2').removeClass('Application_scenarios_bg_style');
		
				$('.Application_scenarios_bg2').empty();
		$('.Application_scenarios_bg2').append('<div style="margin-top: 80px;"><p>越来越多的人们通过智能手机和具有互联网功能的机顶盒观看'+
		'网络视频，因此借助互联网进行视频直播和点播数量也随之不断增长。</p>'+
		'<p> 目前的视频流主要包含两种类型:一种是传统的视频点播方式，通过数字有线电视网络并借助RTP/RTSP将视频分发到终端用户，另一种是通过互联'+
		'网分发的基于HTTP的自适应视频流。</p>'+
		'<p>流媒体转码设备面临的最大挑战包括两类，一种是针对超高清的转码处理需求，借此改善现有的视频分发质量，另一种是针对多屏显示和多种码流'+
		'的转码需求，借此满足不同的屏幕尺寸和网络宽带。</p></div>')
	    },function(){
		if(isExtends){
			$(this).removeClass('Application_scenarios_bg_style2').addClass('Application_scenarios_bg_style');
			
						$('.Application_scenarios_bg2').empty();
			$('.Application_scenarios_bg2').append('<div style="margin-top: 160px;"><p style="font-size: 40px; line-height: 90px;">流媒体转码'+
			    			'</p><p style="font-size: 24px; line-height: 50px;">应用于手机直播互动</p><p style="font-size: 24px; line-height: 50px;">'+
			    				'具有互联网功能的机顶盒</p><p style="font-size: 24px; line-height: 50px;">观看网络视频点播</p></div>')
		}
		isExtends = true;
	})
		
	$(".Application_scenarios_bg3").hover(function(){
		var className = $(this).attr('class');
		if(className.indexOf('click')!=-1){
			isExtends = false;
		}
		$(this).addClass('Application_scenarios_bg_style2').removeClass('Application_scenarios_bg_style');
		$('.Application_scenarios_bg3').empty();
		$('.Application_scenarios_bg3').append('<div style="margin-top: 20px;"><p>视频会议广泛应用于企业与分公司之间的通信，或者具有多个地点的组织的内部交流，或者与外地员工的沟通等，'+
		'同时在虚拟教学或者远程教育的应用中也扮演着非常重要的角色。</p>'+
		'<p> 会议多点控制单元（MCU）是一个中心点，它维系着与每一个参会人员之间的单一的一对一的音视频留。MCU接受并混合所有输入进来的音频和视频流，并生产一个单一的音视频流分发给每一个参会者。'+
		'<p>想要在视频会议市场中获得成功，最有效的捷径就是在低带宽的情况下提供更好的视频和音频质量。这也促使会议设备供应商将最新的视频处理技术整合到下一代产品中。'+
		'最新的视频处理技术包括动态码流控制，60fps编码和H.265编解码这些先进的视频编解码技术确保了音视频质量的提升，但是它们也需要MCU能够具有更强大的媒体处理能力</p></div>')
		
	    },function(){
		if(isExtends){
			$(this).removeClass('Application_scenarios_bg_style2').addClass('Application_scenarios_bg_style');
									$('.Application_scenarios_bg3').empty();
			$('.Application_scenarios_bg3').append('<div style="margin-top: 160px;"><p style="font-size: 40px; line-height: 90px;">视频会议'+
			    			'</p><p style="font-size: 24px; line-height: 50px;">应用于远程教育</p><p style="font-size: 24px; line-height: 50px;">'+
			    				'远程医疗 政府部门</p><p style="font-size: 24px; line-height: 50px;">大型跨区域企业的远程会议</p>')
		}
		isExtends = true;
	})
});