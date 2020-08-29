import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthandsafetyComponent } from './healthandsafety.component';

describe('HealthandsafetyComponent', () => {
  let component: HealthandsafetyComponent;
  let fixture: ComponentFixture<HealthandsafetyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthandsafetyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthandsafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
