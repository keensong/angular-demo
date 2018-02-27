import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic.component';
import { EventComponent } from './event/event.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule
  ],
  declarations: [
    BasicComponent,
    EventComponent,
    LoadingComponent
  ]
})
export class BasicModule { }
