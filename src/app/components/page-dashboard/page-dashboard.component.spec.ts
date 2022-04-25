import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { StoreBaseModule } from '@/modules/store-base.module';
import { RouterTestingModule } from '@angular/router/testing';

import { PageDashboardComponent } from './page-dashboard.component';

describe('PageDashboardComponent', () => {
  let component: PageDashboardComponent;
  let fixture: ComponentFixture<PageDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDashboardComponent ],
      imports: [
        StoreBaseModule,
        RouterTestingModule,
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
