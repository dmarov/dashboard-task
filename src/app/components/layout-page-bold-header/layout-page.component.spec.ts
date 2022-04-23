import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PagePostsComponent } from './page-posts.component';

describe('PagePostsComponent', () => {
  let component: PagePostsComponent;
  let fixture: ComponentFixture<PagePostsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
