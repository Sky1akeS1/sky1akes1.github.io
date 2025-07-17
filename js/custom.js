/*
 * JS Settings For DotNetNuke Skin by bestdnnskins.com
 * Copyright 2014 By BESTDNNSKINS.COM
 */

//Window Phone Compatible:
(function() {
if ("-ms-user-select" in document.documentElement.style &&
(navigator.userAgent.match(/IEMobile/) ||
navigator.userAgent.match(/ZuneWP7/) ||
navigator.userAgent.match(/WPDesktop/))) {
var msViewportStyle = document.createElement("style");
msViewportStyle.appendChild(
document.createTextNode("@-ms-viewport{width:auto!important}")
);
document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
}
})();


//For Mobile Menu:
jQuery(document).ready(function($){
	  $(".menuclick").click(function(event) {
	    event.preventDefault();
	    $(".menu_box").slideToggle("fast");
			return false;
	  });
});

//For Fancy Lightbox Alternative:
jQuery(document).ready(function($) {
	$(".fancybox").fancybox({
	    openEffect:'elastic',closeEffect:'fade',nextEffect:'fade', prevEffect:'fade'
	});
});

//For Flexslider Banner:
jQuery(document).ready(function($) {
	  $('.flexslider').flexslider({animation:"slide",slideshowSpeed: 6000, animationSpeed: 500, pauseOnHover: true, start: function(slider){} });
	  $('.flexslider2').flexslider({animation:"fade",slideshowSpeed: 6000, animationSpeed: 500, pauseOnHover: true, start: function(slider){} });
	  $('.flexslider3').flexslider({animation:"fade",slideshowSpeed: 6000, animationSpeed: 800, pauseOnHover: true, start: function(slider){} });
	  $('.flex_banner').flexslider({animation:"slide",slideshowSpeed: 6000, animationSpeed: 500, pauseOnHover: true, start: function(slider){} });
});


//For TB Slider:
jQuery(document).ready(function($) {
    $('.TB_Wrapper').TransBanner({
        slide_delaytime: 6,
        slide_transition: 2,
        navigation_type: 3,
        button_size: 26,
        caption_bg_color: '#000',
        caption_bg_opacity: .2,
        caption_bg_blur: 10,
        responsive: true,
        responsive_limit_autoplay: '',
        responsive_limit_caption: 480,
        responsive_limit_navigation: 480,
        responsive_limit_navigation_type: 2,
        responsive_screen_based_limits: true
    });
});

//For carousel 4 items Style:
jQuery(document).ready(function($) {
	$("#carousel_4item").carouFredSel({
		responsive: true,
		width: "100%",
		height: 'auto',
		prev: "#carousel_prev4",
		next: "#carousel_next4",
		swipe: {
			onMouse: true,
			onTouch: true
		},
		scroll: {
			'items': 1,
			'duration': 1200
		},
		items: {
			width:250,
			//	height: '30%',	//	optionally resize item-height
			visible: {
				min: 1,
				max: 4
			}
		}
	});
});

//For carousel 3 items Style:
jQuery(document).ready(function($) {
	$("#carousel_3item").carouFredSel({
		responsive: true,
		width: "100%",
		height: 'auto',
		prev: "#carousel_prev3",
		next: "#carousel_next3",
		swipe: {
			onMouse: true,
			onTouch: true
		},
		scroll: {
			'items': 1,
			'duration': 1200
		},
		items: {
			width:235,
			//	height: '30%',	//	optionally resize item-height
			visible: {
				min: 1,
				max: 3
			}
		}
	});
});

//For carousel 4 items Style2:
jQuery(document).ready(function($) {
	$("#carousel_4itemB").carouFredSel({
		responsive: true,
		width: "100%",
		height: 'auto',
		prev: "#carousel_prev4B",
		next: "#carousel_next4B",
		swipe: {
			onMouse: true,
			onTouch: true
		},
		scroll: {
			'items': 1,
			'duration': 1200
		},
		items: {
			width:235,
			//	height: '30%',	//	optionally resize item-height
			visible: {
				min: 1,
				max: 4
			}
		}
	});
});

//For carousel 4 items Style3:
jQuery(document).ready(function($) {
	$("#carousel_4itemC").carouFredSel({
		responsive: true,
		width: "100%",
		height: 'auto',
		prev: "#carousel_prev4C",
		next: "#carousel_next4C",
		swipe: {
			onMouse: true,
			onTouch: true
		},
		scroll: {
			'items': 1,
			'duration': 1200
		},
		items: {
			width:235,
			//	height: '30%',	//	optionally resize item-height
			visible: {
				min: 1,
				max: 4
			}
		}
	});
});

//For carousel 6 items Style:
jQuery(document).ready(function($) {
	$("#carousel_6item").carouFredSel({
		responsive: true,
		width: "100%",
		height: 'auto',
		prev: "#carousel_prev6",
		next: "#carousel_next6",
		swipe: {
			onMouse: true,
			onTouch: true
		},
		scroll: {
			'items': 1,
			'duration': 1200
		},
		items: {
			width:135,
			//	height: '30%',	//	optionally resize item-height
			visible: {
				min: 1,
				max: 6
			}
		}
	});
});

//For Carousel Up Style:
jQuery(document).ready(function($) {
		$("#carousel_up").carouFredSel({
		items : 4,
		direction : "up",
		scroll: {
		'items': 1,
		'duration': 1000
		},
	});
}); 


//For Accordion Style2:
jQuery(document).ready(function($) {
    $(".accordion2").accordion({
        collapsible: true,
        autoHeight: false
    });
});

//For Accordion Style3:
jQuery(document).ready(function($) {
    $(".accordion3").accordion({
        collapsible: true,
        autoHeight: false
    });
});


//For Unoslider Banner:
jQuery(window).load(function() {
    $('#slider').unoslider({
        width: 1100,
        height: 430,
        tooltip: true,
        indicator: {
            autohide: false
        },
        navigation: {
            autohide: true
        },
        slideshow: {
            hoverPause: true,
            continuous: true,
            timer: true,
            speed: 9,
            infinite: true,
            autostart: true
        },
        responsive: true,
        responsiveLayers: false,
        preset: ['sq_flyoff', 'sq_drop', 'sq_squeeze', 'sq_random', 'sq_diagonal_rev', 'sq_diagonal', 'sq_fade_random', 'sq_fade_diagonal_rev', 'sq_fade_diagonal', 'explode', 'implode', 'fountain', 'shot_right', 'shot_left', 'zipper_right', 'zipper_left', 'bar_slide_random', 'bar_slide_bottomright', 'bar_slide_bottomright', 'bar_slide_topright', 'bar_slide_topleft'],
        order: 'random',
        block: {
            vertical: 10,
            horizontal: 4
        },
        animation: {
            speed: 500,
            delay: 50,
            transition: 'grow',
            variation: 'topleft',
            pattern: 'diagonal',
            direction: 'topleft'
        }
    });

    //For Unoslider Banner2:
    $('#slider2').unoslider({
        width: 840,
        height: 550,
        tooltip: true,
        indicator: {
            autohide: false
        },
        navigation: {
            autohide: true
        },
        slideshow: {
            hoverPause: true,
            continuous: true,
            timer: true,
            speed: 9,
            infinite: true,
            autostart: true
        },
        responsive: true,
        responsiveLayers: false,
        preset: ['sq_flyoff', 'sq_drop', 'sq_squeeze', 'sq_random', 'sq_diagonal_rev', 'sq_diagonal', 'sq_fade_random', 'sq_fade_diagonal_rev', 'sq_fade_diagonal', 'explode', 'implode', 'fountain', 'shot_right', 'shot_left', 'zipper_right', 'zipper_left', 'bar_slide_random', 'bar_slide_bottomright', 'bar_slide_bottomright', 'bar_slide_topright', 'bar_slide_topleft'],
        order: 'random',
        block: {
            vertical: 10,
            horizontal: 4
        },
        animation: {
            speed: 500,
            delay: 50,
            transition: 'grow',
            variation: 'topleft',
            pattern: 'diagonal',
            direction: 'topleft'
        }
    });

    //For Unoslider Banner3:
    $('#slider3').unoslider({
        width: 280,
        height: 240,
        tooltip: true,
        indicator: {
            autohide: false
        },
        navigation: {
            autohide: true
        },
        slideshow: {
            hoverPause: true,
            continuous: true,
            timer: true,
            speed: 9,
            infinite: true,
            autostart: true
        },
        responsive: true,
        responsiveLayers: false,
        preset: ['sq_flyoff', 'sq_drop', 'sq_squeeze', 'sq_random', 'sq_diagonal_rev', 'sq_diagonal', 'sq_fade_random', 'sq_fade_diagonal_rev', 'sq_fade_diagonal', 'explode', 'implode', 'fountain', 'shot_right', 'shot_left', 'zipper_right', 'zipper_left', 'bar_slide_random', 'bar_slide_bottomright', 'bar_slide_bottomright', 'bar_slide_topright', 'bar_slide_topleft'],
        order: 'random',
        block: {
            vertical: 10,
            horizontal: 4
        },
        animation: {
            speed: 500,
            delay: 50,
            transition: 'grow',
            variation: 'topleft',
            pattern: 'diagonal',
            direction: 'topleft'
        }
    });
});

//For Isotope Style:
jQuery(document).ready(function($) {

    var $container = $('#container');

    $container.isotope({
        itemSelector: '.element'
    });

    var $optionSets = $('#options .option-set'),
    $optionLinks = $optionSets.find('a');

    $optionLinks.click(function() {
        var $this = $(this);
        // don't proceed if already selected
        if ($this.hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');

        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
        key = $optionSet.attr('data-option-key'),
        value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false: value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            // changes in layout modes need extra logic
            changeLayoutMode($this, options)
        } else {
            // otherwise, apply new options
            $container.isotope(options);
        }

        return false;
    });
});

//Calendar Style:
jQuery(document).ready(function($) {
		$( ".datepicker" ).datepicker({
			inline: true,
			showOtherMonths: true
		});
});

//For Weather:
jQuery(document).ready(function () {
	$('#weather').weatherfeed(['USNY0996']);
});


/* Carousels Testimonials */							
jQuery(document).ready(function (){
	 $('#comment_tab').carouFredSel({
		responsive: true,
		auto: false,
		pagination: {
			container: '#comment_list',
			event: 'click',
			anchorBuilder : false
		}
	 });
});

/* Marquee Style */	
jQuery(document).ready(function ($){
	$("#marquee_style").kxbdMarquee({isEqual:false});
})();
