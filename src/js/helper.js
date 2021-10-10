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
		const requestQuote = await fetch(url);
		if (!requestQuote.ok) throw new Error(requestQuote.statusText);
		const quote = await requestQuote.json();
		return quote;
	} catch (error) {
		//handle error
		console.error(error);
	} finally {
		//hide spinner
	}
};

//helper function to add or remove active class from modal and spinner
export const toggleModalAndSpinner = (
	modal,
	spinner,
	parentEl,
	selectModal,
	selectSpinner
) => {
	modal = this.parentEl.querySelector(`.${selectModal}`);
	spinner = this.parentEl.querySelector(`.${selectSpinner}`);
	this.modal.classList.remove("active");
	this.spinner.classList.remove("active");
};
