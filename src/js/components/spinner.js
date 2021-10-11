import { toggleModalAndSpinner } from "../helper";

class Spinner {
	template = null;
	templateContent = null;

	static toggleModalAndSpinner(toggle = true) {
		if (!toggle) {
			this.modal = this.templateContent.querySelector(".modal");
			this.spinner = this.templateContent.querySelector(".spinner");
			this.modal.classList.remove("active");
			this.spinner.classList.remove("active");
			return;
		}
		this.modal = this.templateContent.querySelector(".modal");
		this.spinner = this.templateContent.querySelector(".spinner");
		this.modal.classList.add("active");
		this.spinner.classList.add("active");
	}

	hide() {
		Spinner.toggleModalAndSpinner(false);
	}

	show() {
		Spinner.toggleModalAndSpinner();
	}
}

export default Spinner;
