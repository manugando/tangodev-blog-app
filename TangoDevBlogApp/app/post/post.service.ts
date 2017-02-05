import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Post } from "./post";
import { Category } from "./category";

@Injectable()
export class PostService {

    constructor(private http: Http) {}

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }

    getPosts(page: number, category: number) {
        let categoryFilter = "";
        if(category > 0) {
            categoryFilter = "&categories=" + category;
        }
        return this.http.get("http://blog.tangodev.it/wp-json/wp/v2/posts?page=" + page + "&per_page=20&_embed=1" + categoryFilter)
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

    getCategories() {
        return this.http.get("http://blog.tangodev.it/wp-json/wp/v2/categories")
            .map(res => res.json())
            .map(data => {
                let catList = [];
                catList.push(this.getHomeCategory());
                data.forEach((categoryJson) => {
                    catList.push(this.getCategoryObjectFromJSON(categoryJson))
                });
                return catList;
            }).catch(this.handleErrors);
    }

    getCategoryObjectFromJSON(categoryJson) {
        let category = new Category();
        category.id = categoryJson.id;
        category.name = categoryJson.name;
        return category;
    }

    getHomeCategory() {
        let category = new Category();
        category.id = 0;
        category.name = "Home";
        return category;
    }
}
