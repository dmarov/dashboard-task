import { NgModule } from '@angular/core';

import {
    PagePostsComponent,
} from '@/components';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: PagePostsComponent },
];

@NgModule({
    declarations: [
        PagePostsComponent,
    ],
    imports: [RouterModule.forChild(routes)],
})
export class PostsModule { }
