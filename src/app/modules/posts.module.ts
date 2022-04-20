import { NgModule } from '@angular/core';

import {
    PagePostsComponent,
} from '@/components';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageModule } from '@/modules/layout-page.module';
import { PostsService } from '@/services';

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
    ],
    providers: [
        PostsService,
    ]
})
export class PostsModule { }
