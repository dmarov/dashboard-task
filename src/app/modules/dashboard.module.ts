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
import { CommonModule } from '@angular/common';
import { LoaderModule } from '@/modules/loader.module';
import { PhotoComponentsModule } from '@/modules/photo-components.module';

const routes: Routes = [
    { path: '', component: PageDashboardComponent },
];

@NgModule({
    declarations: [
        PageDashboardComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild(routes),
        LayoutPageModule,
        StoreModule.forFeature(DashboardReducers.featureKey, DashboardReducers.reducer),
        EffectsModule.forFeature([ DashboardEffects ]),
        LoaderModule,
        PhotoComponentsModule,
    ],
    providers: [
        PostsService,
        AlbumsService,
        PhotosService,
    ]
})
export class DashboardModule { }
