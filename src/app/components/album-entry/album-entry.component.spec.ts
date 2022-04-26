import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AlbumsService } from '@/services';

import { AlbumEntryComponent } from './album-entry.component';

describe('AlbumEntryComponent', () => {
    let component: AlbumEntryComponent;
    let fixture: ComponentFixture<AlbumEntryComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ AlbumEntryComponent ],
            imports: [
                HttpClientModule,
            ],
            providers: [
                AlbumsService,
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AlbumEntryComponent);
        component = fixture.componentInstance;
        component.album = {
        id: 1,
        userId: 1,
        title: 'Mock album',
        };

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
