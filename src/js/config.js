//Add the configuration files for the project here
export const API_ENDPOINT = "https://animechan.vercel.app/api/random";

export const API_CHARACTER_NAME = (name) => {
	return `https://animechan.vercel.app/api/quotes/character?name=${name}`;
};

export const API_ANIME_TITLE = (title) => {
	return `https://animechan.vercel.app/api/quotes/anime?title=${title}`;
};
