class Spinner {
	constructor() {
		this.template = document.getElementById("template");
		this.templateContent = document.importNode(this.template.content, true);
	}

	hide() {
		console.log(this.templateContent);
	}
}

export default Spinner;
