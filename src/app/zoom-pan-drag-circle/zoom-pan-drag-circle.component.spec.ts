import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomPanDragCircleComponent } from './zoom-pan-drag-circle.component';

describe('ZoomPpanDragCircleComponent', () => {
  let component: ZoomPanDragCircleComponent;
  let fixture: ComponentFixture<ZoomPanDragCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoomPanDragCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomPanDragCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
