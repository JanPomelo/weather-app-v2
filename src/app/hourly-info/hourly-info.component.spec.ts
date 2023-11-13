import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyInfoComponent } from './hourly-info.component';

describe('HourlyInfoComponent', () => {
  let component: HourlyInfoComponent;
  let fixture: ComponentFixture<HourlyInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HourlyInfoComponent]
    });
    fixture = TestBed.createComponent(HourlyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
