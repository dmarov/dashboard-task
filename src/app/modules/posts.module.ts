import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {
    PagePostsComponent,
} from '@/components';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageModule } from '@/modules/layout-page.module';
import { PostsService } from '@/services';
import { StoreModule } from '@ngrx/store';
import * as PostsReducers from '@/store/reducers/posts';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from "@/store/effects";

const routes: Routes = [
    { path: '', component: PagePostsComponent },
];

@NgModule({
    declarations: [
        PagePostsComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        LayoutPageModule,
        StoreModule.forFeature(PostsReducers.featureKey, PostsReducers.reducer),
        EffectsModule.forFeature([ PostsEffects ]),
        HttpClientModule,
    ],
    providers: [
        PostsService,
    ]
})
export class PostsModule { }
