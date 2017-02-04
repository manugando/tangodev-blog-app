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
    PostService.prototype.getPosts = function (page) {
        var _this = this;
        return this.http.get("http://blog.tangodev.it/wp-json/wp/v2/posts?page=" + page + "&per_page=20&_embed=1")
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var postList = [];
            data.forEach(function (postJson) {
                postList.push(_this.getPostObjectFromJSON(postJson));
            });
            return postList;
        }).catch(this.handleErrors);
    };
    PostService.prototype.getPost = function (id) {
        var _this = this;
        return this.http.get("http://blog.tangodev.it/wp-json/wp/v2/posts/" + id)
            .map(function (res) { return res.json(); })
            .map(function (postJson) {
            return _this.getPostObjectFromJSON(postJson);
        }).catch(this.handleErrors);
    };
    PostService.prototype.getPostObjectFromJSON = function (postJson) {
        var post = new post_1.Post();
        post.id = postJson.id;
        post.title = postJson.title.rendered;
        post.content = postJson.content.rendered;
        return post;
    };
    return PostService;
}());
PostService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQThDO0FBQzlDLDhCQUFxQztBQUNyQyxpQ0FBK0I7QUFFL0IsK0JBQThCO0FBRzlCLElBQWEsV0FBVztJQUVwQixxQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBRyxDQUFDO0lBRWxDLGtDQUFZLEdBQVosVUFBYSxLQUFlO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCw4QkFBUSxHQUFSLFVBQVMsSUFBWTtRQUFyQixpQkFVQztRQVRHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtREFBbUQsR0FBRyxJQUFJLEdBQUcsdUJBQXVCLENBQUM7YUFDckcsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ0wsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRO2dCQUNsQixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO1lBQ3ZELENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsRUFBVTtRQUFsQixpQkFNQztRQUxHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyw4Q0FBOEMsR0FBRyxFQUFFLENBQUM7YUFDcEUsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixHQUFHLENBQUMsVUFBQSxRQUFRO1lBQ1QsTUFBTSxDQUFDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCwyQ0FBcUIsR0FBckIsVUFBc0IsUUFBUTtRQUMxQixJQUFJLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBcENELElBb0NDO0FBcENZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRTtxQ0FHaUIsV0FBSTtHQUZyQixXQUFXLENBb0N2QjtBQXBDWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSBcIi4vcG9zdFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUG9zdFNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgIH1cblxuICAgIGdldFBvc3RzKHBhZ2U6IE51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcImh0dHA6Ly9ibG9nLnRhbmdvZGV2Lml0L3dwLWpzb24vd3AvdjIvcG9zdHM/cGFnZT1cIiArIHBhZ2UgKyBcIiZwZXJfcGFnZT0yMCZfZW1iZWQ9MVwiKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5tYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHBvc3RMaXN0ID0gW107XG4gICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChwb3N0SnNvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwb3N0TGlzdC5wdXNoKHRoaXMuZ2V0UG9zdE9iamVjdEZyb21KU09OKHBvc3RKc29uKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9zdExpc3Q7XG4gICAgICAgICAgICB9KS5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gICAgfVxuXG4gICAgZ2V0UG9zdChpZDogU3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiaHR0cDovL2Jsb2cudGFuZ29kZXYuaXQvd3AtanNvbi93cC92Mi9wb3N0cy9cIiArIGlkKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5tYXAocG9zdEpzb24gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFBvc3RPYmplY3RGcm9tSlNPTihwb3N0SnNvbik7XG4gICAgICAgICAgICB9KS5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gICAgfVxuXG4gICAgZ2V0UG9zdE9iamVjdEZyb21KU09OKHBvc3RKc29uKSB7XG4gICAgICAgIGxldCBwb3N0ID0gbmV3IFBvc3QoKTtcbiAgICAgICAgcG9zdC5pZCA9IHBvc3RKc29uLmlkO1xuICAgICAgICBwb3N0LnRpdGxlID0gcG9zdEpzb24udGl0bGUucmVuZGVyZWQ7XG4gICAgICAgIHBvc3QuY29udGVudCA9IHBvc3RKc29uLmNvbnRlbnQucmVuZGVyZWQ7XG4gICAgICAgIHJldHVybiBwb3N0O1xuICAgIH1cbn1cbiJdfQ==