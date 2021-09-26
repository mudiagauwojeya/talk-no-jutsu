import { API_ENDPOINT } from "./config.js";

export const manga = {
	quotes: [],
	favorites: [],
};

export const getQuotes = async (query) => {
	try {
		const response = await fetch(`${API_ENDPOINT}${query}`);
		const quotesData = await response.json();
	} catch (error) {}
};
