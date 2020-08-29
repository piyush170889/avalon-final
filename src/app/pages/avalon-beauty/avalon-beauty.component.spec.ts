import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvalonBeautyComponent } from './avalon-beauty.component';

describe('AvalonBeautyComponent', () => {
  let component: AvalonBeautyComponent;
  let fixture: ComponentFixture<AvalonBeautyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvalonBeautyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvalonBeautyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
