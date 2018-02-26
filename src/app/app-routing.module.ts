import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZoomPanDragCanvasComponent } from './zoom-pan-drag-canvas/zoom-pan-drag-canvas.component';

const routes: Routes = [
  { path: '', redirectTo: 'zoompandrag', pathMatch: 'full' },
  // { path: 'dashboard',  component: DashboardComponent, canActivate: [AuthenticatedGuard] },
  { path: 'zoompandrag', component: ZoomPanDragCanvasComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
