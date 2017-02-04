"use strict";
var core_1 = require("@angular/core");
var post_service_1 = require("./post.service");
var PostsComponent = (function () {
    function PostsComponent(postService) {
        this.postService = postService;
        this.posts = [];
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getPosts()
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFHbEQsK0NBQTZDO0FBTzdDLElBQWEsY0FBYztJQUd2Qix3QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFGNUMsVUFBSyxHQUFnQixFQUFFLENBQUM7SUFFd0IsQ0FBQztJQUVqRCxpQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTthQUMxQixTQUFTLENBQUMsVUFBQSxXQUFXO1lBQ2xCLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO2dCQUNyQixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFiWSxjQUFjO0lBTDFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsV0FBVztRQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtLQUN4QyxDQUFDO3FDQUltQywwQkFBVztHQUhuQyxjQUFjLENBYTFCO0FBYlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFBvc3QgfSBmcm9tIFwiLi9wb3N0XCI7XG5pbXBvcnQgeyBQb3N0U2VydmljZSB9IGZyb20gXCIuL3Bvc3Quc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJwb3N0LWxpc3RcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcG9zdHMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgUG9zdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHBvc3RzOiBBcnJheTxQb3N0PiA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwb3N0U2VydmljZTogUG9zdFNlcnZpY2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucG9zdFNlcnZpY2UuZ2V0UG9zdHMoKVxuICAgICAgICAuc3Vic2NyaWJlKGxvYWRlZFBvc3RzID0+IHtcbiAgICAgICAgICAgIGxvYWRlZFBvc3RzLmZvckVhY2goKHBvc3QpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3RzLnB1c2gocG9zdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19