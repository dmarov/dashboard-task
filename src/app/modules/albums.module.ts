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
    PageAlbumComponent,
} from '@/components';
import { AlbumsService } from '@/services';
import * as AlbumsReducers from '@/store/reducers/albums';
import { LayoutPageModule } from '@/modules/layout-page.module';
import { LoaderModule } from '@/modules/loader.module';
import { PaginationModule } from '@/modules/pagination.module';
import { PhotoComponentsModule } from '@/modules/photo-components.module';

const routes: Routes = [
    { path: '', component: PageAlbumsComponent },
    { path: ':id', component: PageAlbumComponent },
];

@NgModule({
    declarations: [
        PageAlbumsComponent,
        AlbumEntryComponent,
        PageAlbumComponent,
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
        PhotoComponentsModule,
    ],
    providers: [
        AlbumsService,
    ],
})
export class AlbumsModule { }
