import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    declarations: [],
    imports: [
        StoreModule.forRoot({
            router: routerReducer,
        }),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        StoreRouterConnectingModule.forRoot(),

    ],
})
export class StoreBaseModule {}
