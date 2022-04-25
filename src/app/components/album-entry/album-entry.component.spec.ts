import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AlbumsService } from '@/services';

import { AlbumEntryComponent } from './album-entry.component';

describe('AlbumEntryComponent', () => {
  let component: AlbumEntryComponent;
  let fixture: ComponentFixture<AlbumEntryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumEntryComponent ],
      providers: [
        AlbumsService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
