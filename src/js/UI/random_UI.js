class Random {
	constructor() {
		this.randomBtn = document.getElementById("random__btn");
	}

	getRandomQuote(query_string) {
		this.randomBtn.addEventListener("click", function (event) {
			event.preventDefault();
			console.log(query_string);
		});
	}
}

export default Random;
