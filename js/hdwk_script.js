$(document).ready(function(){

	$(".img_title_div").addClass("show_now");

	var pd_btm  = $(".img_title_div").outerHeight() - $(".img_title_div").height();	
	var de_li  = $(".user_li").height();

    var top_height = $("#gnb").height() + $("#main").height() + $("#target").height() - de_li;
	var top_height_2 = top_height + $("#img_title_1").height() + $("#content_1").height() + $("#content_2").height() + pd_btm;
	var top_height_3 = top_height_2 + $("#img_title_2").height() + $("#content_3").height();
	var top_height_4 = top_height_3 + $("#img_title_3").height() + $("#content_4").height();
	

	$(window).resize(function(){ 
		pd_btm  = $(".img_title_div").outerHeight() - $(".img_title_div").height();
		de_li  = $(".user_li").height();

	    top_height = $("#gnb").height() + $("#main").height() + $("#target").height() - de_li;
		top_height_2 = top_height + $("#img_title_1").height() + $("#content_1").height() + $("#content_2").height()+  pd_btm;
		top_height_3 = top_height_2 + $("#img_title_2").height() + $("#content_3").height();
		top_height_4 = top_height_3 + $("#img_title_3").height() + $("#content_4").height();
		

	});


	$(window).scroll(function(){

		if ($(this).scrollTop() > top_height) {
			
			$("#img_title_1 .img_title_div").removeClass("show_now");

		}  else {
			$("#img_title_1 .img_title_div").addClass("show_now");
		}


		if ($(this).scrollTop() > top_height_2) {
			$("#img_title_2 .img_title_div").removeClass("show_now");

		} else {
			$("#img_title_2 .img_title_div").addClass("show_now");

		}

		if ($(this).scrollTop() > top_height_3) {
			
			$("#img_title_3 .img_title_div").removeClass("show_now");

		} else {
			$("#img_title_3 .img_title_div").addClass("show_now");

		}


		if ($(this).scrollTop() > top_height_4) {
			
			$("#img_title_4 .img_title_div").removeClass("show_now");

		} else {
			$("#img_title_4 .img_title_div").addClass("show_now");

		}



	});





	// #content_3 list click event
	$("#content_3 ul li a").click(function(){
		$(this).parent().addClass("on");
		$(this).parent().siblings().removeClass("on");

		return false;
	});

	// pagination
	$(".pagination a").click(function(){
		$(this).siblings().removeClass("on");
		$(this).addClass("on");

		var num = $(this).index();
		
		$("#step_ul").removeClass();
		$("#step_ul").addClass("num_"+num);

		return false;
	});
	

		
});



$(window).on("load", function() {


		// lazy loading for background images
		$(".lazy_img").removeClass("lazy_css");


});

