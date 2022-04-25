import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersService, PostsService } from '@/services';
import { HttpClientModule } from '@angular/common/http';

import { PagePostComponent } from './page-post.component';

describe('PagePostComponent', () => {
  let component: PagePostComponent;
  let fixture: ComponentFixture<PagePostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePostComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule,
      ],
      providers: [
        UsersService,
        PostsService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
