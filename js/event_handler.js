/** Hanterar uppdatering av event på första-sidan */

// Array med events
const events = [
	{
		title: "Knytkalas på Bäcknäset",
		date: "2025-08-24T00:00:00",
		icon: "../img/event/date_index.png",
		image: "../img/event/knytkalas.png",
		description: "Välkommen på knytkalas den 24 augusti nere vid hamnen i Bäcknäset! Ta med något gott att äta och dela med andra. Vi njuter av sensommarkvällen tillsammans med god mat, trevligt sällskap och fin utsikt över vattnet."
	},
	{
		title: "Våffeldagen",
		date: "2025-03-25T00:00:00",
		icon: "../img/event/date_vafflor.png",
		image: "../img/event/vafflor.jpg",
		description: "Fira våffeldagen med nygräddade våfflor i bygdegården! Det blir en mysig eftermiddag med gott fika och chans att vinna fina priser i vårt lotteri. Kom och njut av gemenskapen och en härlig doft av nystekta våfflor."
	},
	{
		title: "Glöggmys med tomten",
		date: "2025-12-07T00:00:00",
		icon: "../img/event/date_tomten.png",
		image: "../img/event/tomten.png",
		description: "Välkommen till en magisk kväll vid grillringen utanför bygdegården! Vi bjuder på glögg, julmust och pepparkakor medan vi väntar på att tomten kanske dyker upp i skogens dunkel. Barnen får möjlighet att lämna sina önskelistor direkt till tomten – en riktig jultradition för hela byn!"
	},
	{
		title: "Bredviksvasan",
		date: "2025-03-08T00:00:00",
		icon: "../img/event/date_vasan.png",
		image: "../img/event/vasan.png",
		description: "På lördagen klockan 11.00 går startskottet för årets Bredviksvasan! Deltagarna delas in i lag och tar sig fram på längdskidor genom en bana med olika stationer och utmaningar. Vinnarna koras baserat på insamlade poäng, och ett specialpris delas ut till det snabbaste laget. En rolig och fartfylld dag för alla åldrar!"
	},
	{
		title: "Majbrasa mitt i byn",
		date: "2025-04-30T00:00:00",
		icon: "../img/event/date_majbrasa.png",
		image: "../img/event/majbrasa.jpg",
		description: "Fira in våren med oss mitt i byn den 30 april! Vi tänder majbrasa, sjunger in våren och njuter av en härlig kväll tillsammans."
	}
];

// Funktion för att hitta det närmaste eventet
function getNearestEvent() {
	const today = new Date();
	let nearestEvent = null;
	let minDiff = Infinity;

	events.forEach(event => {
		const eventDate = new Date(event.date);
		const diff = eventDate - today;

		if ( diff >= 0 && diff < minDiff) {
			minDiff = diff;
			nearestEvent = event;
		}
	});

	return nearestEvent;
}

// Funktion för att uppdatera HTML med närmaste eventet
function updateEventDisplay() {
	const nearestEvent = getNearestEvent();

	if (nearestEvent) {
		document.querySelector(".date-index img").src = nearestEvent.icon;
		document.querySelector(".date-index img").alt = nearestEvent.date;
		document.querySelector(".image-index img").src = nearestEvent.image;
		document.querySelector(".image-index img").alt = nearestEvent.title;
		document.querySelector(".textcontainer-index h2").textContent = nearestEvent.title;
		document.querySelector(".textcontainer-index p").textContent =nearestEvent.description;
	}
}

// Kör funktionen när sidan laddas
document.addEventListener("DOMContentLoaded", updateEventDisplay);
