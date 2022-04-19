import { NgModule } from '@angular/core';

import {
    PageDashboardComponent,
} from '@/components';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: PageDashboardComponent },
];

@NgModule({
    declarations: [
        PageDashboardComponent,
    ],
    imports: [RouterModule.forChild(routes)],
})
export class DashboardModule { }
