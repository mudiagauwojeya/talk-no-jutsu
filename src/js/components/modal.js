class Modal {
	template = null;
	templateContent = null;

	static toggleModalAndSpinner(toggle = true) {
		this.template = document.getElementById("template");
		this.templateContent = document.importNode(this.template.content, true);
		this.modal = this.templateContent.querySelector(".modal");

		if (!toggle) {
			this.modal.classList.remove("active");
			return;
		}

		this.modal.classList.add("active");
		document.body.insertAdjacentElement("afterbegin", this.modal);
	}

	hide() {
		Modal.toggleModalAndSpinner(false);
	}

	show() {
		Modal.toggleModalAndSpinner();
	}
}

export default Modal;
