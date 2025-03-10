
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

/** Ändrar stil på menyn när man hovrar */
const menuItems = document.querySelectorAll(".menu ul li a");
menuItems.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.opacity = "1.0"; // Ändra textfärg på hover
    });
    item.addEventListener("mouseout", () => {
        item.style.opacity = ""; // Återställ textfärg
    });
});

/** Funktion av hamburger-meny */
$(document).ready(function () {
    $(".hamb-menu").click(function () {
        $("#menu").stop(true, true).slideToggle(300, function () {
            $(this).toggleClass("active"); // Lägger till/ta bort "active" efter slide-animationen
        });
        $(".hamb-menu").toggleClass("active"); // För att eventuellt animera hamburgarikonen
    });
});