import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-three-cube',
  templateUrl: './three-cube.component.html',
  styleUrls: ['./three-cube.component.css']
})
export class ThreeCubeComponent implements OnInit {

  @ViewChild('container') elementRef: ElementRef;
  private container: HTMLElement;

  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;

  private cube: THREE.Mesh;
  constructor() { }

  ngOnInit() {
    this.container = this.elementRef.nativeElement;
    this.init();
  }

  init() {
    const screen = {
      width  : 400,
      height : 300
    },
    view = {
      angle  : 45,
      aspect : screen.width / screen.height,
      near   : 0.1,
      far    : 1000
    };

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(view.angle, view.aspect, view. near, view.far);
    this.renderer = new THREE.WebGLRenderer();

    this.scene.add(this.camera);
    this.scene.add(new THREE.AxesHelper(20)); // 版本提升之后修改

    this.camera.position.set(10, 10, 10);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    this.renderer.setSize(screen.width, screen.height);
    this.container.appendChild(this.renderer.domElement);


    const geometry = new THREE.BoxGeometry(5, 5, 5),
        material = new THREE.MeshBasicMaterial({ color : 0x536DFE, wireframe: true });

    this.cube = new THREE.Mesh( geometry, material );
    this.cube.position.set(-50, -50, -50);

    this.scene.add(this.cube);

    this.render();
  }

  render() {

    const self: ThreeCubeComponent = this;

    (function render() {
      requestAnimationFrame(render);
      self.renderer.render(self.scene, self.camera);

      self.animate();
    }());
  }

  animate() {
    this.cube.rotateX(0.1);
    this.cube.rotateY(0.1);
    this.cube.position.addScalar(0.2);

  }
}
