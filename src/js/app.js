import UI from "./UI/UI";
import { API_ENDPOINT } from "./config";
import "regenerator-runtime/runtime";

const ui = new UI();

ui.navigate();
ui.getRandomQuote(API_ENDPOINT);
