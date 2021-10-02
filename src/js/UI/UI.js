import { removeActiveClass } from "../helper";

//all what is rendered goes here

class UI {
	activeSection = "";
	viewElement = "";

	constructor() {
		this.menu = document.querySelector(".sidebar__menu");
		this.randomBtn = document.getElementById("random__btn");
		this.form = document.querySelectorAll(".form");
	}

	switchTab(event) {
		const activeTab = event.target;
		this.activeSection = document.getElementById(
			activeTab.dataset.target.slice(1)
		);
		removeActiveClass(".sidebar__menu__item__link");
		removeActiveClass(".content__section");
		activeTab.classList.add("active");
		this.activeSection.classList.add("active");
	}

	navigate() {
		this.menu.addEventListener("click", this.switchTab);
	}

	getRandomQuote(fetchQuoteHandler) {
		this.randomBtn.addEventListener("click", fetchQuoteHandler);
	}

	getQuote() {
		this.form.forEach((form) =>
			form.addEventListener("submit", this.handleSubmit.bind(this))
		);
	}

	render(data) {
		this.viewElement = this.activeSection.querySelector(
			".content__section--quotes"
		);
		this.viewElement.textContent = "";
		this.viewElement.textContent = `
			<h4>${data.name}: <span>${data.title}</span></h4>
			<p>${data.quote}</p>
		`;
	}
}

export default UI;
