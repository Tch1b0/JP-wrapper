export declare class Post {
    title: string;
    description: string;
    long_description: string;
    url: string;
    logo_url: string;
    banner_url: string;
    constructor(title?: string, description?: string, long_description?: string, url?: string, logo_url?: string, banner_url?: string);
    description_to_html(): void;
    static from_json(data: any): Post;
}
