import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AlbumsEffects } from '@/store/effects';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
    AlbumEntryComponent,
    PageAlbumsComponent,
} from '@/components';
import { AlbumsService } from '@/services';
import * as AlbumsReducers from '@/store/reducers/albums';
import { LayoutPageModule } from '@/modules/layout-page.module';
import { LoaderModule } from '@/modules/loader.module';
import { PaginationModule } from '@/modules/pagination.module';

const routes: Routes = [
    { path: '', component: PageAlbumsComponent },
];

@NgModule({
    declarations: [
        PageAlbumsComponent,
        AlbumEntryComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forChild(routes),
        LayoutPageModule,
        StoreModule.forFeature(AlbumsReducers.featureKey, AlbumsReducers.reducer),
        EffectsModule.forFeature([ AlbumsEffects ]),
        LoaderModule,
        PaginationModule,
    ],
    providers: [
        AlbumsService,
    ],
})
export class AlbumsModule { }
