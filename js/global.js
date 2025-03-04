/** Funktion som skapar en "till toppen"-knapp */

$(document).ready(function () {
	// Visa eller dölj knappen beroende på scroll-position
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			$("#back-to-top").fadeIn();
		} else {
			$("#back-to-top").fadeOut();
		}
	});

	// Smidig scroll till toppen vid klickning
	$("#back-to-top").click(function() {
		$("html, body").animate({ scrollTop: 0}, 600);
	});

});