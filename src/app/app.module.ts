import { BubblesComponent } from './custom/bubbles.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ZoomPanDragCanvasComponent } from './zoom-pan-drag-canvas/zoom-pan-drag-canvas.component';
import { ThreeCubeComponent } from './three-cube/three-cube.component';
import { DynamicCycleComponent } from './dynamic-cycle/dynamic-cycle.component';
import { BubblesChartComponent } from './custom/bubbles-chart/bubbles-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    ZoomPanDragCanvasComponent,
    ThreeCubeComponent,
    DynamicCycleComponent,
    BubblesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
