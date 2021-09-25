//all what is rendered goes here
class UI {
	constructor() {
		this.menu = document.querySelector(".sidebar__menu");
	}

	switchTab(event) {
		console.log(event);
	}

	navigate() {
		this.menu.addEventListener("click", this.switchTab);
	}
}

export default UI;
