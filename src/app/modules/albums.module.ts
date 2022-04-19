import { NgModule } from '@angular/core';

import {
    PageAlbumsComponent,
} from '@/components';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbsModule } from '@/modules/breadcrumbs.module';

const routes: Routes = [
    { path: '', component: PageAlbumsComponent },
];

@NgModule({
    declarations: [
        PageAlbumsComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        BreadcrumbsModule,
    ],
})
export class AlbumsModule { }
