import { NgModule } from '@angular/core';

import {
    PagePhotosComponent,
} from '@/components';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: PagePhotosComponent },
];

@NgModule({
    declarations: [
        PagePhotosComponent,
    ],
    imports: [RouterModule.forChild(routes)],
})
export class PhotosModule { }
