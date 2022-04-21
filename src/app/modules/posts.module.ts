import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {
    PagePostComponent,
    PagePostsComponent,
} from '@/components';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageModule } from '@/modules/layout-page.module';
import { PostsService } from '@/services';
import { StoreModule } from '@ngrx/store';
import * as PostsReducers from '@/store/reducers/posts';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from "@/store/effects";
import { LoaderModule } from "@/modules/loader.module";
import { PaginationModule } from '@/modules/pagination.module';

const routes: Routes = [
    { path: '', component: PagePostsComponent },
    { path: ':id', component: PagePostComponent },
];

@NgModule({
    declarations: [
        PagePostsComponent,
        PagePostComponent,
    ],
    imports: [
        LoaderModule,
        CommonModule,
        RouterModule.forChild(routes),
        LayoutPageModule,
        StoreModule.forFeature(PostsReducers.featureKey, PostsReducers.reducer),
        EffectsModule.forFeature([ PostsEffects ]),
        HttpClientModule,
        PaginationModule,
    ],
    providers: [
        PostsService,
    ]
})
export class PostsModule { }
