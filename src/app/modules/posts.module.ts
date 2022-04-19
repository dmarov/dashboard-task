import { NgModule } from '@angular/core';

import {
    PagePostsComponent,
} from '@/components';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbsModule } from '@/modules/breadcrumbs.module';

const routes: Routes = [
    { path: '', component: PagePostsComponent },
];

@NgModule({
    declarations: [
        PagePostsComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        BreadcrumbsModule,
    ],
})
export class PostsModule { }
