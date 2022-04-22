import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as UiReducers from './store/reducers/ui';
import { RouterEffects } from "./store/effects";

import { PageNotFoundComponent, SideMenuComponent } from './components';

import { StoreBaseModule } from './modules/store-base.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { LoaderModule } from '@/modules/loader.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        SideMenuComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LoaderModule,
        AppRoutingModule,
        StoreBaseModule,
        StoreModule.forFeature(UiReducers.featureKey, UiReducers.reducer),
        EffectsModule.forFeature([ RouterEffects ]),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        NgbModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
