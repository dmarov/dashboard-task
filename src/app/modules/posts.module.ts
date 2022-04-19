import { NgModule } from '@angular/core';

import {
    PagePostsComponent,
} from '@/components';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageModule } from '@/modules/layout-page.module';

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
})
export class PostsModule { }
