import { NgModule } from '@angular/core';

import {
    PageAlbumsComponent,
} from '@/components';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageModule } from '@/modules/layout-page.module';

const routes: Routes = [
    { path: '', component: PageAlbumsComponent },
];

@NgModule({
    declarations: [
        PageAlbumsComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        LayoutPageModule,
    ],
})
export class AlbumsModule { }
