import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { SIDEDRAWER_DIRECTIVES } from "nativescript-telerik-ui/sidedrawer/angular";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { PostService } from "./post/post.service";
import { PostsComponent } from "./post/posts.component";
import { PostDetailComponent } from "./post/post-detail.component";
import { PostCardComponent } from "./post/post-card.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        AppRoutingModule
    ],
    declarations: [
        SIDEDRAWER_DIRECTIVES,
        AppComponent,
        PostsComponent,
        PostDetailComponent,
        PostCardComponent
    ],
    providers: [
        PostService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
