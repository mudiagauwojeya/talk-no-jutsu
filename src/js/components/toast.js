class Toast {
	template = null;
	templateContent = null;

	static toggleModalAndSpinner(toggle = true) {
		this.template = document.getElementById("template");
		this.templateContent = document.importNode(this.template.content, true);

		if (!toggle) {
			this.toast.classList.remove("active");
			document.body.removeChild(this.toast);
			return;
		}

		this.toast = this.templateContent.querySelector(".toast");
		this.toast.classList.add("active");
		document.body.insertAdjacentElement("afterbegin", this.toast);
	}

	hide() {
		toast.toggleModalAndSpinner(false);
	}

	show() {
		toast.toggleModalAndSpinner();
	}
}

export default Toast;
