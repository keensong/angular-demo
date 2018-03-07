import { trigger, state, style, transition } from '@angular/animations';

// 定义一个动画，左右两个状态加上颜色变化更容易理解吧
export const boxAnimate2 = trigger('box', [
    // 定义一个状态left
    state('left', style({ transform: 'translate3d(0,0,0)', background: 'red' })),
    // 定义另外一个状态right
    state('right', style({ transform: 'translate3d(200%,0,0)', background: 'blue' })),
  ]);
