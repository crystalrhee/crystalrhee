(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1140px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
		xxsmall: '(max-width: 320px)'
	});

	$(function() {

		var	$window = $(window),
		$body = $('body');

		$body.addClass('is-loading');

		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-loading');
			}, 250);
		});

		$('form').placeholder();

		skel.on('+mobile -mobile', function() {
			$.prioritize(
				'.important\\28 mobile\\29',
				skel.breakpoint('mobile').active
				);
		});

		// $('.scrolly').scrolly();

		$('.map').hover(
			function () {$(this).addClass('scale');}, 
			function () {$(this).removeClass('scale');}
		);

		$('.map ul li').hover(
			function () {$(this).addClass('animate');}, 
			function () {$(this).removeClass('animate');}
		);
	});

})(jQuery);