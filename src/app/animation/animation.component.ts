import { Component, OnInit, trigger,
         state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('btnState', [ // btnState为信号名字，在html中使用[@btnState]进行绑定
      state('inactive', style({ // 设置inactive状态
        transform: 'scale(1)' // 变换为放大1
      })),
      state('active', style({ // 设置active状态
        transform: 'scale(1.1)' // 变换为放大1.1
      })),
      // 设置转换的过程顺序
      // 当鼠标进入按钮区域之后，toggleBtnState(true)函数被调用，this.btnState值为active
      // 那么将会100ms放大1.1倍进入
      transition('inactive => active', animate('100ms ease-in')),
      // 当鼠标离开的时候，toggleBtnState(false)函数被调用，this.btnState值为inactive
      // 那么将会100ms放大1倍退出
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class AnimationComponent implements OnInit {

  btnState: any;
  constructor() { }

  ngOnInit() {
  }

  toggleBtnState( stat: boolean ) {
    this.btnState = stat ? 'active' : 'inactive';
  }

}
