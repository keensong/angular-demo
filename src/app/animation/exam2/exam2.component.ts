import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { boxAnimate2, KeyframesAnimate } from './animations';

@Component({
  selector: 'app-exam2',
  templateUrl: './exam2.component.html',
  styleUrls: ['./exam2.component.css'],
  animations: [
    boxAnimate2,
    KeyframesAnimate
  ]
})
export class Exam2Component implements OnInit {

  public boxState = '';

  // 显示么
  show = true;
  num = 123;
  Keyframes = true;
  Group = true;
  constructor() { }

  ngOnInit() {
  }

  KeyframesShow() {
    this.Keyframes = !this.Keyframes;
  }

  changShow() {
    this.show = !this.show;
  }
}
