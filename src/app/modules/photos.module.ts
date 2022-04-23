import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {
    PagePhotosComponent,
} from '@/components';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageModule } from '@/modules/layout-page.module';
import * as PhotosReducers from '@/store/reducers/photos';
import { PhotosService } from '@/services';
import { PhotosEffects } from '@/store/effects';

const routes: Routes = [
    { path: '', component: PagePhotosComponent },
];

@NgModule({
    declarations: [
        PagePhotosComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        LayoutPageModule,
        StoreModule.forFeature(PhotosReducers.featureKey, PhotosReducers.reducer),
        EffectsModule.forFeature([ PhotosEffects ]),
    ],
    providers: [
        PhotosService,
    ],
})
export class PhotosModule { }
