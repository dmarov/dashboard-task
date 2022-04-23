import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageAlbumComponent } from './page-album.component';

describe('PageAlbumComponent', () => {
  let component: PageAlbumComponent;
  let fixture: ComponentFixture<PageAlbumComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
