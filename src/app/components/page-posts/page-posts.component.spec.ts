import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { StoreBaseModule } from '@/modules/store-base.module';
import { PagePostsComponent } from './page-posts.component';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import * as PostsReducers from '@/store/reducers/posts';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from '@/store/effects';
import { PostsService } from '@/services';

describe('PagePostsComponent', () => {
    let component: PagePostsComponent;
    let fixture: ComponentFixture<PagePostsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ PagePostsComponent ],
            imports: [
                RouterTestingModule,
                StoreBaseModule,
                StoreModule.forFeature(PostsReducers.featureKey, PostsReducers.reducer),
                EffectsModule.forFeature([ PostsEffects ]),
                HttpClientModule,
            ],
            providers: [
                PostsService,
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
