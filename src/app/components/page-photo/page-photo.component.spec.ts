import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { StoreBaseModule } from '@/modules/store-base.module';
import { PhotosService } from '@/services';

import { PagePhotoComponent } from './page-photo.component';

describe('PagePhotoComponent', () => {
  let component: PagePhotoComponent;
  let fixture: ComponentFixture<PagePhotoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePhotoComponent ],
      imports: [
        RouterTestingModule,
        StoreBaseModule,
      ],
      providers: [
        PhotosService,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
