class Spinner {
	constructor() {
		this.template = document.getElementById("template");
		this.templateContent = document.importNode(this.template.content, true);
	}

	hide() {
		this.modal = this.templateContent.querySelector(".modal");
		this.spinner = this.templateContent.querySelector(".spinner");
		this.modal.classList.remove("active");
		this.spinner.classList.remove("active");
	}

	show() {
		this.modal = this.templateContent.querySelector(".modal");
		this.spinner = this.templateContent.querySelector(".spinner");
		this.modal.classList.add("active");
		this.spinner.classList.add("active");
	}
}

export default Spinner;
