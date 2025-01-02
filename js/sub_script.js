document.addEventListener("DOMContentLoaded", () => {

	function animateCounter() { 
		const counterElement = document.querySelector(".counter p");
		let currentValue = 0;
		const updateInterval = 300;
		const maxDuration = 2000;
		const endValue = 100;
		const startTime = Date.now();

		function upadteCounter() {
			const elapsedTime = Date.now() - startTime;
			if ( elapsedTime < maxDuration ) {
				currentValue = Math.min(
					currentValue + Math.floor(Math.random() * 30) + 5, 
					endValue
				);
				counterElement.textContent = currentValue;
				setTimeout(upadteCounter, updateInterval);
			} else {
				counterElement.textContent = currentValue;
				setTimeout(() => {
					gsap.to(counterElement, {
						// y: -60,
						opacity:0,
						duration: .5,
						ease: "power3.inOut",
						onStart: () => {
							revealLandingPage();
						},
					});
				}, -100);
			}
		}

		upadteCounter();
	}

	gsap.to(".counter p", {
		y: 0,
		duration: .5,
		ease: "power3.out",
		delay: .1,
		onComplete: animateCounter,
	});

	function revealLandingPage() { 
		gsap.to(".ld", {
			clipPath: "polygon(0% 200%, 200% 200%, 200% 0%, 0% 0%)",
			duration: 1,
			ease: "hop",
			onStart: () => {
				gsap.to(".container", {
					opacity: 0,
				});
				gsap.to(".opa", {
					y: 0,
					opacity: 1,
					duration: 1,
					delay: 1,
				});
				gsap.to(".opa_2", {
					// y: -200,
					opacity: 1,
					duration: 1,
					delay: 1,
				});
				gsap.to(".ld", {
					// transform: "translate(-50%, -50%) scale(1)",
					duration: 2,
					ease: "power3.inOut",
					delay: 0,
				});
				gsap.to(".overlay", {
					clipPath: "polygon(0% 0%, 200% 0%, 200% 0%, 0% 0%)",
					duration: 2,
					delay: 0.5,
					ease: "hop",
				});
				gsap.to("body", {
					overflowY: "auto",
					stagger: 0.1,
					duration: 0.4,
					ease: "power4.inOut",
					delay: 0.75,
				});
				gsap.to(".container", {
					height: 0,
					delay: .4,
				});
			},
		});
	}

});




$(document).ready(function(){
	$('body, html').scrollTop(0);

	$("html").addClass("change");

	// Close menu by pressing the ESC key.
	$(document).keyup(function (e) {
	  if ($('html').hasClass('open') && e.keyCode === 27) { // ESC
	    $("html").removeClass("open");
	  }
	});


	$('.burger a').click(function(){
		$("html").toggleClass("open");

		return false;
	});
	$("#menu_div").click(function(){
		$("html").removeClass("open");

	});

	var getPdBtm = $(".quick_div.pd_btm_160").outerHeight() - $(".quick_div.pd_btm_160").height();
	var getPdBtm_2 = getPdBtm * 2;
	var getHeights = $("#main").outerHeight() - getPdBtm_2;
	
	$(window).resize(function(){ 
		getPdBtm = $(".quick_div.pd_btm_160").outerHeight() - $(".quick_div.pd_btm_160").height();
		getPdBtm_2 = getPdBtm * 2;
		getHeights = $("#main").outerHeight() - getPdBtm_2;
	});

	$(function(){
		$(window).scroll(function(){
			if ($(this).scrollTop() > getHeights) {
				
				$(".target_ul").addClass("chart_ani");

				if ($(".target_ul").hasClass("after")) {

				} else {

					setTimeout(function(){

						$(".target_ul").addClass("after");
						
					}, 4000);
				}
			} else if ($(this).scrollTop() < getHeights) {
				
				$(".target_ul").removeClass("after");
				$(".target_ul").removeClass("chart_ani");

				
			} else {
				
				$(".target_ul").removeClass("chart_ani");
				$(".target_ul").removeClass("after");
			}
		});
	});

	$(window).scroll(function(){
		
		if ($(window).scrollTop() >= 30) {
			$("body").addClass("slide");
			$(".top_btn").addClass("add_top");
			$("html").removeClass("change");
		} else {
			$("body").removeClass("slide");
			$(".top_btn").removeClass("add_top");
			$("html").addClass("change");

		}

	});

});

