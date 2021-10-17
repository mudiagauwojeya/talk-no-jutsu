//Add helper functions for the project here
import "regenerator-runtime/runtime";

//helper function to remove active class from selected element
export const removeActiveClass = (selector) => {
	const elements = document.querySelectorAll(selector);
	elements.forEach((element) => {
		element.classList.remove("active");
	});
};

//helper function to fetch data from server
export const fetchQuote = async (url) => {
	try {
		const response = await fetch(url);
		if (!response.ok) throw new Error(response.statusText);
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
};
