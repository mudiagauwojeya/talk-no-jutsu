const root = document.querySelector(".app");
const form = document.querySelector("form");

let mangaLists = [];
let id = 0;

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

const renderManga = (addUserManga = false) => {
	if (addUserManga === true) {
		for (const comic of mangaLists) {
			const tile = `
				<div class="manga" id=${comic.id}>
					<h2 class="heading">${comic.title}</h2>
					<p class="description">${comic.description}</p>
					<div class="credits">
						<span>author(s): ${comic.author}</span>
						<span>year of release: ${comic.release}</span>
						<span>status: ${comic.status.choice}</span>
						<span>genre: ${comic.genre.action}</span>
					</div>
					<button class="btn">Delete</button>
				</div>
			`;
			root.insertAdjacentHTML("beforeend", tile);
		}
	} else {
		for (const comic of mangaLists) {
			id++;
			comic.id = id;
			const tile = `
				<div class="manga" id=${comic.id}>
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
	}

	document.getElementById(id).scrollIntoView({ behavior: "smooth" });
};

//Async and Await
const requestManga = async () => {
	try {
		const get = await fetch("./assets/manga.json");
		if (get.ok) {
			const manga = await get.json();
			mangaLists = [...manga];
			renderManga();
			return;
		}
		throw new Error(`Uh-oh! ${get.statusText}.`);
	} catch (error) {
		root.style.backgroundColor = "#fcafa5";
		root.innerHTML = error.message;
	}
};

//form functionality
const formHandler = (event) => {
	event.preventDefault();
	id++;
	const formData = {
		title: form.title.value,
		description: form.description.value,
		author: form.author.value,
		release: form.release.value,
		status: { choice: form.status.value },
		genre: { action: form.genre.value },
		id,
	};
	mangaLists.push(formData);
	renderManga(true);
	form.reset();
};

requestManga();
form.addEventListener("submit", formHandler);
