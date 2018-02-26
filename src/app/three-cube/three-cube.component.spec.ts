import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeCubeComponent } from './three-cube.component';

describe('ThreeCubeComponent', () => {
  let component: ThreeCubeComponent;
  let fixture: ComponentFixture<ThreeCubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeCubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
