import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SortTogglerComponent } from './sort-toggler.component';

describe('SortTogglerComponent', () => {
    let component: SortTogglerComponent;
    let fixture: ComponentFixture<SortTogglerComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ SortTogglerComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SortTogglerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
