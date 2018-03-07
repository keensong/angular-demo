import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { boxAnimate2 } from './animations';

@Component({
  selector: 'app-exam2',
  templateUrl: './exam2.component.html',
  styleUrls: ['./exam2.component.css'],
  animations: [
    boxAnimate2
  ]
})
export class Exam2Component implements OnInit {

  public boxState = '';
  constructor() { }

  ngOnInit() {
  }

  changeState(state: string) {
    this.boxState = state;
  }
}
