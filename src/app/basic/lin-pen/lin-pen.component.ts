import { Component, OnInit, Inject } from '@angular/core';
import { NgxEchartsService } from 'ngx-echarts';

declare var echarts: any;

import { Point } from '../lin-pen/entities';

@Component({
  selector: 'app-lin-pen',
  templateUrl: './lin-pen.component.html',
  styleUrls: ['./lin-pen.component.css']
})
export class LinPenComponent implements OnInit {

  option: any;
  symbolSize = 20;
  data = [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]];
  points = [];
  point: any[] = new Array(2);
  private dom: any;
  private myChart: any;
  private zr: any;

  constructor(private nes: NgxEchartsService,
              @Inject('basicService') private service) {
  }

  ngOnInit() {
    this.service.getPonits().subscribe( points => {
        const len = points.length;
        this.initArray(len, 2);
        for ( let i = 0; i < len; ++i) {
            this.points[i][0] = points[i].x;
            this.points[i][1] = points[i].y;
        }
        this.initChart();
        console.log(this.points);
    }, (err) => {
        // 失败回调
        console.log('获取数据失败');
      });
  }

  initChart(): void {
    this.dom = document.getElementById('linpen');
    this.myChart = echarts.init(this.dom);
    this.option = {
      title: {
          text: 'Click to Add Points'
      },
      tooltip: {
          trigger: 'axis',
          formatter: (params) => {
            const data = params[0].data || [0, 0];
            return data[0].toFixed(2) + ', ' + data[1].toFixed(2);
        }
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis: {
          min: -60,
          max: 20,
          type: 'value',
          axisLine: {onZero: false}
      },
      yAxis: {
          min: 0,
          max: 40,
          type: 'value',
          axisLine: {onZero: false}
      },
      series: [
          {
              id: 'a',
              type: 'line',
              smooth: true,
              symbolSize: this.symbolSize,
              data: this.points
          }
      ]
    };

    this.zr = this.myChart.getZr();
    // 这里必须使用箭头函数，否则会出现this找不到
    this.zr.on('click', (params) => {
      const pointInPixel = [params.offsetX, params.offsetY];
      const pointInGrid = this.myChart.convertFromPixel('grid', pointInPixel);

      if (this.myChart.containPixel('grid', pointInPixel)) {
          this.points.push(pointInGrid);

          // setOption用于更新数据,可以选择是否合并，合并比较只会刷新改变的，
          // 默认为合并
          this.myChart.setOption({
              series: [{
                  id: 'a', // 添加的数据id号 必须为a，否则和之前series中的i不匹配，将不会添加上去
                  data: this.points
              }]
          });
      }
    });
    // 必须使用lambda表达式这里;，否则this.zr找不到setCursorStyle;，this.myChart找不到containPixel;
    // 此处的功能为当鼠标移动的时候，增加鼠标旁边的加号图标
    this.zr.on('mousemove',  (params) => {
        const pointInPixel = [params.offsetX, params.offsetY];
        this.zr.setCursorStyle(this.myChart.containPixel('grid', pointInPixel) ? 'copy' : 'default');
    });
  }

  initArray(row: number, column: number) {
    for ( let i = 0; i < row; i++) {        // 一维长度为i,i为变量，可以根据实际情况改变
        this.points[i] = new Array();    // 声明二维，每一个一维数组里面的一个元素都是一个数组；
        for ( let j = 0; j < column; j++) {      // 一维数组里面每个元素数组可以包含的数量p，p也是一个变量；
            this.points[i][j] = 0;       // 这里将变量初始化，我这边统一初始化为空，后面在用所需的值覆盖里面的值
        }
    }
  }
}
