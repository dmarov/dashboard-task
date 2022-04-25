import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { StoreBaseModule } from '@/modules/store-base.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { PagePhotosComponent } from './page-photos.component';

describe('PagePhotosComponent', () => {
  let component: PagePhotosComponent;
  let fixture: ComponentFixture<PagePhotosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePhotosComponent ],
      imports: [
        StoreBaseModule,
        HttpClientModule,
        RouterTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
