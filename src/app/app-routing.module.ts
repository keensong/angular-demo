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
  { path: '', redirectTo: 'zoompandrag', pathMatch: 'full' },
  // { path: 'dashboard',  component: DashboardComponent, canActivate: [AuthenticatedGuard] },
  { path: 'zoompandrag', component: ZoomPanDragCanvasComponent },
  { path: 'threeCube', component: ThreeCubeComponent },
  { path: 'dynamicycle', component: DynamicCycleComponent },
  { path: 'basic', component: BasicComponent },
  { path: 'event', component: EventComponent },
  { path: 'loading', component: LoadingComponent },
  { path: 'updataChart', component: UpdateChartComponent },
  { path: 'lineChart', component: LineChartComponent },
  { path: 'pieChart', component: PieChartComponent },
  { path: 'radarChart', component: RadarComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
