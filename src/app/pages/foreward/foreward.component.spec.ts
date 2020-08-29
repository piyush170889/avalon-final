import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForewardComponent } from './foreward.component';

describe('ForewardComponent', () => {
  let component: ForewardComponent;
  let fixture: ComponentFixture<ForewardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForewardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
