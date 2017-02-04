import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

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
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params["id"];
        this.post = this.postService.getItem(id);
    }
}
