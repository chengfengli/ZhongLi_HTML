/*新闻动态、文化动态的tal效果*/
var myclick = function(v) {  
    var llis = document.getElementsByTagName("li");  
    for(var i = 0; i < llis.length; i++) {  
        var lli = llis[i];  
        if(lli == document.getElementById("tab" + v)) {  
            lli.className = "active";  
        } else {  
        	lli.className = "";   
                    }  
                }  
  
                var divs = document.getElementsByClassName("news-header-con");  
                for(var i = 0; i < divs.length; i++) {  
  
                    var divv = divs[i];  
  
                    if(divv == document.getElementById("tab" + v + "_content")) {  
            divv.style.display = "block";  
        } else {  
            divv.style.display = "none";  
        }  
    }  
  
}
/*移动管家功能特性的tab效果*/
var miclick = function(v) {
	var llis = document.getElementsByTagName("li");  
    for(var i = 0; i < llis.length; i++) {  
        var lli = llis[i];  
        if(lli == document.getElementById("tab_" + v)) {  
            lli.className = "active";  
        } else {  
        	lli.className = "";   
        }  
    }  

    var divs = document.getElementsByClassName("mdm-tabs-header-con");  
    for(var i = 0; i < divs.length; i++) {  

        var divv = divs[i];  

        if(divv == document.getElementById("tabbs-0" + v)) {  
            divv.style.display = "block";  
        } else {  
            divv.style.display = "none";  
        }  
    }  
}
/*首页跳转到移动管家*/
var myfunction = function(){
	var ida = location.hash;
	if(ida != ""){
		var id = ida.substring(8, 9);
		miclick(id);
	}
}