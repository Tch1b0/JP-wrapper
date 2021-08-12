import { Post } from "./post";
import { PostCollection } from "./postcollection";
import { Requester } from "./requester";

export { Post } from "./post";
export { PostCollection } from "./postcollection";
export { Requester } from "./requester";

async function test() {
	let r = new Requester();

	let pc = new PostCollection(r);
	let all_posts: Post[] = await pc.all();
	let post = all_posts[0];

	console.log(post);
	console.log(await pc.all_titles());
	console.log(await pc.count());

	return null;
}

test();
