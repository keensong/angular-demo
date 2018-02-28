import { Component, OnInit } from '@angular/core';
import { NgxEchartsService } from 'ngx-echarts';

declare var echarts: any;

@Component({
  selector: 'app-lin-pen',
  templateUrl: './lin-pen.component.html',
  styleUrls: ['./lin-pen.component.css']
})
export class LinPenComponent implements OnInit {

  option: any;
  symbolSize = 20;
  data = [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]];
  private dom: any;
  private myChart: any;
  private zr: any;

  constructor(private nes: NgxEchartsService) { }

  ngOnInit() {
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
              data: this.data
          }
      ]
    };

    this.zr = this.myChart.getZr();
    // 这里必须使用箭头函数，否则会出现this找不到
    this.zr.on('click', (params) => {
      const pointInPixel = [params.offsetX, params.offsetY];
      const pointInGrid = this.myChart.convertFromPixel('grid', pointInPixel);

      if (this.myChart.containPixel('grid', pointInPixel)) {
          this.data.push(pointInGrid);

          // setOption用于更新数据,可以选择是否合并，合并比较只会刷新改变的，
          // 默认为合并
          this.myChart.setOption({
              series: [{
                  id: 'a', // 添加的数据id号 必须为a，否则和之前series中的i不匹配，将不会添加上去
                  data: this.data
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

}
