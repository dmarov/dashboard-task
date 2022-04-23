import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PhotoEntryComponent } from './photo-entry.component';

describe('PhotoEntryComponent', () => {
  let component: PhotoEntryComponent;
  let fixture: ComponentFixture<PhotoEntryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
