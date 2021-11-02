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
	fetch(url)
		.then((response) => {
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			return response.json();
		})
		.catch((error) => {
			//BUG: Rethrow this error to the try-catch block to handle it
			throw error;
		});
};
