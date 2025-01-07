$(document).ready(function(){

	// animation
	var pd_btm  = $(".img_title_div").outerHeight() - $(".img_title_div").height();

    var top_height = $("#gnb").height() + $("#main").height();
	var top_height_2 = top_height + $("#img_title_1").height() + $("#content_1").height() + $("#content_2").height() + (pd_btm*2);
	var top_height_2_1 = top_height + $("#img_title_1").height();
	var top_height_3 = top_height_2 + $("#content_3").height() + $("#content_4").height() + (pd_btm * 2);
	
	

	$(window).resize(function(){ 
		pd_btm  = $(".img_title_div").outerHeight() - $(".img_title_div").height();
	
	    top_height = $("#gnb").height() + $("#main").height();
	    top_height_2 = top_height + $("#img_title_1").height() + $("#content_1").height() + $("#content_2").height() + (pd_btm*2);
	    top_height_2_1 = top_height + $("#img_title_1").height();
		top_height_3 = top_height_2 + $("#content_3").height() + $("#content_4").height() + (pd_btm * 2);
		

	});
	

	$(window).scroll(function(){

		if ($(this).scrollTop() > top_height) {
			// alert(pd_btm);
			$("#img_title_1 .img_title_div").addClass("show_now");

		}  else {
			$("#img_title_1 .img_title_div").removeClass("show_now");
		}

		if ($(this).scrollTop() > top_height_2_1) {

			$("#content_1").addClass("show_now");

		} else {
			$("#content_1").removeClass("show_now");

		}

		if ($(this).scrollTop() > top_height_2) {
			// alert("hey");
			$("#content_3").addClass("show_now");

		} else {
			$("#content_3").removeClass("show_now");

		}

		if ($(this).scrollTop() > top_height_3) {
			// alert("hey");
			$("#img_title_2 .img_title_div").addClass("show_now");

		} else {
			$("#img_title_2 .img_title_div").removeClass("show_now");

		}



	});

	// menu ul list mouseover event
	$(".menu_ul li").mouseover(function(){
		var getIndex = $(this).index();


		$(".mob_div").addClass("mob_class_"+getIndex);

	});

	// menu ul list mouseleave event
	$(".menu_ul li").mouseleave(function(){
		getIndex = $(this).index();

		$(".mob_div").removeClass("mob_class_"+getIndex);


	});

	// prevent site from being refreshed
	$(".menu_ul li a").click(function(){
		return false;

	});

		
});




$(window).on("load", function() {

	// lazy loading for background images
	$(".lazy_img").removeClass("lazy_css");


});
