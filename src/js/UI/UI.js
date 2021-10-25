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

	onNavigate() {
		this.menu.addEventListener("click", this.switchTab);
	}

	onFavorite() {
		const favoriteContainer = document.querySelectorAll(
			".content__section--display"
		);
		favoriteContainer.forEach((container) => {
			container.addEventListener("click", (e) => {
				const favoriteBtn = e.target.closest(
					".content__section--favorites"
				);
				if (!favoriteBtn) return;
				//NOTE:	add code to favorite manga
				console.log(e.target.closest(".content__section--favorites"));
			});
		});
	}

	getRandomQuote(fetchQuoteHandler) {
		//BUG: this is set to the button triggering the event
		this.randomBtn.addEventListener(
			"click",
			fetchQuoteHandler.bind(null, "random")
		);
	}

	getQuote(fetchQuoteHandler) {
		this.form.forEach((form) =>
			form.addEventListener(
				"submit",
				this.onSubmit.bind(this, fetchQuoteHandler)
			)
		);
	}

	onSubmit(fetchQuoteHandler, e) {
		e.preventDefault();
		const value =
			e.currentTarget.title.value || e.currentTarget.character.value;
		e.currentTarget.reset();
		if (!value || !value.trim() || value.length <= 1) {
			//REVIEW: show the user some feedback using
		}
		const endPoint = value.trim().toLowerCase();
		fetchQuoteHandler(endPoint);
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
