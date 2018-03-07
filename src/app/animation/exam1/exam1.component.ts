import { Component,
         trigger, // 用来定义触发器的
         state,   // 定义动画的状态
         style    // 定义动画的样式
       } from '@angular/core';
import { animation } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'app-exam1',
  templateUrl: './exam1.component.html',
  styleUrls: ['./exam1.component.css'],
  animations: [
    trigger('signal', [
      state('go', style({
        'background-color': 'green'
      })),
      state('stop', style({
        'background-color': 'red'
      }))
    ])
  ]
})
// 这个组件的html模板使用到了material库，所以首先要安装这个库，然后将相应的组件
// 导入进来，如果遇到使用图标的地方需要安装npm i --save material-design-icons
// 然后在styles.css内导入
// @import "~material-design-icons/iconfont/material-icons.css";
export class Exam1Component {

  signal: string;
  constructor() { }

  onGo(): void {
    this.signal = 'go';
  }

  onStop(): void {
    this.signal = 'stop';
  }
}
