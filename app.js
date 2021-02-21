const root = document.querySelector(".app");
const form = document.querySelector("form");

let mangaLists = [];

//fetch API
/*
fetch("./assets/manga.json")
	.then((response) => {
		if (response.status === 200) {
			return response.json();
		} else if (response.ok === false) {
			throw new Error("Oops! Something went wrong!");
		}
	})
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
		root.innerHTML = error.message;
	});
*/

//Promise API using XMLHTTPREQUEST
/*
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
		xmlr.open("GET", "./assets/manga.json");
		xmlr.send();
	});
};

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
*/

//Async and Await
const requestManga = async () => {
	try {
		const get = await fetch("./assets/manga.json");
		if (get.ok === true) {
			const manga = await get.json();
			mangaLists = [...manga];
			for (const comic of mangaLists) {
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
						<button class="btn">Delete</button>
					</div>
				`;
				root.insertAdjacentHTML("beforeend", tile);
			}
		} else if (get.ok === false) {
			throw new Error(`Uh-oh! ${get.statusText}.`);
		}
	} catch (error) {
		root.style.backgroundColor = "#fcafa5";
		root.innerHTML = error;
	}
};

//form functionality
const formHandler = (event) => {
	event.preventDefault();

	const formData = {
		title: form.title.value,
		description: form.description.value,
		author: form.author.value,
		release: form.release.value,
		status: { choice: form.status.value },
		genre: { action: form.genre.value },
	};

	mangaLists.push(formData);
	form.reset();
};

requestManga();
form.addEventListener("submit", formHandler);
