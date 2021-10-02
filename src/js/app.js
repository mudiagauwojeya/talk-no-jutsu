import UI from "./UI/UI";
import { API_ENDPOINT } from "./config";
import { fetchQuote } from "./helper";

const ui = new UI();

//navigate sidebar tabs
ui.navigate();

//fetch random quotes
const fetchRandomQuote = () => {
	fetchQuote(API_ENDPOINT()).then((data) => {
		const quote = data;
	});
};
ui.getRandomQuote(fetchRandomQuote);
