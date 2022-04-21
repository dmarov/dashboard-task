import { NgModule } from '@angular/core';

import {
    PagePhotosComponent,
} from '@/components';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageModule } from '@/modules/layout-page.module';
import { PaginationModule } from '@/modules/pagination.module';

const routes: Routes = [
    { path: '', component: PagePhotosComponent },
];

@NgModule({
    declarations: [
        PagePhotosComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        LayoutPageModule,
        PaginationModule,
    ],
})
export class PhotosModule { }
