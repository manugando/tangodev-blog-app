import { Component, OnInit } from "@angular/core";

import { Post } from "./post";
import { PostService } from "./post.service";

@Component({
    selector: "post-list",
    moduleId: module.id,
    templateUrl: "./posts.component.html",
})
export class PostsComponent implements OnInit {
    posts: Array<Post> = [];

    constructor(private postService: PostService) { }

    ngOnInit(): void {
        this.postService.getPosts()
        .subscribe(loadedPosts => {
            loadedPosts.forEach((post) => {
                this.posts.push(post);
            });
        });
    }
}
