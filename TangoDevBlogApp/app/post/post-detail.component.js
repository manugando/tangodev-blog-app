"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var post_1 = require("./post");
var post_service_1 = require("./post.service");
var PostDetailComponent = (function () {
    function PostDetailComponent(postService, routerExtensions, route) {
        this.postService = postService;
        this.routerExtensions = routerExtensions;
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
    PostDetailComponent.prototype.goBack = function () {
        this.routerExtensions.back();
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
        router_2.RouterExtensions,
        router_1.ActivatedRoute])
], PostDetailComponent);
exports.PostDetailComponent = PostDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQWlEO0FBQ2pELHNEQUErRDtBQUUvRCwrQkFBOEI7QUFDOUIsK0NBQTZDO0FBTzdDLElBQWEsbUJBQW1CO0lBRzVCLDZCQUNZLFdBQXdCLEVBQ3hCLGdCQUFrQyxFQUNsQyxLQUFxQjtRQUZyQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFVBQUssR0FBTCxLQUFLLENBQWdCO0lBQzdCLENBQUM7SUFFTCxzQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDdkIsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUMzQixTQUFTLENBQUMsVUFBQSxVQUFVO1lBQ2pCLEtBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLG9DQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQztBQXJCWSxtQkFBbUI7SUFML0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsOEJBQThCO0tBQzlDLENBQUM7cUNBSzJCLDBCQUFXO1FBQ04seUJBQWdCO1FBQzNCLHVCQUFjO0dBTnhCLG1CQUFtQixDQXFCL0I7QUFyQlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSBcIi4vcG9zdFwiO1xuaW1wb3J0IHsgUG9zdFNlcnZpY2UgfSBmcm9tIFwiLi9wb3N0LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwicG9zdC1kZXRhaWxcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcG9zdC1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgUG9zdERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcG9zdDogUG9zdDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBvc3RTZXJ2aWNlOiBQb3N0U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wb3N0ID0gbmV3IFBvc3QoKTtcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xuICAgICAgICB0aGlzLnBvc3RTZXJ2aWNlLmdldFBvc3QoaWQpXG4gICAgICAgIC5zdWJzY3JpYmUobG9hZGVkUG9zdCA9PiB7XG4gICAgICAgICAgICB0aGlzLnBvc3QgPSBsb2FkZWRQb3N0O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ29CYWNrKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuICAgIH1cbn1cbiJdfQ==