import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components';

const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: () => import('@/modules/dashboard.module').then(m => m.DashboardModule) },
    { path: 'photos', loadChildren: () => import('@/modules/photos.module').then(m => m.PhotosModule) },
    { path: 'posts', loadChildren: () => import('@/modules/posts.module').then(m => m.PostsModule) },
    { path: 'albums', loadChildren: () => import('@/modules/albums.module').then(m => m.AlbumsModule) },
    { path: 'users', loadChildren: () => import('@/modules/users.module').then(m => m.UsersModule) },
    { path: '**', component: PageNotFoundComponent, pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
