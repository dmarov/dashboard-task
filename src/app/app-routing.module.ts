import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    PageAlbumsComponent, PageNotFoundComponent, PagePhotosComponent, PagePostsComponent,
} from './components';

const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: () => import('@/modules/dashboard.module').then(m => m.DashboardModule) },
    { path: 'photos', component: PagePhotosComponent },
    { path: 'posts', component: PagePostsComponent },
    { path: 'albums', component: PageAlbumsComponent },
    { path: '**', component: PageNotFoundComponent, pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
