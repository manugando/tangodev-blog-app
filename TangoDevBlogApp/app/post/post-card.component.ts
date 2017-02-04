import { Component, Input } from "@angular/core";

import { Post } from "./post";

@Component({
    selector: "post-card",
    moduleId: module.id,
    templateUrl: "./post-card.component.html",
})
export class PostCardComponent {
    @Input() post: Post;
}
