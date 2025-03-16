/** Animation för beskrivning av event 
$(document).ready(function () {
    $(".label-event").click(function () {
        let desc = $(this).next(".event-description");
        $(".event-description").not(desc).fadeOut(200); // Dölj andra beskrivningar
        desc.fadeToggle(200);
    });
});
*/

/** Automatisk uträkning av position av event */
$(document).ready(function () {
    $(".event").each(function () {
        let dateText = $(this).find(".label-event").text(); 
        let match = dateText.match(/(\d+) (\w+)/); // Extrahera datumet

        if (match) {
            let day = parseInt(match[1]);
            let month = match[2].toLowerCase();

            let monthDays = { 
                "januari": 0, "februari": 31, "mars": 59, "april": 90, "maj": 120,
                "juni": 151, "juli": 181, "augusti": 212, "september": 243,
                "oktober": 273, "november": 304, "december": 334
            };

            if (month in monthDays) {
                let daysIntoYear = monthDays[month] + day; 
                let angle = (daysIntoYear / 365) * 360 - 90; // -90 så att 1 jan startar högst upp

                $(this).css("--angle", angle + "deg");
            }
        }
    });
});