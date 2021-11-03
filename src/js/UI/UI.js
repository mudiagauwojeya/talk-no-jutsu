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
				favoriteBtn.classList.toggle("favorited");
			});
		});
	}

	getRandomQuote(fetchQuoteHandler) {
		this.randomBtn.addEventListener("click", fetchQuoteHandler.bind(null));
	}

	getQuote(...args) {
		this.form.forEach((form) =>
			form.addEventListener("submit", this.onSubmit.bind(this, args))
		);
	}

	onSubmit(args, e) {
		const [fetchAllQuotes, API_ANIME_TITLE, API_CHARACTER_NAME] = args;
		e.preventDefault();
		//REVIEW: add some validation logic
		const title = e.currentTarget.title?.value || null;
		const name = e.currentTarget.character?.value || null;
		e.currentTarget.reset();
		if ([title, name].every(Boolean)) {
			//REVIEW: show the user some feedback using
		}
		const endPoint = title
			? API_ANIME_TITLE(title)
			: API_CHARACTER_NAME(name);
		endPoint;
		fetchAllQuotes(endPoint);
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

	error(message, toast) {
		const templateElement = document.getElementById("template");
		const errorContainer = document.importNode(templateElement.content, true);
		const errorElement = errorContainer.querySelector(".toast");
		const errorContent = `
			<h3 class="toast__header">Oops...!</h3>
			<p class="toast__content">${message}</p>
		`;
		errorElement.appendChild(errorContent);
		toast.show();
	}
}

export default UI;
