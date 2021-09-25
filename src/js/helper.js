//Add helper functions for the project here

//helper function to remove active class from selected element
const removeActiveClass = (selector) => {
	const elements = document.querySelectorAll(selector);
	elements.forEach((element) => {
		element.classList.remove("active");
	});
};
