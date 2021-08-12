import { Post } from "./post";
import { Requester } from "./requester";
export declare class PostCollection {
    url: string;
    requester: Requester;
    constructor(requester: Requester);
    all(): Promise<Post[]>;
    by_title(title: string): Promise<Post>;
    by_index(index: number): Promise<Post>;
    all_titles(): Promise<any>;
    count(): Promise<any>;
}
