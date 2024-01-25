import {
  _decorator,
  Canvas,
  Component,
  director,
  Input,
  input,
  Node,
  UITransform,
  Vec3,
} from 'cc'
import { GameCtrl } from './GameCtrl'
const { ccclass, property } = _decorator

@ccclass('Ground')
export class Ground extends Component {
  @property({
    type: Node,
    tooltip: 'Ground1',
  })
  public Ground1: Node

  @property({
    type: Node,
    tooltip: 'Ground2',
  })
  public Ground2: Node

  @property({
    type: Node,
    tooltip: 'Ground3',
  })
  public Ground3: Node

  public groundWidth1: number
  public groundWidth2: number
  public groundWidth3: number

  public tempStartLocation1 = new Vec3()
  public tempStartLocation2 = new Vec3()
  public tempStartLocation3 = new Vec3()

  public gameSpeed: number

  public gameCtrlSpeed = new GameCtrl()
  protected onLoad(): void {
    this.startUp()
  }

  startUp() {
    this.groundWidth1 = this.Ground1.getComponent(UITransform).width
    this.groundWidth2 = this.Ground1.getComponent(UITransform).width
    this.groundWidth3 = this.Ground1.getComponent(UITransform).width

    this.tempStartLocation1.x = 0
    this.tempStartLocation2.x = this.groundWidth1
    this.tempStartLocation3.x = this.groundWidth1 + this.groundWidth2

    this.Ground1.setPosition(this.tempStartLocation1)
    this.Ground2.setPosition(this.tempStartLocation2)
    this.Ground3.setPosition(this.tempStartLocation3)
  }
  onMouseDown() {}
  update(deltaTime: number) {
    this.gameSpeed = this.gameCtrlSpeed.speed
    this.tempStartLocation1 = this.Ground1.position
    this.tempStartLocation2 = this.Ground2.position
    this.tempStartLocation3 = this.Ground3.position

    this.tempStartLocation1.x -= this.gameSpeed * deltaTime
    this.tempStartLocation2.x -= this.gameSpeed * deltaTime
    this.tempStartLocation3.x -= this.gameSpeed * deltaTime

    const scene = director.getScene()
    const canvas = scene.getComponentInChildren(Canvas)

    if (this.tempStartLocation1.x <= 0 - this.groundWidth1) {
      this.tempStartLocation1.x = canvas.getComponent(UITransform).width
    }

    if (this.tempStartLocation2.x <= 0 - this.groundWidth2) {
      this.tempStartLocation2.x = canvas.getComponent(UITransform).width
    }

    if (this.tempStartLocation3.x <= 0 - this.groundWidth3) {
      this.tempStartLocation3.x = canvas.getComponent(UITransform).width
    }
    this.Ground1.setPosition(this.tempStartLocation1)
    this.Ground2.setPosition(this.tempStartLocation2)
    this.Ground3.setPosition(this.tempStartLocation3)
  }
}
