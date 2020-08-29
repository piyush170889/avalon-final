import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershpComponent } from './leadershp.component';

describe('LeadershpComponent', () => {
  let component: LeadershpComponent;
  let fixture: ComponentFixture<LeadershpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadershpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
