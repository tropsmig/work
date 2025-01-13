gsap.registerPlugin(ScrollTrigger);



// var tl = gsap.timeline();
	// tl.to(".pos_ab", { y: 0, transform: "scale(1)"});

ScrollTrigger.create({
	trigger: ".img_title_3_scroll",
	// animation: tl,
	start: "top top",
	end: "bottom bottom",
	toggleAction: "restart none none none",
	pin: ".for_fixed",

});


var tl_0 = gsap.timeline();
	tl_0.to(".pos_ab", { y: 0, transform: "scale(1)"});


ScrollTrigger.create({
	trigger: ".ext_0",
	animation: tl_0,
	start: "top 30%",
	ease: "power3.inOut",
	scrub: true,
	snap: true,

});

var tl_1 = gsap.timeline();
	tl_1.to(".mob_img em.one", { opacity: .5, duration:.3, transform: "scale(1.2)"});
	tl_1.to(".mob_img em.one", { opacity: .3, duration:.3, transform: "scale(0.5)"});
	tl_1.to(".mob_img em.one", { opacity: 0, duration:.3, transform: "scale(1)"});
	tl_1.to(".mob_img_1", { opacity: 0, delay: -.2});


ScrollTrigger.create({
	trigger: ".ext_1",
	animation: tl_1,
	start: "top top",
	toggleAction: "restart none none none",
	ease: "power3.inOut",
	scrub: true,
	snap: true,

});

var tl_2 = gsap.timeline();
	tl_2.to(".mob_img em.two", { opacity: .5, duration:.3, transform: "scale(1.2)"});
	tl_2.to(".mob_img em.two", { opacity: .3, duration:.3, transform: "scale(0.5)"});
	tl_2.to(".mob_img em.two", { opacity: 0, duration:.3, transform: "scale(1)"});
	tl_2.to(".mob_btm_1", { opacity: 1, delay: -.2});


ScrollTrigger.create({
	trigger: ".ext_2",
	animation: tl_2,
	start: "top top",
	ease: "power3.inOut",
	scrub: true,
	snap: true,

});

var tl_3 = gsap.timeline();
	tl_3.to(".mob_img em.three", { opacity: .5, duration:.3, transform: "scale(1.2)"});
	tl_3.to(".mob_img em.three", { opacity: .3, duration:.3, transform: "scale(0.5)"});
	tl_3.to(".mob_img em.three", { opacity: 0, duration:.3, transform: "scale(1)"});
	tl_3.to(".mob_btm_1", { opacity: 0, delay: -.2});


ScrollTrigger.create({
	trigger: ".ext_3",
	animation: tl_3,
	start: "top top",
	ease: "power3.inOut",
	scrub: true,
	snap: true,

});


var tl_4 = gsap.timeline();
	tl_4.to(".mob_btm", { yPercent: 50, duration: .6});
	tl_4.to(".mob_img", { backgroundPosition: "0% 100%", delay: -.6});


ScrollTrigger.create({
	trigger: ".ext_4",
	animation: tl_4,
	start: "top top",
	// end: "+=1000",
	// duration:500,
	// ease: "power3.inOut",
	scrub: true,
	// snap: true,
	snap: {
		snapTo: 1/4,
		// delay: 1,
		duration:4,
		ease: "power1.inOut"
	},

});

$(document).ready(function(){

	var pd_btm  = $("#img_title_1 .img_title_div > .pd_tp_bm_300").outerHeight() - $("#img_title_1 .img_title_div > .pd_tp_bm_300").height();
	var top_height = $("#gnb").outerHeight() + $("#main").outerHeight() + $("#target").outerHeight() - ( pd_btm / 2 );
	var top_height_2 = top_height + $("#img_title_1").outerHeight();
	
	$(window).resize(function(){
		pd_btm  = $("#img_title_1 .img_title_div > .pd_tp_bm_300").outerHeight() - $("#img_title_1 .img_title_div > .pd_tp_bm_300").height();
		top_height = $("#gnb").outerHeight() + $("#main").outerHeight() + $("#target").outerHeight() - ( pd_btm / 2 );
		top_height_2 = top_height + $("#img_title_1").outerHeight();
	});

	
	$(window).scroll(function(){

		
		if ($(this).scrollTop() > top_height) {
			
			$("#img_title_1 .img_title_div").addClass("show_now");
	
		}  else {
			$("#img_title_1 .img_title_div").removeClass("show_now");
		}
	
	
		if ($(this).scrollTop() > top_height_2) {
			
			$("#img_title_2 .img_title_div").addClass("show_now");
	
		} else {
			$("#img_title_2 .img_title_div").removeClass("show_now");
			
		}
	
	
	
	});	
		
});



$(window).on("load", function() {

		
		// lazy loading for background images
		$(".lazy_img").removeClass("lazy_css");


});