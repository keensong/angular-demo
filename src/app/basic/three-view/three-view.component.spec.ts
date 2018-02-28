import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeViewComponent } from './three-view.component';

describe('ThreeViewComponent', () => {
  let component: ThreeViewComponent;
  let fixture: ComponentFixture<ThreeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
