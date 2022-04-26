import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from '@/services';

import { PageUserComponent } from './page-user.component';

describe('PageUserComponent', () => {
    let component: PageUserComponent;
    let fixture: ComponentFixture<PageUserComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ PageUserComponent ],
            imports: [
                HttpClientModule,
                RouterTestingModule,
            ],
            providers: [
                UsersService,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageUserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
