import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageAlbumsComponent } from './page-albums.component';

describe('PageAlbumsComponent', () => {
  let component: PageAlbumsComponent;
  let fixture: ComponentFixture<PageAlbumsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAlbumsComponent ]
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
