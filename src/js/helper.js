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
		const request = await fetch(url);
		if (!response.ok) throw new Error(response.statusText);
		const response = await request.json();
		return response;
	} catch (error) {
		throw error;
	}
};
