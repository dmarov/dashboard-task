import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PagePhotosComponent } from './page-photos.component';

describe('PagePhotosComponent', () => {
  let component: PagePhotosComponent;
  let fixture: ComponentFixture<PagePhotosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePhotosComponent ]
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
