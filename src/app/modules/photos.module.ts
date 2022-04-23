import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import {
    PagePhotosComponent,
} from '@/components';
import { LayoutPageModule } from '@/modules/layout-page.module';
import * as PhotosReducers from '@/store/reducers/photos';
import { PhotosService } from '@/services';
import { PhotosEffects } from '@/store/effects';
import { PhotoComponentsModule } from '@/modules/photo-components.module';

const routes: Routes = [
    { path: '', component: PagePhotosComponent },
];

@NgModule({
    declarations: [
        PagePhotosComponent,
    ],
    imports: [
        HttpClientModule,
        RouterModule.forChild(routes),
        LayoutPageModule,
        StoreModule.forFeature(PhotosReducers.featureKey, PhotosReducers.reducer),
        EffectsModule.forFeature([ PhotosEffects ]),
        PhotoComponentsModule,
    ],
    providers: [
        PhotosService,
    ],
})
export class PhotosModule { }
