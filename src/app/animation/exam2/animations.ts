import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';

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

export const GroupAnimate = trigger('GroupAnimate', [
    // 入场动画
    transition(':enter', [
        // 这里是将初始的透明，宽度，高度都设置为0，那么就不能显示，translateX为初始的位置，偏左
      style({ opacity: 0, width: '0px', height: '0px', transform: 'translateX(-200%)'}),
      group([
        // Group实现并行动画
        animate('1s ease', style({transform: 'translateX(0)'})), // 1s加载 比初始位置靠右了一点
        // 1s加载 200ms延迟 width增加为100px，如果为200那么初始就不是圆形了，但是最后还是会变成圆形，因为在html中已经设置过了
        animate('1s 200ms ease', style({width: '100px'})),
        animate('1s 200ms ease', style({height: '100px'})), // 1s加载 200ms延迟
        animate('0.5s', style({opacity: 1})), // 0.5s加载 显示完整的圆形
      ])
    ]),
  ]);

