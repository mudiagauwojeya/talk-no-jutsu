//Add helper functions for the project here
import "regenerator-runtime/runtime";

//helper function to remove active class from selected element
export const removeActiveClass = (selector) => {
	const elements = document.querySelectorAll(selector);
	elements.forEach((element) => {
		element.classList.remove("active");
	});
};

export const fetchQuote = async (url) => {
	try {
		const requestQuote = await fetch(url);
		if (!requestQuote.ok) throw new Error(requestQuote.statusText);
		const quote = await requestQuote.json();
		console.log(quote);
	} catch (error) {
		console.error(error);
	} finally {
		//hide spinner
	}
};
