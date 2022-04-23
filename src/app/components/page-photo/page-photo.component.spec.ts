import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PagePhotoComponent } from './page-photo.component';

describe('PagePhotoComponent', () => {
  let component: PagePhotoComponent;
  let fixture: ComponentFixture<PagePhotoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePhotoComponent ]
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
