import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BubblesChartComponent } from './bubbles-chart.component';

describe('BubblesChartComponent', () => {
  let component: BubblesChartComponent;
  let fixture: ComponentFixture<BubblesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BubblesChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BubblesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
