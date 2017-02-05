"use strict";
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var post_service_1 = require("./post.service");
var PostsComponent = (function () {
    function PostsComponent(postService) {
        this.postService = postService;
        this.posts = [];
        this.categories = [];
    }
    PostsComponent.prototype.ngOnInit = function () {
        this.currentPage = 0;
        this.currentCategory = 0;
        this.loadCategories();
        this.loadMorePost();
    };
    PostsComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
    };
    PostsComponent.prototype.openDrawer = function () {
        this.drawer.toggleDrawerState();
    };
    PostsComponent.prototype.loadMorePost = function () {
        var _this = this;
        this.currentPage = this.currentPage + 1;
        this.postService.getPosts(this.currentPage, this.currentCategory)
            .subscribe(function (loadedPosts) {
            loadedPosts.forEach(function (post) {
                _this.posts.push(post);
            });
        });
    };
    PostsComponent.prototype.loadCategories = function () {
        var _this = this;
        this.postService.getCategories()
            .subscribe(function (loadedCategories) {
            loadedCategories.forEach(function (category) {
                _this.categories.push(category);
            });
        });
    };
    PostsComponent.prototype.changeCategory = function (newCategory) {
        if (newCategory == this.currentCategory) {
            return;
        }
        this.currentCategory = newCategory;
        this.currentPage = 0;
        this.posts = [];
        this.drawer.toggleDrawerState();
        this.loadMorePost();
    };
    return PostsComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], PostsComponent.prototype, "drawerComponent", void 0);
PostsComponent = __decorate([
    core_1.Component({
        selector: "post-list",
        moduleId: module.id,
        templateUrl: "./posts.component.html",
    }),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostsComponent);
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBNkQ7QUFDN0Qsc0VBQW9HO0FBR3BHLCtDQUE2QztBQU83QyxJQUFhLGNBQWM7SUFTdkIsd0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBUjVDLFVBQUssR0FBZ0IsRUFBRSxDQUFDO1FBQ3hCLGVBQVUsR0FBb0IsRUFBRSxDQUFDO0lBT2UsQ0FBQztJQUVqRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsd0NBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7SUFDbEQsQ0FBQztJQUVELG1DQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELHFDQUFZLEdBQVo7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDO2FBQ2hFLFNBQVMsQ0FBQyxVQUFBLFdBQVc7WUFDbEIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7Z0JBQ3JCLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsdUNBQWMsR0FBZDtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUU7YUFDL0IsU0FBUyxDQUFDLFVBQUEsZ0JBQWdCO1lBQ3ZCLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVE7Z0JBQzlCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsdUNBQWMsR0FBZCxVQUFlLFdBQW1CO1FBQzlCLEVBQUUsQ0FBQSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUNyQyxNQUFNLENBQUM7UUFDWCxDQUFDO1FBQ0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxXQUFXLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBdkRELElBdURDO0FBakRzQztJQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDOzhCQUF5QixnQ0FBc0I7dURBQUM7QUFOekUsY0FBYztJQUwxQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFdBQVc7UUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx3QkFBd0I7S0FDeEMsQ0FBQztxQ0FVbUMsMEJBQVc7R0FUbkMsY0FBYyxDQXVEMUI7QUF2RFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyJztcbmltcG9ydCB7IFBvc3QgfSBmcm9tIFwiLi9wb3N0XCI7XG5pbXBvcnQgeyBDYXRlZ29yeSB9IGZyb20gXCIuL2NhdGVnb3J5XCI7XG5pbXBvcnQgeyBQb3N0U2VydmljZSB9IGZyb20gXCIuL3Bvc3Quc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJwb3N0LWxpc3RcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcG9zdHMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgUG9zdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHBvc3RzOiBBcnJheTxQb3N0PiA9IFtdO1xuICAgIGNhdGVnb3JpZXM6IEFycmF5PENhdGVnb3J5PiA9IFtdO1xuICAgIGN1cnJlbnRQYWdlOiBudW1iZXI7XG4gICAgY3VycmVudENhdGVnb3J5OiBudW1iZXI7XG5cbiAgICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG4gICAgZHJhd2VyIDogU2lkZURyYXdlclR5cGU7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBvc3RTZXJ2aWNlOiBQb3N0U2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IDA7XG4gICAgICAgIHRoaXMuY3VycmVudENhdGVnb3J5ID0gMDtcbiAgICAgICAgdGhpcy5sb2FkQ2F0ZWdvcmllcygpO1xuICAgICAgICB0aGlzLmxvYWRNb3JlUG9zdCgpO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xuICAgIH1cblxuICAgIG9wZW5EcmF3ZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gICAgfVxuXG4gICAgbG9hZE1vcmVQb3N0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5jdXJyZW50UGFnZSArIDE7XG4gICAgICAgIHRoaXMucG9zdFNlcnZpY2UuZ2V0UG9zdHModGhpcy5jdXJyZW50UGFnZSwgdGhpcy5jdXJyZW50Q2F0ZWdvcnkpXG4gICAgICAgIC5zdWJzY3JpYmUobG9hZGVkUG9zdHMgPT4ge1xuICAgICAgICAgICAgbG9hZGVkUG9zdHMuZm9yRWFjaCgocG9zdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zdHMucHVzaChwb3N0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2FkQ2F0ZWdvcmllcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wb3N0U2VydmljZS5nZXRDYXRlZ29yaWVzKClcbiAgICAgICAgLnN1YnNjcmliZShsb2FkZWRDYXRlZ29yaWVzID0+IHtcbiAgICAgICAgICAgIGxvYWRlZENhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMucHVzaChjYXRlZ29yeSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hhbmdlQ2F0ZWdvcnkobmV3Q2F0ZWdvcnk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZihuZXdDYXRlZ29yeSA9PSB0aGlzLmN1cnJlbnRDYXRlZ29yeSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudENhdGVnb3J5ID0gbmV3Q2F0ZWdvcnk7XG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAwO1xuICAgICAgICB0aGlzLnBvc3RzID0gW107XG4gICAgICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gICAgICAgIHRoaXMubG9hZE1vcmVQb3N0KCk7XG4gICAgfVxufVxuIl19