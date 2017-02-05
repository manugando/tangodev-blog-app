import { Component, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawerComponent, SideDrawerType } from 'nativescript-telerik-ui/sidedrawer/angular';
import { ListViewEventData } from "nativescript-telerik-ui/listview";
import { ObservableArray } from "data/observable-array";
import { Post } from "./post";
import { Category } from "./category";
import { PostService } from "./post.service";
import { Observable } from 'rxjs/Observable'; 

@Component({
    selector: "post-list",
    moduleId: module.id,
    templateUrl: "./posts.component.html",
})
export class PostsComponent implements OnInit {
    posts: ObservableArray<Post>;
    categories: Array<Category> = [];
    currentPage: number;
    currentCategory: number;
    showLoading: boolean;

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    drawer : SideDrawerType;

    constructor(private postService: PostService) { }

    ngOnInit(): void {
        this.posts = new ObservableArray<Post>();
        this.currentCategory = 0;
        this.loadCategories();
        this.showLoading = true;
        this.reloadPosts().subscribe(() =>  {
            this.showLoading = false;
        });  
    }

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
    }

    openDrawer(): void {
        this.drawer.toggleDrawerState();
    }

    onPullToRefreshInitiated(args: ListViewEventData) {
        this.reloadPosts().subscribe(() => {
            var listView = args.object;
            listView.notifyPullToRefreshFinished();
        });
        args.returnValue = true;
    }

    onLoadMoreItemsRequested(args: ListViewEventData) {
        this.loadMorePost().subscribe(() => {
            var listView = args.object;
            listView.notifyLoadOnDemandFinished();
        });
        args.returnValue = true;
    }

    loadMorePost() {
        return new Observable(observer => {
            this.currentPage = this.currentPage + 1;
            console.log("LOADING PAGE: " + this.currentPage);
            this.postService.getPosts(this.currentPage, this.currentCategory)
            .subscribe(
                loadedPosts => {
                    loadedPosts.forEach((post) => {
                        this.posts.push(post);
                    });
                },
                error => { 
                    console.log(error);
                },
                () => {
                    observer.next();
                    observer.complete();
                }
            );
        });
    }

    reloadPosts() {
        this.currentPage = 0;
        this.posts.splice(0);
        return this.loadMorePost();
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
        this.drawer.toggleDrawerState();
        if(newCategory == this.currentCategory) {
            return;
        }
        this.currentCategory = newCategory;
        this.showLoading = true;
        this.reloadPosts().subscribe(() => {
            this.showLoading = false;
        });
    }
}
