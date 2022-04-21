import { NgModule } from '@angular/core';

import {
    PagePhotosComponent,
} from '@/components';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageModule } from '@/modules/layout-page.module';

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
    ],
})
export class PhotosModule { }
