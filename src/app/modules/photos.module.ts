import { NgModule } from '@angular/core';

import {
    PagePhotosComponent,
} from '@/components';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbsModule } from '@/modules/breadcrumbs.module';

const routes: Routes = [
    { path: '', component: PagePhotosComponent },
];

@NgModule({
    declarations: [
        PagePhotosComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        BreadcrumbsModule,
    ],
})
export class PhotosModule { }
