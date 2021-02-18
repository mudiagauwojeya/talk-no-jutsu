const root = document.querySelector(".app");

//fetch API
/*
fetch("./assets/manga.json")
	.then((response) => response.json())
	.then((manga) => {
		for (const comic of manga) {
			const tile = `
            <div class="manga">
                <h2 class="heading">${comic.title}</h2>
                <p class="description">${comic.description}</p>
                <div class="credits">
                    <span>author(s): ${comic.author}</span>
                    <span>year of release: ${comic.release}</span>
                    <span>status: ${comic.status}</span>
                    <span>genre: ${comic.genre}</span>
                </div>
            </div>
            `;
			root.insertAdjacentHTML("beforeend", tile);
		}
    });
*/

//Promise API
const getManga = () => {
	return new Promise((resolve, reject) => {
		const xmlr = new XMLHttpRequest();
		xmlr.addEventListener("readystatechange", () => {
			if (xmlr.readyState === 4 && xmlr.status === 200) {
				const mangaObject = JSON.parse(xmlr.response);
				resolve(mangaObject);
			} else if (xmlr.status >= 400) {
				const error = new Error(
					"Something went wrong. Please, try again later!"
				);
				reject(error.message);
			}
		});
		xmlr.open("GET", "./assets/mang.json");
		xmlr.send();
	});
};

// getManga();
// console.log(typeof getManga());
getManga()
	.then((manga) => {
		for (const comic of manga) {
			const tile = `
        <div class="manga">
            <h2 class="heading">${comic.title}</h2>
            <p class="description">${comic.description}</p>
            <div class="credits">
                <span>author(s): ${comic.author}</span>
                <span>year of release: ${comic.release}</span>
                <span>status: ${comic.status}</span>
                <span>genre: ${comic.genre}</span>
            </div>
        </div>
        `;
			root.insertAdjacentHTML("beforeend", tile);
		}
	})
	.catch((error) => {
		root.style.backgroundColor = "#fcafa5";
		root.innerHTML = error;
	});
