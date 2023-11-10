import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRowComponent } from './header-row.component';

describe('HeaderRowComponent', () => {
  let component: HeaderRowComponent;
  let fixture: ComponentFixture<HeaderRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeaderRowComponent]
    });
    fixture = TestBed.createComponent(HeaderRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
