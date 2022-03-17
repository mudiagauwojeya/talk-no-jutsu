//REVIEW: Refactor this to extend a common base class

class Modal {
	template = null;
	templateContent = null;

	constructor() {
		this.template = document.getElementById("template");
		this.templateContent = document.importNode(this.template.content, true);
	}

	static toggleModalAndSpinner(toggle = true) {
		this.template = document.getElementById("template");
		this.templateContent = document.importNode(this.template.content, true);

		if (!toggle) {
			this.modal.classList.remove("active");
			document.body.removeChild(this.modal);
			return;
		}

		this.modal = this.templateContent.querySelector(".modal");
		this.modal.classList.add("active");
		document.body.insertAdjacentElement("afterbegin", this.modal);
	}

	hide() {
		Modal.toggleModalAndSpinner(false);
	}

	show() {
		Modal.toggleModalAndSpinner();
	}

	//TODO: Finish the closeModal method
	closeModal() {
		this.modal = this.templateContent.querySelector(".modal");
		this.modal.addEventListener("click", this.hide.bind(this))
	}
}

export default Modal;
