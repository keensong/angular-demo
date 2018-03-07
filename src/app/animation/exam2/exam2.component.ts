import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { boxAnimate2, KeyframesAnimate, GroupAnimate } from './animations';

@Component({
  selector: 'app-exam2',
  templateUrl: './exam2.component.html',
  styleUrls: ['./exam2.component.css'],
  animations: [
    boxAnimate2,
    KeyframesAnimate,
    GroupAnimate
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

  /****************动画实例****************/
  changState(state) {
    this.boxState = state;
  }


  changShow() {
    this.show = !this.show;
  }

  /******关键帧(Keyframes)的多阶段动画*********/
  KeyframesShow() {
    this.Keyframes = !this.Keyframes;
  }
  /***************分组关键帧*****************/
  add(f: boolean) {
    const n = Math.round(Math.random() * 100);
    this.num = f ? this.num + n : this.num - n;
  }

  GroupShow() {
    this.Group = !this.Group;
  }

  Callback(f: boolean) {
    if (f) {
      console.log('动画开始');
    } else {
      console.log('动画结束');
    }
  }
}
