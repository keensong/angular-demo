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
      const width = this.canvas.width = this.myImg.height;
      // 获取图像高度
      const height = this.canvas.height = this.myImg.height;
      // 在canvas上画图像
      ctx.drawImage(this.myImg, 0, 0, width, height);
      // 获得canvas上图像的数据
      const imgData = ctx.getImageData(0, 0, width, height);
      // 图像数据存储的数据
      const data = [];

      let r: any;
      let g: any;
      let b: any;
      let lum: any;
      // 将图像的数据转换为RGB格式
      for ( let i = 0; i < imgData.data.length / 4; i++) {
        r = imgData.data[i * 4]; // 每个像素点的red
        g = imgData.data[i * 4 + 1]; // 每个像素点的green
        b = imgData.data[i * 4 + 2]; // 每个像素点的blue

        // 这就是我们设置三个元素的向量，为我们的亮度来保存颜色比重的地方。这三个值加起来要为 1，
        // 这样我们才能把亮度计算为 0.0 - 1.0 之间的值。注意中间的值，就是表示绿色的值，用了
        // 70% 的颜色比重，而蓝色只用了它的 10%。这是SONY Trinitron的数据，
        // 更加一般的系数是ITU HDTV标准 0.2125, 0.7154, 0.0721以及用于CRT显示器非线性色彩的0.299, 0.587, 0.114）。
        lum = 255 - ( 0.2125 * r + 0.7154 * g + 0.0721 * b);
        lum = (lum - 125) / 10 + 50;
        // 转换为x,y,z存入
        data.push([i % width, height - Math.floor(i / width), lum]);
      }

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
          max: 100
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
                  const red = imgData.data[i * 4];
                  const green = imgData.data[i * 4 + 1];
                  const blue = imgData.data[i * 4 + 2];
                  return 'rgb(' + [red, green, blue].join(',') + ')';
              }
          },
          data: data
      }]
      };
      // this.myChart.setOption(this.option); // 刷新数据
    };
  }
}
