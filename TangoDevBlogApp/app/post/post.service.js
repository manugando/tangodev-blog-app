"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var post_1 = require("./post");
var PostService = (function () {
    function PostService(http) {
        this.http = http;
    }
    PostService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    PostService.prototype.getPosts = function () {
        return this.http.get("http://blog.tangodev.it/wp-json/wp/v2/posts?page=1&per_page=2&_embed=1")
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var postList = [];
            data.forEach(function (postJson) {
                postList.push(new post_1.Post(postJson.id, postJson.title.rendered, postJson.content.rendered));
            });
            return postList;
        }).catch(this.handleErrors);
    };
    PostService.prototype.getItem = function (id) {
        return new post_1.Post("1", "TITOLO", "TESTO");
    };
    return PostService;
}());
PostService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQThDO0FBQzlDLDhCQUFxQztBQUNyQyxpQ0FBK0I7QUFFL0IsK0JBQThCO0FBRzlCLElBQWEsV0FBVztJQUVwQixxQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBRyxDQUFDO0lBRWxDLGtDQUFZLEdBQVosVUFBYSxLQUFlO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHdFQUF3RSxDQUFDO2FBQ3pGLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdEIsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNMLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUTtnQkFDbEIsUUFBUSxDQUFDLElBQUksQ0FDVCxJQUFJLFdBQUksQ0FDSixRQUFRLENBQUMsRUFBRSxFQUNYLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUN2QixRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUM3QixDQUFDO1lBQ1YsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxFQUFVO1FBQ2QsTUFBTSxDQUFDLElBQUksV0FBSSxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQTdCRCxJQTZCQztBQTdCWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7cUNBR2lCLFdBQUk7R0FGckIsV0FBVyxDQTZCdkI7QUE3Qlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcblxuaW1wb3J0IHsgUG9zdCB9IGZyb20gXCIuL3Bvc3RcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBvc3RTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuICAgIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgICB9XG5cbiAgICBnZXRQb3N0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXCJodHRwOi8vYmxvZy50YW5nb2Rldi5pdC93cC1qc29uL3dwL3YyL3Bvc3RzP3BhZ2U9MSZwZXJfcGFnZT0yJl9lbWJlZD0xXCIpXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLm1hcChkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcG9zdExpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goKHBvc3RKc29uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc3RMaXN0LnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgUG9zdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0SnNvbi5pZCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdEpzb24udGl0bGUucmVuZGVyZWQsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RKc29uLmNvbnRlbnQucmVuZGVyZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBwb3N0TGlzdDtcbiAgICAgICAgICAgIH0pLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgICB9XG5cbiAgICBnZXRJdGVtKGlkOiBudW1iZXIpOiBQb3N0IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQb3N0KFwiMVwiLCBcIlRJVE9MT1wiLCBcIlRFU1RPXCIpO1xuICAgIH1cbn1cbiJdfQ==