//all what is rendered goes here
class UI {
	constructor() {
		this.menu = document.querySelector(".sidebar__menu");
	}

	switchTab(event) {
		const activeTab = event.target;
		const allTabs = document.querySelectorAll(".sidebar__menu__item__link");
		allTabs.forEach((tab) => {
			tab.classList.remove("active");
		});
		activeTab.classList.add("active");

		const allSections = document.querySelectorAll(".content__section");
		allSections.forEach((section) => {
			section.classList.remove("active");
		});
		document
			.getElementById(activeTab.dataset.target.slice(1))
			.classList.add("active");
	}

	navigate() {
		this.menu.addEventListener("click", this.switchTab);
	}
}

export default UI;
