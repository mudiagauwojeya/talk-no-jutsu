import UI from "./UI/UI";
import { API_ENDPOINT, API_ANIME_TITLE, API_CHARACTER_NAME } from "./config";
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
	//BUG: modal does not close on error
	try {
		modal.show();
		spinner.show();
		const response = await fetchQuote(url);
		const [randomQuote] = manga.quotes.concat(response);
		randomQuote && ui.render(randomQuote);
	} catch (error) {
		const { message } = error;
		//handle error
		modal.show();
		//TODO: Give user button to remove toast
		toast.show();
		ui.error(message);
	} finally {
		modal.hide();
		spinner.hide();
	}
};

//fetch random quote
ui.getRandomQuote(fetchAllQuotes);

//fetch specific quotes
ui.getQuote(fetchAllQuotes, API_CHARACTER_NAME, API_ANIME_TITLE);
