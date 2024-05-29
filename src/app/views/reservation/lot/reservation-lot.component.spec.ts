import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationLotComponent } from './reservation-lot.component';

describe('LotComponent', () => {
  let component: ReservationLotComponent;
  let fixture: ComponentFixture<ReservationLotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationLotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
