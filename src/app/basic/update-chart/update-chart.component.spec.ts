import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChartComponent } from './update-chart.component';

describe('UpdateChartComponent', () => {
  let component: UpdateChartComponent;
  let fixture: ComponentFixture<UpdateChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
