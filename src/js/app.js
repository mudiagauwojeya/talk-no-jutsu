import UI from "./UI/UI";
import { API_ENDPOINT } from "./config";
import { fetchQuote } from "./helper";
import { manga } from "./state";

const ui = new UI();

//navigate sidebar tabs
ui.navigate();

//fetch random quotes
const fetchRandomQuote = () => {
	fetchQuote(API_ENDPOINT()).then((data) => {
		const quote = data;
		const [randomQuote] = manga.quotes.concat(quote);
		ui.render(randomQuote);
	});
};

//fetch random quote
ui.getRandomQuote(fetchRandomQuote);
