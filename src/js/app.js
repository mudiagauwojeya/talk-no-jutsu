import UI from "./UI/UI";
import { API_ENDPOINT } from "./config";
import { fetchQuote } from "./helper";
import { manga } from "./state";
import Spinner from "./components/spinner";
import Modal from "./components/modal";
import Toast from "./components/toast";

const ui = new UI();
const spinner = new Spinner();
const modal = new Modal();
const toast = new Toast();

//NOTE: add a DOMContentLoaded event to fetch a random quote initially
window.addEventListener("DOMContentLoaded", () => {
	console.log("loaded");
});

//navigate sidebar tabs
ui.onNavigate();

//favorite manga
ui.onFavorite();

//fetch random quotes
const fetchAllQuotes = async (url = API_ENDPOINT) => {
	try {
		modal.show();
		spinner.show();
		const quote = await fetchQuote(url);
		const [randomQuote] = manga.quotes.concat(quote);
		ui.render(randomQuote);
	} catch (error) {
		//handle error
		console.error(error.message);
	} finally {
		modal.hide();
		spinner.hide();
	}
};

//fetch random quote
ui.getRandomQuote(fetchAllQuotes);

//fetch specific quotes
ui.getQuote(fetchAllQuotes);
