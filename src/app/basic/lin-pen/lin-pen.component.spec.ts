import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinPenComponent } from './lin-pen.component';

describe('LinPenComponent', () => {
  let component: LinPenComponent;
  let fixture: ComponentFixture<LinPenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinPenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinPenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
