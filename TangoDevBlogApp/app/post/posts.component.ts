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
    currentPage: number;

    constructor(private postService: PostService) { }

    ngOnInit(): void {
        this.currentPage = 0;
        this.loadMorePost();
    }

    loadMorePost(): void {
        this.currentPage = this.currentPage + 1;
        this.postService.getPosts(this.currentPage)
        .subscribe(loadedPosts => {
            loadedPosts.forEach((post) => {
                this.posts.push(post);
            });
        });
    }
}
