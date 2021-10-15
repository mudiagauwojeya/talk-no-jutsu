class Spinner {
	template = null;
	templateContent = null;

	static toggleModalAndSpinner(toggle = true) {
		this.template = document.getElementById("template");
		this.templateContent = document.importNode(this.template.content, true);
		this.spinner = this.templateContent.querySelector(".spinner");

		if (!toggle) {
			this.spinner.classList.remove("active");
			return;
		}

		this.spinner.classList.add("active");
		document.body.insertAdjacentElement("afterbegin", this.spinner);
		//REVIEW: add the top property to control the scroll
		this.spinner.scrollIntoView({ behavior: "smooth" });
	}

	hide() {
		Spinner.toggleModalAndSpinner(false);
	}

	show() {
		Spinner.toggleModalAndSpinner();
	}
}

export default Spinner;
