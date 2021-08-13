import axios from "axios";
import { RessourceNotFound, ServerError, WrongCredentials } from "./exceptions";
import { url as origin_url } from "./url";

export class Requester {
	url: string;

	constructor(url: string = origin_url) {
		this.url = url;
	}

	async get(uri: string) {
		// Wait for the response
		let response = await axios.get(`${this.url}${uri}`);

		// Handle the response if the status code isn't 200(OK)
		if (response.status !== 200) {
			switch (response.status) {
				// If there is no content
				case 404:
					throw new RessourceNotFound(uri);

				case 204:
					throw new RessourceNotFound(uri);

				// If the User is unauthorized
				case 401:
					throw new WrongCredentials();

				// If there is an internal server error
				case 500:
					throw new ServerError();
			}
		}

		return response.data;
	}
}
