import { ThreeViewComponent } from './basic/three-view/three-view.component';
import { ZoomPanDragCircleComponent } from './zoom-pan-drag-circle/zoom-pan-drag-circle.component';
import { LinPenComponent } from './basic/lin-pen/lin-pen.component';
import { ZoomPanDragSvgComponent } from './zoom-pan-drag-svg/zoom-pan-drag-svg.component';
import { SimpleComponent } from './basic/simple/simple.component';
import { BoxplotComponent } from './basic/boxplot/boxplot.component';
import { GuageComponent } from './basic/guage/guage.component';
import { RadarComponent } from './basic/radar/radar.component';
import { PieChartComponent } from './basic/pie-chart/pie-chart.component';
import { LineChartComponent } from './basic/line-chart/line-chart.component';
import { UpdateChartComponent } from './basic/update-chart/update-chart.component';
import { LoadingComponent } from './basic/loading/loading.component';
import { EventComponent } from './basic/event/event.component';
import { BasicComponent } from './basic/basic.component';
import { DynamicCycleComponent } from './dynamic-cycle/dynamic-cycle.component';
import { ThreeCubeComponent } from './three-cube/three-cube.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZoomPanDragCanvasComponent } from './zoom-pan-drag-canvas/zoom-pan-drag-canvas.component';

const routes: Routes = [
  { path: '', redirectTo: 'zoompandragcircle', pathMatch: 'full' },
  // { path: 'dashboard',  component: DashboardComponent, canActivate: [AuthenticatedGuard] },
  { path: 'zoompandragcircle', component: ZoomPanDragCircleComponent },
  { path: 'zoompandrag', component: ZoomPanDragCanvasComponent },
  { path: 'zoompandragsvg', component: ZoomPanDragSvgComponent },
  { path: 'threeCube', component: ThreeCubeComponent },
  { path: 'dynamicycle', component: DynamicCycleComponent },
  { path: 'basic', component: BasicComponent },
  { path: 'event', component: EventComponent },
  { path: 'loading', component: LoadingComponent },
  { path: 'updataChart', component: UpdateChartComponent },
  { path: 'lineChart', component: LineChartComponent },
  { path: 'pieChart', component: PieChartComponent },
  { path: 'radarChart', component: RadarComponent },
  { path: 'guage', component: GuageComponent },
  { path: 'boxplot', component: BoxplotComponent },
  { path: 'simple', component: SimpleComponent },
  { path: 'linePen', component: LinPenComponent },
  { path: 'threeview', component: ThreeViewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
