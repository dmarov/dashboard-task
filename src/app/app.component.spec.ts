import { TestBed, waitForAsync } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { StoreBaseModule } from '@/modules/store-base.module';
import { UiReducers } from '@/store/reducers';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderModule } from './modules/loader.module';
import { AppRoutingModule } from './app-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { RouterEffects } from '@/store/effects';

describe('AppComponent', () => {
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                BrowserModule,
                BrowserAnimationsModule,
                LoaderModule,
                AppRoutingModule,
                StoreBaseModule,
                StoreModule.forFeature(UiReducers.featureKey, UiReducers.reducer),
                EffectsModule.forFeature([ RouterEffects ]),
            ],
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
