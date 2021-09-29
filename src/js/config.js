//Add the configuration files for the project here
export const API_ENDPOINT = (type = "random") => {
	const params =
		type === "character" ? "character" : type === "title" ? "title" : type;
	return `https://animechan.vercel.app/api/${params}`;
};
