/***************************************************
==================== JS INDEX ======================
****************************************************
 PreLoader Js
 Mobile Menu Js
 Sidebar Js
 Cart Toggle Js
 Search Js
 Sticky Header Js
 Data Background Js
 Testimonial Slider Js
 Slider Js (Home 3)
 Brand Js
 Tesimonial Js
 Course Slider Js
 Masonary Js
 Wow Js
 Data width Js
 Cart Quantity Js
 Show Login Toggle Js
 Show Coupon Toggle Js
 Create An Account Toggle Js
 Shipping Box Toggle Js
 Counter Js
 Parallax Js
 InHover Active Js

****************************************************/

(function ($) {
	("use strict");

	var windowOn = $(window);
	////////////////////////////////////////////////////
	// PreLoader Js
	windowOn.on("load", function () {
		$("#loading").fadeOut(500);
	});

	////////////////////////////////////////////////////
	// Mobile Menu Js
	$("#mobile-menu").meanmenu({
		meanMenuContainer: ".mobile-menu",
		meanScreenWidth: "1199",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});
	$("#mobile-menu2").meanmenu({
		meanMenuContainer: ".mobile-menu2",
		meanScreenWidth: "991",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});

	////////////////////////////////////////////////////
	// Sidebar Js
	$(".sidebar-toggle-btn").on("click", function () {
		$(".sidebar__area").addClass("sidebar-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".sidebar__close-btn").on("click", function () {
		$(".sidebar__area").removeClass("sidebar-opened");
		$(".body-overlay").removeClass("opened");
	});

	// sidebar - cart
	$(".close-sidebar,.offcanvas-overlay").on("click", function () {
		$(".sidebar-cart").removeClass("cart-open");
		$(".offcanvas-overlay").removeClass("overlay-open");
	});
	$(".action-item-cart").on("click", function () {
		$(".sidebar-cart").addClass("cart-open");
		$(".offcanvas-overlay").addClass("overlay-open");
	});

	////////////////////////////////////////////////////
	// Cart Toggle Js
	$(".cart-toggle-btn").on("click", function () {
		$(".cartmini__wrapper").addClass("opened");
		$(".body-overlay").addClass("opened");
	});
	$(".cartmini__close-btn").on("click", function () {
		$(".cartmini__wrapper").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});
	$(".body-overlay").on("click", function () {
		$(".cartmini__wrapper").removeClass("opened");
		$(".sidebar__area").removeClass("sidebar-opened");
		$(".header__search-3").removeClass("search-opened");
		$(".body-overlay").removeClass("opened");
	});

	////////////////////////////////////////////////////
	// Search Js
	$(".search-toggle").on("click", function () {
		$(".search__area").addClass("opened");
	});
	$(".search-close-btn").on("click", function () {
		$(".search__area").removeClass("opened");
	});

	////////////////////////////////////////////////////
	// Sticky Header Js
	windowOn.on("scroll", function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$("#header-sticky").removeClass("sticky");
		} else {
			$("#header-sticky").addClass("sticky");
		}
	});

	////////////////////////////////////////////////////
	// Data Background Js
	$("[data-background").each(function () {
		$(this).css(
			"background-image",
			"url( " + $(this).attr("data-background") + "  )"
		);
	});

	////////////////////////////////////////////////////
	// Nice Select Js
	$("select").niceSelect();

	////////////////////////////////////////////////////
	// slider__active Slider Js

	if (jQuery(".slider__active").length > 0) {
		let sliderActive1 = ".slider__active";
		let sliderInit1 = new Swiper(sliderActive1, {
			// Optional parameters
			slidesPerView: 1,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: true,
			effect: "fade",

			autoplay: {
				delay: 50000000,
			},

			// If we need pagination
			pagination: {
				el: ".slider-pagination",
				// dynamicBullets: true,
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".slider-button-next",
				prevEl: ".slider-button-prev",
			},

			a11y: false,
		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + " [data-animation]").each(function () {
					let anim = $(this).data("animation");
					let delay = $(this).data("delay");
					let duration = $(this).data("duration");

					$(this)
						.removeClass("anim" + anim)
						.addClass(anim + " animated")
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration,
						})
						.one(
							"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
							function () {
								$(this).removeClass(anim + " animated");
							}
						);
				});
			};
			animated();
			// Make animated when slide change
			init.on("slideChange", function () {
				$(sliderActive1 + " [data-animation]").removeClass("animated");
			});
			init.on("slideChange", animated);
		}

		animated_swiper(sliderActive1, sliderInit1);
	}

	if (jQuery(".slider__active-2").length > 0) {
		let sliderActive1 = ".slider__active-2";
		let sliderInit1 = new Swiper(sliderActive1, {
			// Optional parameters
			slidesPerView: 1,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: true,
			effect: "fade",

			autoplay: {
				delay: 5000,
			},

			// If we need pagination
			pagination: {
				el: ".swiper-paginations",
				// dynamicBullets: true,
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},

			a11y: false,
		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + " [data-animation]").each(function () {
					let anim = $(this).data("animation");
					let delay = $(this).data("delay");
					let duration = $(this).data("duration");

					$(this)
						.removeClass("anim" + anim)
						.addClass(anim + " animated")
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration,
						})
						.one(
							"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
							function () {
								$(this).removeClass(anim + " animated");
							}
						);
				});
			};
			animated();
			// Make animated when slide change
			init.on("slideChange", function () {
				$(sliderActive1 + " [data-animation]").removeClass("animated");
			});
			init.on("slideChange", animated);
		}

		animated_swiper(sliderActive1, sliderInit1);
	}

	var themeSlider = new Swiper(".classname", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			0: {
				slidesPerView: 1,
			},
		},
	});

	////////////////////////////////////////////////////
	// Masonary Js
	$(".grid").imagesLoaded(function () {
		// init Isotope
		var $grid = $(".grid").isotope({
			itemSelector: ".grid-item",
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: ".grid-item",
			},
		});

		// filter items on button click
		$(".masonary-menu").on("click", "button", function () {
			var filterValue = $(this).attr("data-filter");
			$grid.isotope({ filter: filterValue });
		});

		//for menu active class
		$(".masonary-menu button").on("click", function (event) {
			$(this).siblings(".active").removeClass("active");
			$(this).addClass("active");
			event.preventDefault();
		});
	});

	/* magnificPopup img view */
	$(".image-popups").magnificPopup({
		type: "image",
		gallery: {
			enabled: true,
		},
	});

	/* magnificPopup video view */
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	////////////////////////////////////////////////////
	// Wow Js
	new WOW().init();

	////////////////////////////////////////////////////
	// Data width Js
	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	////////////////////////////////////////////////////
	// Cart Quantity Js
	$(".cart-minus").click(function () {
		var $input = $(this).parent().find("input");
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$(".cart-plus").click(function () {
		var $input = $(this).parent().find("input");
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

	////////////////////////////////////////////////////
	// Show Login Toggle Js
	$("#showlogin").on("click", function () {
		$("#checkout-login").slideToggle(900);
	});

	////////////////////////////////////////////////////
	// Show Coupon Toggle Js
	$("#showcoupon").on("click", function () {
		$("#checkout_coupon").slideToggle(900);
	});

	////////////////////////////////////////////////////
	// Create An Account Toggle Js
	$("#cbox").on("click", function () {
		$("#cbox_info").slideToggle(900);
	});

	////////////////////////////////////////////////////
	// Shipping Box Toggle Js
	$("#ship-box").on("click", function () {
		$("#ship-box-info").slideToggle(1000);
	});

	////////////////////////////////////////////////////
	// Counter Js
	$(".counter").counterUp({
		delay: 10,
		time: 1000,
	});

	////////////////////////////////////////////////////
	// Parallax Js
	if ($(".scene").length > 0) {
		$(".scene").parallax({
			scalarX: 10.0,
			scalarY: 15.0,
		});
	}

	////////////////////////////////////////////////////
	// InHover Active Js
	$(".hover__active").on("mouseenter", function () {
		$(this)
			.addClass("active")
			.parent()
			.siblings()
			.find(".hover__active")
			.removeClass("active");
	});

	if (typeof $.fn.knob != "undefined") {
		$(".knob").each(function () {
			var $this = $(this),
				knobVal = $this.attr("data-rel");

			$this.knob({
				draw: function () {
					$(this.i).val(this.cv + "%");
				},
			});

			$this.appear(
				function () {
					$({
						value: 0,
					}).animate(
						{
							value: knobVal,
						},
						{
							duration: 2000,
							easing: "swing",
							step: function () {
								$this
									.val(Math.ceil(this.value))
									.trigger("change");
							},
						}
					);
				},
				{
					accX: 0,
					accY: -150,
				}
			);
		});
	}

	// related product activation
	const relproduct = new Swiper(".r-product-active", {
		// Default parameters
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,

		autoplay: {
			delay: 3000,
			pauseOnMouseEnter: true,
		},
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 2,
			},
			// when window width is >= 640px
			640: {
				slidesPerView: 2,
			},
			991: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			},
			1400: {
				slidesPerView: 4,
			},
		},
	});

	// tab product activation
	const tabslider = new Swiper(".product-tab-slider", {
		// Default parameters
		slidesPerView: 1,
		spaceBetween: 30,
		observer: true,
		observeParents: true,
		loop: true,
		autoplay: {
			delay: 3000,
			pauseOnMouseEnter: true,
		},
		pagination: {
			el: ".product-tab-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".product-tab-slider-button-next",
			prevEl: ".product-tab-slider-button-prev",
		},
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 2,
			},
			// when window width is >= 640px
			640: {
				slidesPerView: 2,
			},
			991: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			},
			1400: {
				slidesPerView: 5,
			},
		},
	});

	// drop-btn
	$(".drop-btn").on("click", function () {
		$(this).siblings("").toggleClass("content-hidden");
		$(this).parent("").toggleClass("child-content-hidden");
	});

	//range slider activation

	$(".slider-range-bar").slider({
		range: true,

		min: 0,

		max: 500,

		values: [75, 300],

		slide: function (event, ui) {
			$(".amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
		},
	});

	$(".category-click").click(function () {
		$(this).siblings(".category-items").slideToggle();
		$(this).toggleClass("items-open");
	});
	// side - info
	$(".side-info-close,.offcanvas-overlay").on("click", function () {
		$(".side-info").removeClass("info-open");
		$(".offcanvas-overlay").removeClass("overlay-open");
	});
	$(".side-toggle").on("click", function () {
		$(".side-info").addClass("info-open");
		$(".offcanvas-overlay").addClass("overlay-open");
	});

	// client activation
	if (jQuery(".client-active").length > 0) {
		let client = new Swiper(".client-active", {
			slidesPerView: 1,
			spaceBetween: 30,
			// direction: 'vertical',
			loop: true,
			autoplay: {
				delay: 3000,
			},

			breakpoints: {
				500: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 4,
				},
				1400: {
					slidesPerView: 5,
				},
			},
		});
	}

	// portfolio activation
	if (jQuery(".portfolio-active").length > 0) {
		let portfolio = new Swiper(".portfolio-active", {
			slidesPerView: 1,
			spaceBetween: 30,
			// direction: 'vertical',
			loop: true,
			allowTouchMove:false,
			observer:true,
			observeParents:true,
			navigation: {
				nextEl: ".portfolio-button-next",
				prevEl: ".portfolio-button-prev",
			},
			breakpoints: {
				500: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 2,
				},
				1200: {
					slidesPerView: 2,
				},
			},
		});
	}
	// category-basic-activation
	const category = new Swiper(".category-basic-slider", {
		// Default parameters
		slidesPerView: 1,
		spaceBetween: 40,
		loop: true,
		centeredSlides: false,
		pagination: {
			el: ".category-basic-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".category-basic-button-next",
			prevEl: ".category-basic-button-prev",
		},
		breakpoints: {
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
		},
	});

	// product activation
	if (jQuery(".product-active").length > 0) {
		let product = new Swiper(".product-active", {
			slidesPerView: 1,
			spaceBetween: 30,
			// direction: 'vertical',
			loop: true,
			autoplay: {
				delay: 3000,
			},

			breakpoints: {
				500: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 4,
				},
			},
		});
	}
	// featured-product activation
	if (jQuery(".featured-product-active").length > 0) {
		let featuredproduct = new Swiper(".featured-product-active", {
			slidesPerView: 1,
			spaceBetween: 30,
			// direction: 'vertical',
			loop: true,
			autoplay: {
				delay: 3000,
			},
			navigation: {
				nextEl: ".featured-button-next",
				prevEl: ".featured-button-prev",
			},
			breakpoints: {
				500: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 4,
				},
			},
		});
	}

	// portfolio activation
	if (jQuery(".portfolio-active-style-2").length > 0) {
		let portfolio2 = new Swiper(".portfolio-active-style-2", {
			slidesPerView: 1,
			spaceBetween: 40,
			// direction: 'vertical',
			loop: true,
			observer: true,
			observeParents: true,
			autoplay: {
				delay: 3000,
			},

			breakpoints: {
				500: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 3,
				},
			},
			pagination: {
				el: ".portfolio-pagination",
				clickable: true,
			},
		});
	}
	if (jQuery(".portfolio-active-style-3").length > 0) {
		let portfolio2 = new Swiper(".portfolio-active-style-3", {
			slidesPerView: 1,
			spaceBetween: 30,
			// direction: 'vertical',
			loop: true,
			observer: true,
			observeParents: true,
			autoplay: {
				delay: 3000,
			},

			breakpoints: {
				600: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 4,
				},
			},
			pagination: {
				el: ".portfolio-pagination",
				clickable: true,
			},
		});
	}

	


	// testimonial-activation
	const testitmonial = new Swiper(".testimonial-content-style-2", {
		// Default parameters
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		centeredSlides: true,
		pagination: {
			el: ".testimonial-pagination",
			clickable: true,
			// renderBullet: function (index, className) {
			//   return '<span class="' + className + '">' + '<button>'+(index + 1)+'</button>' + "</span>";
			// },
		},
		navigation: {
			nextEl: ".testimonial-button-next",
			prevEl: ".testimonial-button-prev",
		},
		breakpoints: {
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 1,
			},
			992: {
				slidesPerView: 2,
				centeredSlides: false,
			},
			1200: {
				slidesPerView: 3,
			},
		},
	});
	// testimonial-activation
	const testitmonial4 = new Swiper(".testimonial-content-style-4", {
		// Default parameters
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		centeredSlides: false,
		pagination: {
			el: ".testimonial-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".testimonial-button-next",
			prevEl: ".testimonial-button-prev",
		},
		breakpoints: {
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 1,
			},
			992: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 2,
			},
		},
	});

	// testimonial activation
	var testthumb = new Swiper(".testimonial-thumb", {
		spaceBetween: 10,
		slidesPerView: 1,
		freeMode: true,
		watchSlidesProgress: true,
		breakpoints: {
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 1,
			},
			1200: {
				slidesPerView: 2,
			},
		},
	});
	var swiper2 = new Swiper(".testimonial-content-slide", {
		spaceBetween: 10,
		loop: true,
		navigation: {
			nextEl: ".testimonial-button-next",
			prevEl: ".testimonial-button-prev",
		},
		thumbs: {
			swiper: testthumb,
		},
	});

	// testimonial2 activation
	var testthumb3 = new Swiper(".testimonial-thumb3", {
		spaceBetween: 10,
		slidesPerView: 3,
		freeMode: true,
		watchSlidesProgress: true,
		centeredSlides:true,
		loop:true,
	});
	var swiper3 = new Swiper(".testimonial-content-slide3", {
		spaceBetween: 10,
		loop: true,
		navigation: {
			nextEl: ".testimonial-button-next",
			prevEl: ".testimonial-button-prev",
		},
		thumbs: {
			swiper: testthumb3,
		},
	});
	

	// instagram slider activation
	if (jQuery(".instagram-slider-active").length > 0) {
		let instagramslider = new Swiper(".instagram-slider-active", {
			slidesPerView: 2,
			spaceBetween: 0,
			// direction: 'vertical',
			loop: true,
			autoplay: {
				delay: 3000,
			},

			breakpoints: {
				500: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 4,
				},
				992: {
					slidesPerView: 5,
				},
				1200: {
					slidesPerView: 6,
				},
				1400: {
					slidesPerView: 7,
				},
				1600: {
					slidesPerView: 8,
				},
			},
		});
	}

	// blog-thumb-activation
	const blogThumb = new Swiper(".blog-thumb-slider", {
		// Default parameters
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		pagination: {
			el: ".blog-thumb-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".blog-thumb-button-next",
			prevEl: ".blog-thumb-button-prev",
		},
	});

	$(".go-top").click(function () {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

	$(function () {
	$(".beforeAfter").beforeAfter({
		// is draggable/swipeable
		movable: true,

		// click image to move the slider
		clickMove: true,

		// always show the slider
		alwaysShow: true,

		// intial position of the slider
		position: 50,

		// opacity between 0 and 1
		opacity: 0.4,
		activeOpacity: 1,
		hoverOpacity: 0.8,

		// slider colors
		separatorColor: "#ffffff",
		bulletColor: "#ffffff",
		arrowColor: "#333333",
	});
  
});

	// imgae-select
	const activeImage = document.querySelector(".product-image .active");
	const productImages = document.querySelectorAll(".product-thumb img");
	function changeImage(e) {
		activeImage.src = e.target.src;
	}
	productImages.forEach((image) =>
		image.addEventListener("click", changeImage)
	);
})(jQuery);