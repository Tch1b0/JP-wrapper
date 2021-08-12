export declare class Requester {
    url: string;
    constructor(url?: string);
    get(uri: string): Promise<any>;
}
