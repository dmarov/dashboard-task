import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LayoutPageBoldHeaderComponent } from './layout-page-bold-header.component';

describe('LayoutPageBoldHeaderComponent', () => {
    let component: LayoutPageBoldHeaderComponent;
    let fixture: ComponentFixture<LayoutPageBoldHeaderComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ LayoutPageBoldHeaderComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LayoutPageBoldHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
