import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { interval } from 'rxjs/observable/interval'; // 属性和原型分离，不可以使用“.”而是call来调用
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/do';  // 添加到Observable原型上了，就可以直接 “.”出来
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  clock: number;
  subscription: Subscription;
  index = 0;
  title = 'Example for Angular 2';

  constructor() {}

  ngOnInit() {
    this.subscription = Observable
                        .interval(1000)
                        .do( e => console.log('observable cread'))
                        .subscribe(
                          value => {
                            this.clock = value;
                            console.log(this.index);
                            this.index++; }
                          );

  }

  ngOnDestroy() {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }

  }


}
