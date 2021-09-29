//Add the configuration files for the project here
export const API_ENDPOINT = (type) => {
	const params =
		type === "random"
			? "random"
			: type === "character"
			? "character"
			: "title";
	return `https://animechan.vercel.app/api/${params}`;
};
