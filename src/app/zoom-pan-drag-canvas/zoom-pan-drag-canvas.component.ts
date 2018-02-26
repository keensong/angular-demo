import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-zoom-pan-drag-canvas',
  templateUrl: './zoom-pan-drag-canvas.component.html',
  styleUrls: ['./zoom-pan-drag-canvas.component.css']
})
export class ZoomPanDragCanvasComponent implements OnInit {
  shapeCounts = 2000;
  radius = 5;
  transform = d3.zoomIdentity;
  canvas: any;
  context: any;
  width: number;
  height: number;
  points: any = [];


  eventX: number;
  eventY: number;
  invertEventX: number;
  invertEventY: number;
  applyEventX: number;
  applyEventY: number;
  transformX: number;
  transformY: number;
  transformK: number;
  drawCircleX: number;
  drawCircleY: number;

  constructor() { }


  ngOnInit() {
    // 获取html中对应id的元素标签
    this.canvas = document.getElementById('mycanvaz');
    // console.log(this.canvas);
    // 上下文画2D
    this.context = this.canvas.getContext('2d');
    // console.log(this.context);

    this.height = this.canvas.height;
    this.width = this.canvas.width;

    const theta = Math.PI * (3 - Math.sqrt(5)); // 画圆形
    for (let i = 0; i < this.shapeCounts; i++) {
      const r = 10 * Math.sqrt(i), a = theta * i; // 画圆形
      const p =  [
        this.width / 2 + r * Math.cos(a),
        this.height / 2 + r * Math.sin(a)
      ];
      // console.log(i + " " + p);
      this.points.push(p);
    }

    d3.select(this.canvas)
      .call(d3.drag().subject(() => this.dragsubject()).on('drag', () => this.dragged()))
      .call(d3.zoom().scaleExtent([1 / 8, 10]).on('zoom', () => this.zoomed()))
      .call(() => {
        this.render();
      });
  }

  zoomed() {
    this.transform = d3.event.transform;
    this.render();
  }

  dragsubject() {
    const
      x = this.transform.invertX(d3.event.x),
      y = this.transform.invertY(d3.event.y);

    for (let i = this.points.length - 1; i >= 0; --i) {
      const point = this.points[i];
      const dx = x - point[0];
      const dy = y - point[1];
      if (dx * dx + dy * dy < this.radius * this.radius) {
        point.x = this.transform.applyX(point[0]);
        point.y = this.transform.applyY(point[1]);
        return point;
      }
    }
  }

  dragged() {
    d3.event.subject[0] = this.transform.invertX(d3.event.x);
    d3.event.subject[1] = this.transform.invertY(d3.event.y);

    this.render();
  }

  render() {
    this.context.save();
    this.context.clearRect(0, 0, this.width, this.height);
    this.context.beginPath();
    this.context.translate(this.transform.x, this.transform.y);
    this.context.scale(this.transform.k, this.transform.k);
    this.points.forEach((point) => {
      this.context.moveTo(point[0] + this.radius, point[1]);
      this.context.arc(point[0], point[1], this.radius, 0, 2 * Math.PI);
    });
    this.context.fill();
    this.context.restore();
  }

  drawPoint(point) {
    this.context.moveTo(point[0] + this.radius, point[1]);
    this.context.arc(point[0], point[1], this.radius, 0, 2 * Math.PI);
  }
}
