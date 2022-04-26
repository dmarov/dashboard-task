import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { StoreBaseModule } from '@/modules/store-base.module';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import * as DashboardReducers from '@/store/reducers/dashboard';
import { DashboardEffects } from '@/store/effects';
import { AlbumsService, PhotosService, PostsService } from '@/services';

import { PageDashboardComponent } from './page-dashboard.component';

describe('PageDashboardComponent', () => {
    let component: PageDashboardComponent;
    let fixture: ComponentFixture<PageDashboardComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ PageDashboardComponent ],
            imports: [
                HttpClientModule,
                StoreBaseModule,
                RouterTestingModule,
                StoreModule.forFeature(DashboardReducers.featureKey, DashboardReducers.reducer),
                EffectsModule.forFeature([ DashboardEffects ]),
            ],
            providers: [
                AlbumsService,
                PhotosService,
                PostsService,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageDashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
