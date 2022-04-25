import { StoreBaseModule } from '@/modules/store-base.module';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PageAlbumsComponent } from './page-albums.component';

describe('PageAlbumsComponent', () => {
  let component: PageAlbumsComponent;
  let fixture: ComponentFixture<PageAlbumsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAlbumsComponent ],
      imports: [
        RouterTestingModule,
        StoreBaseModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
