"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var post_1 = require("./post");
var post_service_1 = require("./post.service");
var PostDetailComponent = (function () {
    function PostDetailComponent(postService, route) {
        this.postService = postService;
        this.route = route;
    }
    PostDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.post = new post_1.Post();
        var id = this.route.snapshot.params["id"];
        this.postService.getPost(id)
            .subscribe(function (loadedPost) {
            _this.post = loadedPost;
        });
    };
    return PostDetailComponent;
}());
PostDetailComponent = __decorate([
    core_1.Component({
        selector: "post-detail",
        moduleId: module.id,
        templateUrl: "./post-detail.component.html",
    }),
    __metadata("design:paramtypes", [post_service_1.PostService,
        router_1.ActivatedRoute])
], PostDetailComponent);
exports.PostDetailComponent = PostDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQWlEO0FBRWpELCtCQUE4QjtBQUM5QiwrQ0FBNkM7QUFPN0MsSUFBYSxtQkFBbUI7SUFHNUIsNkJBQ1ksV0FBd0IsRUFDeEIsS0FBcUI7UUFEckIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFDN0IsQ0FBQztJQUVMLHNDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2FBQzNCLFNBQVMsQ0FBQyxVQUFBLFVBQVU7WUFDakIsS0FBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDO0FBaEJZLG1CQUFtQjtJQUwvQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGFBQWE7UUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSw4QkFBOEI7S0FDOUMsQ0FBQztxQ0FLMkIsMEJBQVc7UUFDakIsdUJBQWM7R0FMeEIsbUJBQW1CLENBZ0IvQjtBQWhCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgUG9zdCB9IGZyb20gXCIuL3Bvc3RcIjtcbmltcG9ydCB7IFBvc3RTZXJ2aWNlIH0gZnJvbSBcIi4vcG9zdC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInBvc3QtZGV0YWlsXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Bvc3QtZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIFBvc3REZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHBvc3Q6IFBvc3Q7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwb3N0U2VydmljZTogUG9zdFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBvc3QgPSBuZXcgUG9zdCgpO1xuICAgICAgICBjb25zdCBpZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XG4gICAgICAgIHRoaXMucG9zdFNlcnZpY2UuZ2V0UG9zdChpZClcbiAgICAgICAgLnN1YnNjcmliZShsb2FkZWRQb3N0ID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9zdCA9IGxvYWRlZFBvc3Q7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==