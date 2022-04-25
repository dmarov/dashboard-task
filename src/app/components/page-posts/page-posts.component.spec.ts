import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { StoreBaseModule } from '@/modules/store-base.module';
import { PagePostsComponent } from './page-posts.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PagePostsComponent', () => {
  let component: PagePostsComponent;
  let fixture: ComponentFixture<PagePostsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePostsComponent ],
      imports: [
        RouterTestingModule,
        StoreBaseModule,
      ],
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
