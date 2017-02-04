import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Post } from "./post";

@Injectable()
export class PostService {

    constructor(private http: Http) {}

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }

    getPosts(page: Number) {
        return this.http.get("http://blog.tangodev.it/wp-json/wp/v2/posts?page=" + page + "&per_page=20&_embed=1")
            .map(res => res.json())
            .map(data => {
                let postList = [];
                data.forEach((postJson) => {
                    postList.push(this.getPostObjectFromJSON(postJson))
                });
                return postList;
            }).catch(this.handleErrors);
    }

    getPost(id: String) {
        return this.http.get("http://blog.tangodev.it/wp-json/wp/v2/posts/" + id)
            .map(res => res.json())
            .map(postJson => {
                return this.getPostObjectFromJSON(postJson);
            }).catch(this.handleErrors);
    }

    getPostObjectFromJSON(postJson) {
        let post = new Post();
        post.id = postJson.id;
        post.title = postJson.title.rendered;
        post.content = postJson.content.rendered;
        return post;
    }
}
