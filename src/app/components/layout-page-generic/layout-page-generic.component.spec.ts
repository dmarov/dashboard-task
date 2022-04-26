import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LayoutPageGenericComponent } from './layout-page-generic.component';

describe('LayoutPageGenericComponent', () => {
    let component: LayoutPageGenericComponent;
    let fixture: ComponentFixture<LayoutPageGenericComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ LayoutPageGenericComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LayoutPageGenericComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
