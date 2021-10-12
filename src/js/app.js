import UI from "./UI/UI";
import { API_ENDPOINT } from "./config";
import { fetchQuote } from "./helper";
import { manga } from "./state";
import Spinner from "./components/spinner";

const ui = new UI();
const spinner = new Spinner();

//TODO: add a DOMContentLoaded event to fetch a random quote initially

//navigate sidebar tabs
ui.navigate();

//fetch random quotes
const fetchRandomQuote = () => {
	fetchQuote(API_ENDPOINT())
		.then((data) => {
			const quote = data;
			const [randomQuote] = manga.quotes.concat(quote);
			ui.render(randomQuote);
		})
		.catch((error) => {
			console.error(error.message);
		});
};

//fetch random quote
ui.getRandomQuote(fetchRandomQuote);

spinner.hide();
