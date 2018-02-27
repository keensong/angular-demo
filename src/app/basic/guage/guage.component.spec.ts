import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuageComponent } from './guage.component';

describe('GuageComponent', () => {
  let component: GuageComponent;
  let fixture: ComponentFixture<GuageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
