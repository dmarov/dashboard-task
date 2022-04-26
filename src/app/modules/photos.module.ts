import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
    PagePhotoComponent,
    PagePhotosComponent,
} from '@/components';
import { LayoutPageModule } from '@/modules/layout-page.module';
import { PhotosReducers } from '@/store/reducers';
import { PhotosService } from '@/services';
import { PhotosEffects } from '@/store/effects';
import { PhotoComponentsModule } from '@/modules/photo-components.module';
import { PaginationModule } from '@/modules/pagination.module';
import { LoaderModule } from '@/modules/loader.module';

const routes: Routes = [
    { path: '', component: PagePhotosComponent },
    { path: ':id', component: PagePhotoComponent },
];

@NgModule({
    declarations: [
        PagePhotosComponent,
        PagePhotoComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forChild(routes),
        LayoutPageModule,
        StoreModule.forFeature(PhotosReducers.featureKey, PhotosReducers.reducer),
        EffectsModule.forFeature([ PhotosEffects ]),
        PhotoComponentsModule,
        PaginationModule,
        LoaderModule,
    ],
    providers: [
        PhotosService,
    ],
})
export class PhotosModule { }
