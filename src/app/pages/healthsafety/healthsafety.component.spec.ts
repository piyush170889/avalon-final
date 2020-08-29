import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthsafetyComponent } from './healthsafety.component';

describe('HealthsafetyComponent', () => {
  let component: HealthsafetyComponent;
  let fixture: ComponentFixture<HealthsafetyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthsafetyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthsafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
