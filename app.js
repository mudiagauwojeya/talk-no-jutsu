const root = document.querySelector(".app");

//fetch API
fetch("./assets/manga.json")
	.then((response) => response.json())
	.then((manga) => {
		console.log(manga);

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
