import { Post } from "./post";
import { Requester } from "./requester";

// Use PostCollection to get different Posts
export class PostCollection {
	url: string;
	requester: Requester;

	// Allow a custom API and set the default on default
	constructor(requester: Requester) {
		this.requester = requester;
	}

	// Get all Posts asynchronus (promise based)
	async all() {
		let data = await this.requester.get("/posts");
		let posts: Array<Post> = [];

		// Iterate through the post-json-object and create Post objects from it
		for (var post_data of data) {
			posts.push(Post.from_json(post_data));
		}

		return posts;
	}

	async by_title(title: string) {
		let data = await this.requester.get(`/post/${title}`);

		return Post.from_json(data);
	}

	async by_index(index: number) {
		let data = await this.requester.get(`/post/index/${index}`);

		return Post.from_json(data);
	}

	async all_titles() {
		return await this.requester.get("/posts/titles");
	}

	async count() {
		return await this.requester.get("/posts/count");
	}
}
