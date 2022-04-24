import { NgModule } from '@angular/core';

import {
    PageDashboardComponent,
} from '@/components';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageModule } from '@/modules/layout-page.module';
import { AlbumsService, PhotosService, PostsService } from '@/services';

const routes: Routes = [
    { path: '', component: PageDashboardComponent },
];

@NgModule({
    declarations: [
        PageDashboardComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        LayoutPageModule,
    ],
    providers: [
        PostsService,
        AlbumsService,
        PhotosService,
    ]
})
export class DashboardModule { }
