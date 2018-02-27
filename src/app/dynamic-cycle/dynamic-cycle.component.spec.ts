import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCycleComponent } from './dynamic-cycle.component';

describe('DynamicCycleComponent', () => {
  let component: DynamicCycleComponent;
  let fixture: ComponentFixture<DynamicCycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicCycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
