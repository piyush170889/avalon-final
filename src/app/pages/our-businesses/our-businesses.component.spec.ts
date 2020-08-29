import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBusinessesComponent } from './our-businesses.component';

describe('OurBusinessesComponent', () => {
  let component: OurBusinessesComponent;
  let fixture: ComponentFixture<OurBusinessesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurBusinessesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurBusinessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
