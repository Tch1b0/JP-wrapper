"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
var url_1 = require("./url");
var Showdown = require("showdown");
var Post = /** @class */ (function () {
    function Post(title, description, long_description, url, logo_url, banner_url) {
        this.title = title;
        this.description = description;
        this.long_description = long_description;
        this.url = url;
        this.logo_url = logo_url;
        this.banner_url = banner_url;
    }
    // Parse the Markdown to HTML
    Post.prototype.description_to_html = function () {
        var converter = new Showdown.Converter();
        this.long_description = converter.makeHtml(this.long_description);
    };
    /*
        Create a new Post object from json-data.
        NEEDS to be static, so it can be called without an instance:
        `Post.from_json(...)`
    */
    Post.from_json = function (data) {
        var post = new Post(data["title"], data["description"], data["long-description"]);
        post.url = url_1.url + "/post/" + post.title;
        post.logo_url = post.url + "/logo";
        post.banner_url = post.url + "/banner";
        return post;
    };
    return Post;
}());
exports.Post = Post;
