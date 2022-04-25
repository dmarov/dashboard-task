import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { PhotoEntryComponent } from './photo-entry.component';

describe('PhotoEntryComponent', () => {
  let component: PhotoEntryComponent;
  let fixture: ComponentFixture<PhotoEntryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            paramMap: {
              get: () => 1,
            },
          },
        },
      }],
      declarations: [ PhotoEntryComponent ],
      imports: [
        RouterTestingModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoEntryComponent);
    component = fixture.componentInstance;
    component.photo = {
      albumId: 1,
      id: 1,
      title: 'Mock photo',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
