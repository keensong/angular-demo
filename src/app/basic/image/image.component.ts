import { Component, OnInit } from '@angular/core';
declare var echarts: any;
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  dom: any; // 查找的dom元素
  myChart: any; // echarts实例
  canvas: any; // 待动态创建的canvas
  myImg = new Image(); // 图像实例
  option = null; // echarts的数据options
  zPoints: any = [];
  imgData: any;
  data: any = [];
  constructor() {
    // 图像的路径
    this.myImg.src = '../../../assets/data/webwxgetmsgimg.jpg';
   }

  ngOnInit() {
    this.dom = document.getElementById('demo-chart'); // 获取html元素中div元素
    this.myChart = echarts.init(this.dom); // 初始化echarts
    this.canvas = document.createElement('canvas'); // 创建一个空的canvas元素，是为了获取数据
    const ctx = this.canvas.getContext('2d');

    this.myImg.onload = () => {
      // 获取图像宽度
      const width = this.canvas.width = this.myImg.width;
      // 获取图像高度
      const height = this.canvas.height = this.myImg.height;
      // 在canvas上画图像
      ctx.drawImage(this.myImg, 0, 0, width, height);
      // 获得canvas上图像的数据
      this.imgData = ctx.getImageData(0, 0, width, height);

      this.option = {
        tooltip: {},
        // backgroundColor: '#fff',
        xAxis3D: {
          type: 'value'
        },
        yAxis3D: {
          type: 'value'
        },
        zAxis3D: {
          type: 'value',
          min: 0,
          max: 3000
        },
        grid3D: {
          axisPointer: {
              show: false
          },
          viewControl: {
              distance: 100 // 调节视图的远近距离，距离视角距离,越小离得越近
          },
          postEffect: {
              enable: true
          },
          light: {
              main: {
                  shadow: true,
                  intensity: 2 // 主光源的强度
              },
              // 环境光源,echarts-gl会自动识别
              ambientCubemap: {
                  texture: '../../../assets/data/solder.hdr', // 质地来源
                  exposure: 2, // 曝光级别
                  diffuseIntensity: 0.2, // 扩散强度
                  specularIntensity: 1 // 反射强度
              }
          }
        },
        // 装载数据
        series: [{
          type: 'surface',
          silent: true,
          wireframe: {
              show: false
          },
          itemStyle: {
              color: (params) => {
                  const i = params.dataIndex;
                  const red = this.imgData.data[i * 4];
                  const green = this.imgData.data[i * 4 + 1];
                  const blue = this.imgData.data[i * 4 + 2];
                  return 'rgb(' + [red, green, blue].join(',') + ')';
              }
          },
          data: this.data
      }]
      };
      // this.myChart.setOption(this.option); // 刷新数据
    };
  }

  readZFile(fileInfo) {
    const fileName = fileInfo.target.files[0];
    if (!fileName) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (file) => {
      const context: any = file.target; // 获取文件目标
      const text = context.result; // 将文件转换为文本字符串
      const allLines = text.split(/\r\n|\n/); // 将字符串按行转换为数组
      allLines.map( (line) => {
        if (line) {
          const z = parseFloat(line);
          this.zPoints.push(z);
        }
      });
      // 这里更新数据
      // this.readImage();
      const w = this.myImg.width;
      const h = this.myImg.height;
      for ( let i = 0; i < this.imgData.data.length / 4; i++) {

        // 转换为x,y,z存入
        this.data.push([i % w, h - Math.floor(i / w), this.zPoints[i]]);
      }
      this.option.series.data = this.data;
      this.myChart.setOption(this.option, false);
    };
    reader.readAsText(fileName);
  }
}
