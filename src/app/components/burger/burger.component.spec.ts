import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { StoreBaseModule } from '@/modules/store-base.module';
import { RouterTestingModule } from '@angular/router/testing';

import { BurgerComponent } from './burger.component';

describe('BurgerComponent', () => {
  let component: BurgerComponent;
  let fixture: ComponentFixture<BurgerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerComponent ],
      imports: [
        StoreBaseModule,
        RouterTestingModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
