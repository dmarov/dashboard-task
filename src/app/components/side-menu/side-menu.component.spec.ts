import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { StoreBaseModule } from '@/modules/store-base.module';
import { RouterTestingModule } from '@angular/router/testing';

import { SideMenuComponent } from './side-menu.component';
import { StoreModule } from '@ngrx/store';
import { UiReducers } from '@/store/reducers';

describe('SideMenuComponent', () => {
    let component: SideMenuComponent;
    let fixture: ComponentFixture<SideMenuComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ SideMenuComponent ],
            imports: [
                RouterTestingModule,
                StoreBaseModule,
                StoreModule.forFeature(UiReducers.featureKey, UiReducers.reducer),
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SideMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
