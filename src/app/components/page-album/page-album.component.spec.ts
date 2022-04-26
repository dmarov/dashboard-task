import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AlbumsService } from '@/services';
import { PageAlbumComponent } from './page-album.component';
import { HttpClientModule } from '@angular/common/http';

describe('PageAlbumComponent', () => {
    let component: PageAlbumComponent;
    let fixture: ComponentFixture<PageAlbumComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ PageAlbumComponent ],
            imports: [
                RouterTestingModule,
                HttpClientModule,
            ],
            providers: [
                AlbumsService,
            ],
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
