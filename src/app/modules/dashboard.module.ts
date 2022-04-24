import { NgModule } from '@angular/core';

import {
    PageDashboardComponent,
} from '@/components';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageModule } from '@/modules/layout-page.module';
import { AlbumsService, PhotosService, PostsService } from '@/services';
import { StoreModule } from '@ngrx/store';
import * as DashboardReducers from '@/store/reducers/dashboard';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from '@/store/effects';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
    { path: '', component: PageDashboardComponent },
];

@NgModule({
    declarations: [
        PageDashboardComponent,
    ],
    imports: [
        HttpClientModule,
        RouterModule.forChild(routes),
        LayoutPageModule,
        StoreModule.forFeature(DashboardReducers.featureKey, DashboardReducers.reducer),
        EffectsModule.forFeature([ DashboardEffects ]),
    ],
    providers: [
        PostsService,
        AlbumsService,
        PhotosService,
    ]
})
export class DashboardModule { }
