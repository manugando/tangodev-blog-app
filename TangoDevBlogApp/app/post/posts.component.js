"use strict";
var core_1 = require("@angular/core");
var post_service_1 = require("./post.service");
var PostsComponent = (function () {
    function PostsComponent(postService) {
        this.postService = postService;
        this.posts = [];
    }
    PostsComponent.prototype.ngOnInit = function () {
        this.currentPage = 0;
        this.loadMorePost();
    };
    PostsComponent.prototype.loadMorePost = function () {
        var _this = this;
        this.currentPage = this.currentPage + 1;
        this.postService.getPosts(this.currentPage)
            .subscribe(function (loadedPosts) {
            loadedPosts.forEach(function (post) {
                _this.posts.push(post);
            });
        });
    };
    return PostsComponent;
}());
PostsComponent = __decorate([
    core_1.Component({
        selector: "post-list",
        moduleId: module.id,
        templateUrl: "./posts.component.html",
    }),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostsComponent);
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFHbEQsK0NBQTZDO0FBTzdDLElBQWEsY0FBYztJQUl2Qix3QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFINUMsVUFBSyxHQUFnQixFQUFFLENBQUM7SUFHd0IsQ0FBQztJQUVqRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxxQ0FBWSxHQUFaO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDMUMsU0FBUyxDQUFDLFVBQUEsV0FBVztZQUNsQixXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtnQkFDckIsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFwQlksY0FBYztJQUwxQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFdBQVc7UUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx3QkFBd0I7S0FDeEMsQ0FBQztxQ0FLbUMsMEJBQVc7R0FKbkMsY0FBYyxDQW9CMUI7QUFwQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFBvc3QgfSBmcm9tIFwiLi9wb3N0XCI7XG5pbXBvcnQgeyBQb3N0U2VydmljZSB9IGZyb20gXCIuL3Bvc3Quc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJwb3N0LWxpc3RcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcG9zdHMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgUG9zdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHBvc3RzOiBBcnJheTxQb3N0PiA9IFtdO1xuICAgIGN1cnJlbnRQYWdlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBvc3RTZXJ2aWNlOiBQb3N0U2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IDA7XG4gICAgICAgIHRoaXMubG9hZE1vcmVQb3N0KCk7XG4gICAgfVxuXG4gICAgbG9hZE1vcmVQb3N0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5jdXJyZW50UGFnZSArIDE7XG4gICAgICAgIHRoaXMucG9zdFNlcnZpY2UuZ2V0UG9zdHModGhpcy5jdXJyZW50UGFnZSlcbiAgICAgICAgLnN1YnNjcmliZShsb2FkZWRQb3N0cyA9PiB7XG4gICAgICAgICAgICBsb2FkZWRQb3N0cy5mb3JFYWNoKChwb3N0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0cy5wdXNoKHBvc3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==