import { Component, OnInit } from '@angular/core';

declare var echarts: any;

@Component({
  selector: 'app-three-view',
  templateUrl: './three-view.component.html',
  styleUrls: ['./three-view.component.css']
})
export class ThreeViewComponent implements OnInit {
  imageWidth = 93;
  imageHeight = 90;

  isLoading = true;
  filePath: string = null;
  options: any;
  data: any;
  text: any;
  isFileReaderWork = false;
  file: any;
  updateOptions: any;
  points: any = [];

  img = new Image();
  // fso = new ActiveXObject(Scripting.FileSystemObject);
  private dom: any;
  private myChart: any;
  constructor() { }

  ngOnInit() {
    this.dom = document.getElementById('threeview');
    this.myChart = echarts.init(this.dom);

    this.options = {
      // dataset: {},
      // 需要注意的是我们不能跟 grid 一样省略 grid3D
      backgroundColor: '#fff',
      grid3D: {
        viewControl: {
          alpha: 70,
          beta: 0
        },
        postEffect: {
          enable: true,
          SSAO: {
              enable: true
          }
        },
        boxDepth: 100,
        light: {
          main: {
              shadow: true,
              intensity: 2
          },
          // ambientCubemap: {
          //     texture: 'data-gl/asset/canyon.hdr',
          //     exposure: 2,
          //     diffuseIntensity: 0.2,
          //     specularIntensity: 1
          // }
        }
      },
      // 默认情况下, x, y, z 分别是从 0 到 1 的数值轴
      xAxis3D: {},
      yAxis3D: {},
      zAxis3D: {},
      series: [{
        type: 'scatter3D', // 点云
        // type: 'bar3D',
        // shading: 'realistic',
        // barSize: 1,
        // wireframe: {
        //   show: false
        // },
        data: this.points,
        symbolSize: 3
      }]
   };
  }

  readOneFile(fileInfo) {
    const fileName = fileInfo.target.files[0];
    if (!fileName) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (file) => {
      const context: any = file.target; // 获取文件目标
      this.text = context.result; // 将文件转换为文本字符串
      const allLines = this.text.split(/\r\n|\n/); // 将字符串按行转换为数组
      const len = allLines.length - 1;
      this.initArray(len, 3); // 初始化两维数组
      let index = 0;

      let x = 0;
      let y = 0;
      allLines.map( (line) => {
        if (line) {
          const z = parseFloat(line);
          this.points[index] = [x, y, z];
          if ( index !== 0 && index % (this.imageHeight - 1 ) === 0 ) { // 每隔198个点就增加1，直到117
            x += 1;
            y = 0;
          }
          y += 1;
          index++;
          if (index === len) {
            this.isLoading = !this.isLoading; // 数据转换完成
            this.updateFileDataToView();
           }
           console.log(this.points);
        }
      });
    };
    reader.readAsText(fileName);
  }
  // 读取x y z数据格式的
  readXYZFile(fileInfo) {
    const fileName = fileInfo.target.files[0];
    if (!fileName) {
      return;
    }
    // this.file = new File();
    const reader = new FileReader();
    reader.onload = (file) => {
      const context: any = file.target; // 获取文件目标
      this.text = context.result; // 将文件转换为文本字符串
      const allLines = this.text.split(/\r\n|\n/); // 将字符串按行转换为数组
      const len = allLines.length - 1;
      this.initArray(len, 3); // 初始化两维数组
      let index = 0;
      allLines.map( (line) => {
        if (line) {
          const arr = line.split('\t');
          this.points[index] = arr.map( (value) => {
            return parseFloat(value);
          });
          index++;
          if (index === len) {
            this.isLoading = !this.isLoading; // 数据转换完成
            this.updateFileDataToView();
           }
        }
      });
    };
    reader.readAsText(fileName);
  }

  updateFileDataToView(): void {
    // this.updateOptions = this.points;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    this.options.series.data = this.points;
    this.myChart.setOption(this.options, false);
  }

  initArray(row: number, column: number): void {
    if ( column === 0 ) { return; }
    for ( let i = 0; i < row; i++) {        // 一维长度为i,i为变量，可以根据实际情况改变
        this.points[i] = new Array();    // 声明二维，每一个一维数组里面的一个元素都是一个数组；
        for ( let j = 0; j < column; j++) {      // 一维数组里面每个元素数组可以包含的数量p，p也是一个变量；
            this.points[i][j] = 0;       // 这里将变量初始化，我这边统一初始化为空，后面在用所需的值覆盖里面的值
        }
    }
  }
}
