/** Hanterar uppdatering av event på första-sidan */

// Array med events
const events = [
	{
		title: "Knytkalas på Bäcknäset",
		date: "2025-08-24",
		icon: "../img/date_index.png",
		image: "../img/knytkalas.png",
		description: "Välkommen på knytkalas den 24 augusti nere vid hamnen i Bäcknäset! Ta med något gott att äta och dela med andra. Vi njuter av sensommarkvällen tillsammans med god mat, trevligt sällskap och fin utsikt över vattnet."
	},
	{
		title: "Våffeldagen",
		date: "2025-03-25",
		icon: "../img/date_vafflor.png",
		image: "../img/vafflor.jpg",
		description: "Fira våffeldagen med nygräddade våfflor i bygdegården! Det blir en mysig eftermiddag med gott fika och chans att vinna fina priser i vårt lotteri. Kom och njut av gemenskapen och en härlig doft av nystekta våfflor."
	},
	{
		title: "Glöggmys med tomten",
		date: "2025-12-07",
		icon: "../img/date_tomten.png",
		image: "../img/tomten.png",
		description: "Välkommen till en magisk kväll vid grillringen utanför bygdegården! Vi bjuder på glögg, julmust och pepparkakor medan vi väntar på att tomten kanske dyker upp i skogens dunkel. Barnen får möjlighet att lämna sina önskelistor direkt till tomten – en riktig jultradition för hela byn!"
	},
	{
		title: "Bredviksvasan",
		date: "2025-03-08",
		icon: "../img/date_vasan.png",
		image: "../img/vasan.png",
		description: "På lördagen klockan 11.00 går startskottet för årets Bredviksvasan! Deltagarna delas in i lag och tar sig fram på längdskidor genom en bana med olika stationer och utmaningar. Vinnarna koras baserat på insamlade poäng, och ett specialpris delas ut till det snabbaste laget. En rolig och fartfylld dag för alla åldrar!"
	},
	{
		title: "Majbrasa mitt i byn",
		date: "2025-04-30",
		icon: "../img/date_majbrasa.png",
		image: "../img/majbrasa.jpg",
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
		document.querySelector(".date-index img").src = 
		document.querySelector(".image-index img").src = nearestEvent.image;
		document.querySelector(".image-index img").alt = nearestEvent.title;
		document.querySelector(".textcontainer-index h2").textContent = nearestEvent.title;
		document.querySelector(".textcontainer-index p").textContent =nearestEvent.description;
	}
}
