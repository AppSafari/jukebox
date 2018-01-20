$(function(){
    // jQuery Ripples
    if (typeof $.fn.ripples == 'function') {
        try {
            $('.ripple').ripples({
                resolution: 500,
                perturbance: 0.04
            });
        } catch (e) {
            $('.error').show().text(e);
        }
    }
    // Automatic drops
	setInterval(function() {
		var $el = $('.ripple');
		var x = Math.random() * $el.outerWidth();
		var y = Math.random() * $el.outerHeight();
		var dropRadius = 20;
		var strength = 0.04 + Math.random() * 0.04;

		$el.ripples('drop', x, y, dropRadius, strength);
	}, 400);
    var single_screen_slide = $('.single_screen_slide');
    single_screen_slide.owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        mouseDrag: true,
        touchDrag: false,
        center: true,
        items: 1,
    });
    //home_text_slide
    var home_text_slide = $('.home_text_slide');
    home_text_slide.owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        mouseDrag: true,
        touchDrag: false,
        center: true,
        items: 1,
    });
    $('.video-popup').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<style>.mfp-iframe-holder .mfp-content {max-width: 900px;height:500px}</style>' +
                '<div class="mfp-iframe-scaler" >' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div></div>'
        }
    });

});
