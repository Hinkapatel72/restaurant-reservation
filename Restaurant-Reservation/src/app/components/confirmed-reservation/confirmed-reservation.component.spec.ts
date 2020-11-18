import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedReservationComponent } from './confirmed-reservation.component';

describe('ConfirmedReservationComponent', () => {
  let component: ConfirmedReservationComponent;
  let fixture: ComponentFixture<ConfirmedReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmedReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
