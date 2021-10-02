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
		const activeSection = document.getElementById(
			activeTab.dataset.target.slice(1)
		);
		removeActiveClass(".sidebar__menu__item__link");
		removeActiveClass(".content__section");
		activeTab.classList.add("active");
		activeSection.classList.add("active");
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

	render(data) {}
}

export default UI;
