import UI from "./UI/UI";
import { API_ENDPOINT } from "./config";

const ui = new UI();

ui.navigate();
ui.getRandomQuote(API_ENDPOINT);
