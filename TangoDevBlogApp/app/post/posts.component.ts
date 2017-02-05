import { Component, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawerComponent, SideDrawerType } from 'nativescript-telerik-ui/sidedrawer/angular';
import { Post } from "./post";
import { Category } from "./category";
import { PostService } from "./post.service";

@Component({
    selector: "post-list",
    moduleId: module.id,
    templateUrl: "./posts.component.html",
})
export class PostsComponent implements OnInit {
    posts: Array<Post> = [];
    categories: Array<Category> = [];
    currentPage: number;
    currentCategory: number;

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    drawer : SideDrawerType;

    constructor(private postService: PostService) { }

    ngOnInit(): void {
        this.currentPage = 0;
        this.currentCategory = 0;
        this.loadCategories();
        this.loadMorePost();
    }

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
    }

    openDrawer(): void {
        this.drawer.toggleDrawerState();
    }

    loadMorePost(): void {
        this.currentPage = this.currentPage + 1;
        this.postService.getPosts(this.currentPage, this.currentCategory)
        .subscribe(loadedPosts => {
            loadedPosts.forEach((post) => {
                this.posts.push(post);
            });
        });
    }

    loadCategories(): void {
        this.postService.getCategories()
        .subscribe(loadedCategories => {
            loadedCategories.forEach((category) => {
                this.categories.push(category);
            });
        });
    }

    changeCategory(newCategory: number): void {
        if(newCategory == this.currentCategory) {
            return;
        }
        this.currentCategory = newCategory;
        this.currentPage = 0;
        this.posts = [];
        this.drawer.toggleDrawerState();
        this.loadMorePost();
    }
}
