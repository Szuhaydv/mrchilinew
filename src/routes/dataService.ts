export class NavLink {
	constructor(
		public name = "",
		public route = "",
		public hidden = false,
	) { }
}

export const routes = [
	new NavLink("Főoldal", "", false),
	new NavLink("Termékeink", "products", true),
	new NavLink("Paprikáink", "chilies", true),
	new NavLink("Kapcsolat", "contact", true),
	new NavLink("Rólunk", "about", true),
	new NavLink("Rendelés", "order", false),
];

export class Card {
	constructor(
		public readonly title = "title",
		public readonly subtitle = "subtitle",
		public readonly imgPath = "like.svg",
		public readonly altText = "icon"
	) { }
}

export const cards: Card[] = [
	new Card(
		"Ingyenes szállítás",
		"30000 Ft feletti rendeléseknél",
		"/delivery.svg",
		"delivery icon",
	),
	new Card(
		"Csomagpontra szállítás",
		"Akár 990 forinttól",
		"/box.svg",
		"box icon",
	),
	new Card(
		"Kézműves termék",
		"Saját kezűleg, nagy gondossággal elkészítve",
		"/kindness.svg",
		"kindness icon",
	),
	new Card(
		"Akciók",
		"Kedvezményes árú termékek",
		"/sale.svg",
		"prize icon",
	),
];

export class ChiliInfo {
	constructor(
		public readonly name = "Chili",
		public readonly origin = "Country",
		public readonly spiceLevel = 2,
		public readonly description = "lorem ipsum",
	) { }
}

export const chilies = [
	new ChiliInfo(
		"Trinidad Morgua Scorpio",
		"Japán 🇯🇵",
		3,
		"Lorem ipsum dolor sit amet dasrfsa consectetur. Donec mauris etiam elit orci sed quam cursus arcu.",
	),
];

export class Review {
	constructor(
		public readonly name = "",
		public readonly review = "",
		public readonly avatar = "",
		public readonly date = "",
	) { }
}

export const reviews: Review[] = [
	new Review(
		"Nagy Péter",
		"Finom szószokat kóstoltam tőlük. Ajánlom mindenkinek.",
		"/avatar1.svg",
		"2024 / 10 / 19",
	),
	new Review(
		"Tóth Bertalan",
		"Mindenki vegye komolyan a Végítéletet. Már tíz perce zsibbad a szám, de tükörtojásra kihagyhatatlan.",
		"/avatar2.svg",
		"2024 / 10 / 17",
	),
	new Review(
		"Fekete Eszter",
		"A páromnak vettem névnapjára egy barackos és egy epres szószt. Mindkettő ízlett neki.",
		"/avatar3.svg",
		"2024 / 10 / 15",
	),
];

export class GYIKelement {
	constructor(
		public readonly question = "",
		public readonly answer = "",
	) { }
}

export const gyikElements: GYIKelement[] = [
	new GYIKelement(
		"Hogyan kell rendelést leadni?",
		"Tedd kosárba a Termékeink oldalon a kiválasztott szószokat, add meg a személyes adataidat, válaszd ki a szállítási módot, majd végül a fizetési módot. Banki átutalás esetén utald el a teljes összeget a megadott bankszámlaszámra és készítjük is a csomagod. Utánvétes rendelés esetén nincs további teendőd.",
	),
	new GYIKelement("Milyen szállítási módok közül választhatok?", ""),
	new GYIKelement(
		"Szoktatok vásárokra is járni?",
		"Igen, egyes termelői piacokon megtalálhatók vagyunk. A legfrissebb infókért látogass el a Tiktok oldalunkra (Mr. Chili).",
	),
];

