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

    getPosts() {
        return this.http.get("http://blog.tangodev.it/wp-json/wp/v2/posts?page=1&per_page=2&_embed=1")
            .map(res => res.json())
            .map(data => {
                let postList = [];
                data.forEach((postJson) => {
                    postList.push(
                        new Post(
                            postJson.id, 
                            postJson.title.rendered, 
                            postJson.content.rendered)
                        );
                });
                return postList;
            }).catch(this.handleErrors);
    }

    getItem(id: number): Post {
        return new Post("1", "TITOLO", "TESTO");
    }
}
