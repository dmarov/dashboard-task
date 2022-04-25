import { StoreBaseModule } from '@/modules/store-base.module';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import * as AlbumsReducers from '@/store/reducers/albums';
import { AlbumsEffects } from '@/store/effects';
import { AlbumsService } from '@/services';

import { PageAlbumsComponent } from './page-albums.component';

describe('PageAlbumsComponent', () => {
  let component: PageAlbumsComponent;
  let fixture: ComponentFixture<PageAlbumsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAlbumsComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        StoreBaseModule,
        StoreModule.forFeature(AlbumsReducers.featureKey, AlbumsReducers.reducer),
        EffectsModule.forFeature([ AlbumsEffects ]),
      ],
      providers: [
        AlbumsService,
      ],
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
