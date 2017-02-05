"use strict";
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var observable_array_1 = require("data/observable-array");
var post_service_1 = require("./post.service");
var Observable_1 = require("rxjs/Observable");
var PostsComponent = (function () {
    function PostsComponent(postService) {
        this.postService = postService;
        this.categories = [];
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.posts = new observable_array_1.ObservableArray();
        this.currentCategory = 0;
        this.loadCategories();
        this.showLoading = true;
        this.reloadPosts().subscribe(function () {
            _this.showLoading = false;
        });
    };
    PostsComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
    };
    PostsComponent.prototype.openDrawer = function () {
        this.drawer.toggleDrawerState();
    };
    PostsComponent.prototype.onPullToRefreshInitiated = function (args) {
        this.reloadPosts().subscribe(function () {
            var listView = args.object;
            listView.notifyPullToRefreshFinished();
        });
        args.returnValue = true;
    };
    PostsComponent.prototype.onLoadMoreItemsRequested = function (args) {
        this.loadMorePost().subscribe(function () {
            var listView = args.object;
            listView.notifyLoadOnDemandFinished();
        });
        args.returnValue = true;
    };
    PostsComponent.prototype.loadMorePost = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this.currentPage = _this.currentPage + 1;
            console.log("LOADING PAGE: " + _this.currentPage);
            _this.postService.getPosts(_this.currentPage, _this.currentCategory)
                .subscribe(function (loadedPosts) {
                loadedPosts.forEach(function (post) {
                    _this.posts.push(post);
                });
            }, function (error) {
                console.log(error);
            }, function () {
                observer.next();
                observer.complete();
            });
        });
    };
    PostsComponent.prototype.reloadPosts = function () {
        this.currentPage = 0;
        this.posts.splice(0);
        return this.loadMorePost();
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
        var _this = this;
        this.drawer.toggleDrawerState();
        if (newCategory == this.currentCategory) {
            return;
        }
        this.currentCategory = newCategory;
        this.showLoading = true;
        this.reloadPosts().subscribe(function () {
            _this.showLoading = false;
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBNkQ7QUFDN0Qsc0VBQW9HO0FBRXBHLDBEQUF3RDtBQUd4RCwrQ0FBNkM7QUFDN0MsOENBQTZDO0FBTzdDLElBQWEsY0FBYztJQVV2Qix3QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFSNUMsZUFBVSxHQUFvQixFQUFFLENBQUM7SUFRZSxDQUFDO0lBRWpELGlDQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxrQ0FBZSxFQUFRLENBQUM7UUFDekMsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDekIsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsd0NBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7SUFDbEQsQ0FBQztJQUVELG1DQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELGlEQUF3QixHQUF4QixVQUF5QixJQUF1QjtRQUM1QyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ3pCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDM0IsUUFBUSxDQUFDLDJCQUEyQixFQUFFLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxH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QUE5Rlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyJztcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL2xpc3R2aWV3XCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBQb3N0IH0gZnJvbSBcIi4vcG9zdFwiO1xuaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tIFwiLi9jYXRlZ29yeVwiO1xuaW1wb3J0IHsgUG9zdFNlcnZpY2UgfSBmcm9tIFwiLi9wb3N0LnNlcnZpY2VcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnOyBcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwicG9zdC1saXN0XCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Bvc3RzLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIFBvc3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwb3N0czogT2JzZXJ2YWJsZUFycmF5PFBvc3Q+O1xuICAgIGNhdGVnb3JpZXM6IEFycmF5PENhdGVnb3J5PiA9IFtdO1xuICAgIGN1cnJlbnRQYWdlOiBudW1iZXI7XG4gICAgY3VycmVudENhdGVnb3J5OiBudW1iZXI7XG4gICAgc2hvd0xvYWRpbmc6IGJvb2xlYW47XG5cbiAgICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG4gICAgZHJhd2VyIDogU2lkZURyYXdlclR5cGU7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBvc3RTZXJ2aWNlOiBQb3N0U2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wb3N0cyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8UG9zdD4oKTtcbiAgICAgICAgdGhpcy5jdXJyZW50Q2F0ZWdvcnkgPSAwO1xuICAgICAgICB0aGlzLmxvYWRDYXRlZ29yaWVzKCk7XG4gICAgICAgIHRoaXMuc2hvd0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlbG9hZFBvc3RzKCkuc3Vic2NyaWJlKCgpID0+ICB7XG4gICAgICAgICAgICB0aGlzLnNob3dMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pOyAgXG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gICAgfVxuXG4gICAgb3BlbkRyYXdlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIudG9nZ2xlRHJhd2VyU3RhdGUoKTtcbiAgICB9XG5cbiAgICBvblB1bGxUb1JlZnJlc2hJbml0aWF0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICAgICAgdGhpcy5yZWxvYWRQb3N0cygpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB2YXIgbGlzdFZpZXcgPSBhcmdzLm9iamVjdDtcbiAgICAgICAgICAgIGxpc3RWaWV3Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgYXJncy5yZXR1cm5WYWx1ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgb25Mb2FkTW9yZUl0ZW1zUmVxdWVzdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIHRoaXMubG9hZE1vcmVQb3N0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHZhciBsaXN0VmlldyA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICAgICAgbGlzdFZpZXcubm90aWZ5TG9hZE9uRGVtYW5kRmluaXNoZWQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGFyZ3MucmV0dXJuVmFsdWUgPSB0cnVlO1xuICAgIH1cblxuICAgIGxvYWRNb3JlUG9zdCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLmN1cnJlbnRQYWdlICsgMTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTE9BRElORyBQQUdFOiBcIiArIHRoaXMuY3VycmVudFBhZ2UpO1xuICAgICAgICAgICAgdGhpcy5wb3N0U2VydmljZS5nZXRQb3N0cyh0aGlzLmN1cnJlbnRQYWdlLCB0aGlzLmN1cnJlbnRDYXRlZ29yeSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgbG9hZGVkUG9zdHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2FkZWRQb3N0cy5mb3JFYWNoKChwb3N0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RzLnB1c2gocG9zdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4geyBcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVsb2FkUG9zdHMoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAwO1xuICAgICAgICB0aGlzLnBvc3RzLnNwbGljZSgwKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZE1vcmVQb3N0KCk7XG4gICAgfVxuXG4gICAgbG9hZENhdGVnb3JpZXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucG9zdFNlcnZpY2UuZ2V0Q2F0ZWdvcmllcygpXG4gICAgICAgIC5zdWJzY3JpYmUobG9hZGVkQ2F0ZWdvcmllcyA9PiB7XG4gICAgICAgICAgICBsb2FkZWRDYXRlZ29yaWVzLmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoYW5nZUNhdGVnb3J5KG5ld0NhdGVnb3J5OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIudG9nZ2xlRHJhd2VyU3RhdGUoKTtcbiAgICAgICAgaWYobmV3Q2F0ZWdvcnkgPT0gdGhpcy5jdXJyZW50Q2F0ZWdvcnkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRDYXRlZ29yeSA9IG5ld0NhdGVnb3J5O1xuICAgICAgICB0aGlzLnNob3dMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZWxvYWRQb3N0cygpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==