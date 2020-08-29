import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandAssocatesComponent } from './brand-assocates.component';

describe('BrandAssocatesComponent', () => {
  let component: BrandAssocatesComponent;
  let fixture: ComponentFixture<BrandAssocatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandAssocatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandAssocatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
