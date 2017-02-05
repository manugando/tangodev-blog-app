"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("nativescript-angular/http");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var angular_2 = require("nativescript-telerik-ui/listview/angular");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var post_service_1 = require("./post/post.service");
var posts_component_1 = require("./post/posts.component");
var post_detail_component_1 = require("./post/post-detail.component");
var post_card_component_1 = require("./post/post-card.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            http_1.NativeScriptHttpModule,
            app_routing_1.AppRoutingModule
        ],
        declarations: [
            angular_1.SIDEDRAWER_DIRECTIVES,
            angular_2.LISTVIEW_DIRECTIVES,
            app_component_1.AppComponent,
            posts_component_1.PostsComponent,
            post_detail_component_1.PostDetailComponent,
            post_card_component_1.PostCardComponent
        ],
        providers: [
            post_service_1.PostService
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsa0RBQW1FO0FBQ25FLHNFQUFtRjtBQUNuRixvRUFBK0U7QUFDL0UsNkNBQWlEO0FBQ2pELGlEQUErQztBQUUvQyxvREFBa0Q7QUFDbEQsMERBQXdEO0FBQ3hELHNFQUFtRTtBQUNuRSxrRUFBK0Q7QUEwQi9ELElBQWEsU0FBUztJQUF0QjtJQUF5QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsU0FBUztJQXhCckIsZUFBUSxDQUFDO1FBQ04sU0FBUyxFQUFFO1lBQ1AsNEJBQVk7U0FDZjtRQUNELE9BQU8sRUFBRTtZQUNMLHdDQUFrQjtZQUNsQiw2QkFBc0I7WUFDdEIsOEJBQWdCO1NBQ25CO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsK0JBQXFCO1lBQ3JCLDZCQUFtQjtZQUNuQiw0QkFBWTtZQUNaLGdDQUFjO1lBQ2QsMkNBQW1CO1lBQ25CLHVDQUFpQjtTQUNwQjtRQUNELFNBQVMsRUFBRTtZQUNQLDBCQUFXO1NBQ2Q7UUFDRCxPQUFPLEVBQUU7WUFDTCx1QkFBZ0I7U0FDbkI7S0FDSixDQUFDO0dBQ1csU0FBUyxDQUFJO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBTSURFRFJBV0VSX0RJUkVDVElWRVMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBMSVNUVklFV19ESVJFQ1RJVkVTIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL2xpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBQb3N0U2VydmljZSB9IGZyb20gXCIuL3Bvc3QvcG9zdC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBQb3N0c0NvbXBvbmVudCB9IGZyb20gXCIuL3Bvc3QvcG9zdHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQb3N0RGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vcG9zdC9wb3N0LWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFBvc3RDYXJkQ29tcG9uZW50IH0gZnJvbSBcIi4vcG9zdC9wb3N0LWNhcmQuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTSURFRFJBV0VSX0RJUkVDVElWRVMsXG4gICAgICAgIExJU1RWSUVXX0RJUkVDVElWRVMsXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgUG9zdHNDb21wb25lbnQsXG4gICAgICAgIFBvc3REZXRhaWxDb21wb25lbnQsXG4gICAgICAgIFBvc3RDYXJkQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgUG9zdFNlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19