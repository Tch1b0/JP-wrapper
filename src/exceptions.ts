export class RessourceNotFound {
	uri: string;

	constructor(uri: string) {
		this.uri = uri;
	}

	toString() {
		return `There is no ressource in route ${this.uri}`;
	}
}

export class WrongCredentials {
	toString() {
		return "The Credentials are wrong";
	}
}
