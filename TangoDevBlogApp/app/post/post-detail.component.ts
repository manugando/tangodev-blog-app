import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

import { Post } from "./post";
import { PostService } from "./post.service";

@Component({
    selector: "post-detail",
    moduleId: module.id,
    templateUrl: "./post-detail.component.html",
})
export class PostDetailComponent implements OnInit {
    post: Post;

    constructor(
        private postService: PostService,
        private routerExtensions: RouterExtensions,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.post = new Post();
        const id = this.route.snapshot.params["id"];
        this.postService.getPost(id)
        .subscribe(loadedPost => {
            this.post = loadedPost;
        });
    }

    public goBack() {
        this.routerExtensions.back();
    }
}
