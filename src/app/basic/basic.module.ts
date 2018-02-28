import { BasicService } from './basic.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic.component';
import { EventComponent } from './event/event.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { LoadingComponent } from './loading/loading.component';
import { UpdateChartComponent } from './update-chart/update-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { RadarComponent } from './radar/radar.component';
import { GuageComponent } from './guage/guage.component';
import { BoxplotComponent } from './boxplot/boxplot.component';
import { SimpleComponent } from './simple/simple.component';
import { LinPenComponent } from './lin-pen/lin-pen.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule} from '@angular/platform-browser';
@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
    BrowserModule,
    HttpClientModule
  ],
  declarations: [
    BasicComponent,
    EventComponent,
    LoadingComponent,
    UpdateChartComponent,
    LineChartComponent,
    PieChartComponent,
    RadarComponent,
    GuageComponent,
    BoxplotComponent,
    SimpleComponent,
    LinPenComponent
  ],
  providers: [
    { provide: 'basicService', useClass: BasicService }
  ]
})
export class BasicModule { }
