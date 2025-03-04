$(document).ready(function () {
    $(".label-event").click(function () {
        $(this).next(".event-description").slideToggle();
    });
});