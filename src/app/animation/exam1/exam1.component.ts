import { Component,
         trigger, // 用来定义触发器的
         state,   // 定义动画的状态
         style,   // 定义动画的样式
         transition,
         animate,
         keyframes
       } from '@angular/core';
import { animation } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'app-exam1',
  templateUrl: './exam1.component.html',
  styleUrls: ['./exam1.component.css'],
  animations: [
    trigger('signal', [
      state('void', style({
        'transform': 'translateY(-100%)'
      })),
      state('go', style({
        'background-color': 'green',
        'height': '100px'
      })),
      state('stop', style({
        'background-color': 'red',
        'height': '50px'
      })),
      transition('void => *', animate(5000, keyframes([
        style({'transform': 'scale(0)', 'padding': '0px'}), // 设置图形的位置
        style({'transform': 'scale(0.1)', 'padding': '50px'}),
        style({'transform': 'scale(0.5)', 'padding': '100px'}),
        style({'transform': 'scale(0.9)', 'padding': '120px'}),
        style({'transform': 'scale(0.95)', 'padding': '135px'}),
        style({'transform': 'scale(1)', 'padding': '140px'})
      ]))),
      transition('* => *', animate('.5s 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)'))
    ])
  ]
})
// 这个组件的html模板使用到了material库，所以首先要安装这个库，然后将相应的组件
// 导入进来，如果遇到使用图标的地方需要安装npm i --save material-design-icons
// 然后在styles.css内导入
// @import "~material-design-icons/iconfont/material-icons.css";
export class Exam1Component {

  // 如果这里设置了signal = 'void'那么将会出现，加载的时候，矩形颜色块并没有动
  // 只有当点击按钮之后，才能触发void状态到其他状态的改变
  signal: string;
  constructor() { }

  onGo(): void {
    this.signal = 'go';
  }

  onStop(): void {
    this.signal = 'stop';
  }
}
