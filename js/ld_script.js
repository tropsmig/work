$(document).ready(function(){

	// handle links with @href started with '#' only
	$(document).on('click', 'a[href^="#"]', function(e) {
	    // target element id
	    var id = $(this).attr('href');

	    // target element
	    var $id = $(id);
	    if ($id.length === 0) {
	        return;
	    }

	    // prevent standard hash navigation (avoid blinking in IE)
	    e.preventDefault();

	    // top position relative to the document
	    var pos = $id.offset().top;

	    // animated top scrolling
	    $('body, html').animate({scrollTop: pos});
	});

	$(window).scroll(function(){

		if ($(window).scrollTop() >= 30) {
			$("#wrapper").addClass("slide");
			$(".top_btn").addClass("add_top");
			$(".move_div").addClass("showup");
		} else {
			$("#wrapper").removeClass("slide");
			$(".top_btn").removeClass("add_top");
			$(".move_div").removeClass("showup");
		
		}

	});

	// hamburger button
	$(".burger a").click(function(){
		$("body").toggleClass("open");

		return false;
	});

	// navigation button
	$("nav").click(function(){
		$("body").removeClass("open");

	});


	


	
});

