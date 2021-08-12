import { url } from "./url";
import Showdown = require("showdown");

export class Post {
	title: string;
	description: string;
	long_description: string;
	url: string;
	logo_url: string;
	banner_url: string;

	constructor(
		title?: string,
		description?: string,
		long_description?: string,
		url?: string,
		logo_url?: string,
		banner_url?: string
	) {
		this.title = title;
		this.description = description;
		this.long_description = long_description;
		this.url = url;
		this.logo_url = logo_url;
		this.banner_url = banner_url;
	}

	// Parse the Markdown to HTML
	description_to_html() {
		let converter = new Showdown.Converter();
		this.long_description = converter.makeHtml(this.long_description);
	}

	/* 
        Create a new Post object from json-data.
        NEEDS to be static, so it can be called without an instance:
        `Post.from_json(...)` 
    */
	static from_json(data) {
		let post = new Post(
			data["title"],
			data["description"],
			data["long-description"]
		);

		post.url = `${url}/post/${post.title}`;
		post.logo_url = `${post.url}/logo`;
		post.banner_url = `${post.url}/banner`;
		return post;
	}
}
