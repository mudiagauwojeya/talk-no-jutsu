import { removeActiveClass } from "../helper";

//all what is rendered goes here

class UI {
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
		this.randomBtn.addEventListener("click", fetchQuoteHandler.bind(this));
	}

	getQuote() {
		this.form.forEach((form) =>
			form.addEventListener("submit", this.handleSubmit.bind(this))
		);
	}

	render(data) {
		this.viewElement = document.querySelector(
			".content .active .content__section--quotes"
		);
		this.viewElement.textContent = "";
		this.viewElement.innerHTML = `
			<h3 class="content__section--quotes-character">${data.character}: <span class="content__section--quotes-anime">${data.anime}</span></h3>
			<p class="content__section--quotes-quote">${data.quote}</p>
		`;
	}
}

export default UI;
