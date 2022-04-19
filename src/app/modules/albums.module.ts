import { NgModule } from '@angular/core';

import {
    PageAlbumsComponent,
} from '@/components';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: PageAlbumsComponent },
];

@NgModule({
    declarations: [
        PageAlbumsComponent,
    ],
    imports: [RouterModule.forChild(routes)],
})
export class AlbumsModule { }
