/** Hanterar uppdatering av event på första-sidan */

// Array med events
const events = [
	{
		title: "Knytkalas på Bäcknäset",
		date: "2025-08-24",
		image: "../img/knytkalas.png",
		description: "Välkommen på knytkalas den 24 augusti nere vid hamnen i Bäcknäset! Ta med något gott att äta och dela med andra. Vi njuter av sensommarkvällen tillsammans med god mat, trevligt sällskap och fin utsikt över vattnet."
	},
	{
		title: "Våffeldagen",
		date: "2025-03-25",
		image: "../img/vafflor.jpg",
		description:
	},
	{
		title: "Glöggmys med tomten",
		date: "2025-12-07",
		image: ,
		description:
	},
	{
		title: "Bredviksvasan",
		date: "2025-03-08",
		image: ,
		description:
	},
	{
		title: "Majbrasa mitt i byn",
		date: "2025-04-30",
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
