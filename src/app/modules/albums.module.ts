import { NgModule } from '@angular/core';

import {
    PageAlbumsComponent,
} from '@/components';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageModule } from '@/modules/layout-page.module';
import { StoreModule } from '@ngrx/store';
import * as AlbumsReducers from '@/store/reducers/albums';
import { EffectsModule } from '@ngrx/effects';
import { AlbumsEffects } from '@/store/effects';

const routes: Routes = [
    { path: '', component: PageAlbumsComponent },
];

@NgModule({
    declarations: [
        PageAlbumsComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        LayoutPageModule,
        StoreModule.forFeature(AlbumsReducers.featureKey, AlbumsReducers.reducer),
        EffectsModule.forFeature([ AlbumsEffects ]),
    ],
})
export class AlbumsModule { }
