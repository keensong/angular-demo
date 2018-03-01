import { HomeModule } from './home/home.module';
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
import { NgxEchartsModule } from 'ngx-echarts';
import { BasicModule } from './basic/basic.module';
import { ZoomPanDragSvgComponent } from './zoom-pan-drag-svg/zoom-pan-drag-svg.component';
import { ZoomPanDragCircleComponent } from './zoom-pan-drag-circle/zoom-pan-drag-circle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    ZoomPanDragCanvasComponent,
    ThreeCubeComponent,
    DynamicCycleComponent,
    BubblesComponent,
    ZoomPanDragSvgComponent,
    ZoomPanDragCircleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    NgxEchartsModule,
    BasicModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    HomeModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
