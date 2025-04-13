import { API } from "osu-api-v2-js";

export async function getAPI() {
	const clientID = parseInt(process.env.APP_CLIENT_ID ?? "");
	const clientSecret = process.env.APP_CLIENT_SECRET;

	if (typeof clientSecret != "string" || isNaN(clientID)) {
		throw new Error("Client ID or client secret is unavailable");
	}

	const api = await API.createAsync(clientID, clientSecret);

	return api;
}
