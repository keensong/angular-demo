import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomPanDragSvgComponent } from './zoom-pan-drag-svg.component';

describe('ZoomPanDragSvgComponent', () => {
  let component: ZoomPanDragSvgComponent;
  let fixture: ComponentFixture<ZoomPanDragSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoomPanDragSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomPanDragSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
