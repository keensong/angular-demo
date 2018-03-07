import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

// 定义一个动画，左右两个状态加上颜色变化更容易理解吧
export const boxAnimate2 = trigger('box', [
    // 定义一个状态left
    state('left', style({ transform: 'translate3d(0,0,0)', background: 'red' })),
    // 定义另外一个状态right
    state('right', style({ transform: 'translate3d(200%,0,0)', background: 'blue' })),
    transition('* => *', animate(500)),
]);

export const KeyframesAnimate = trigger('KeyframesAnimate', [
    // 入场动画
    transition(':enter', [
      animate(500, keyframes([
        // 根据offset，translate3d的不同实现跳跃，translate3d为移动
        style({opacity: 0, transform: 'translate3d(-400%,0,0)', offset: 0}),
        style({opacity: 0.5, transform: 'translate3d(-150%,-50%,0)',  offset: 0.3}),
        style({opacity: 1, transform: 'translate3d(0,10%,0)',  offset: 0.7}),
        style({opacity: 1, transform: 'translate3d(0,0,0)',     offset: 1.0})
      ]))
    ]),
    // 出场动画
    transition(':leave', [
      animate(500, keyframes([
        style({opacity: 1, transform: 'translate3d(0,0,0)',     offset: 0}),
        style({opacity: 1, transform: 'translate3d(0,10%,0)', offset: 0.3}),
        style({opacity: 0.5, transform: 'translate3d(150%,-50%,0)',  offset: 0.7}),
        style({opacity: 0, transform: 'translate3d(400%,0,0)',  offset: 1.0})
      ]))
    ]),

]);
