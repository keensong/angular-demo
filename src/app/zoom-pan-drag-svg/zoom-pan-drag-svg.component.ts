import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import * as d3 from 'd3';

// declare var d3: any;


@Component({
  selector: 'app-zoom-pan-drag-svg',
  templateUrl: './zoom-pan-drag-svg.component.html',
  styleUrls: ['./zoom-pan-drag-svg.component.css']
})
export class ZoomPanDragSvgComponent implements OnInit {

  width: number;
  height: number;
  transform: any;
  points: any = [];
  shapeCounts = 300;
  svg: any;
  g: any;

  // elementRef: ElementRef;
  constructor(elementRef: ElementRef ) {
    // this.elementRef = elementRef;
  }

  ngOnInit() {
    this.svg = d3.select('svg');
    this.width = +this.svg.attr('width'),
    this.height = +this.svg.attr('height'),
    this.transform = d3.zoomIdentity;

    const theta = Math.PI * (3 - Math.sqrt(5)); // 画圆形
    for (let i = 0; i < this.shapeCounts; i++) {
      const r = 10 * Math.sqrt(i), a = theta * i; // 画圆形
      const p =  [
        this.width / 2 + r * Math.cos(a),
        this.height / 2 + r * Math.sin(a)
      ];
      this.points.push(p);
    }

    this.g = this.svg.append('g');

    this.g.selectAll('circle')
      .data(this.points)
      .enter()
      .append('circle')
      .attr('cx', function(d) { return d[0]; })
      .attr('cy', function(d) { return d[1]; })
      .attr('r', 2.5)
      .attr('fill', 'red')
      .call(d3.drag()
      .on('drag', (d, i, n) => {
        // i为索引，n为数组，d为选中的shape数据，通过数组索引来获取节点 as any必须要写
        const target = d3.select(n[i]).node() as any;
        // 然后在选择这个节点的元素，将他的位置改变为鼠标的位置
        d3.select(target).attr('cx', d[0] = d3.event.x).attr('cy', d[1] = d3.event.y);
      }
    ));

    this.svg.call(d3.zoom()
            .scaleExtent([1 / 2, 8]) // 放大缩小事件
            .on('zoom', () => {
              // 这个是针对整个分组g有效，这里是on事件zoom，放大缩小
              // transform为方法属性，相当于调用了改变选中元素的仿射变换。
              // d3.event.transform 鼠标的位置来进行放大缩小和平移
              this.g.attr('transform', d3.event.transform);
            }
          ));
  }
}
