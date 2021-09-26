class Random {
	constructor() {
		this.randomBtn = document.getElementById("random__btn");
	}

	getRandomQuote() {
		this.randomBtn.addEventListener("click", function () {
			console.log("pressed");
		});
	}
}

export default Random;
