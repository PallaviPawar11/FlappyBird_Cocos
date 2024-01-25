import {
  _decorator,
  Component,
  Node,
  Vec3,
  screen,
  find,
  UITransform,
} from 'cc'
import { GameCtrl } from './GameCtrl'
const { ccclass, property } = _decorator

const random = (min, max) => {
  return Math.random() * (max - min) + min
}

@ccclass('Pipesss')
export class Pipesss extends Component {
  @property({
    type: Node,
  })
  public topPipe: Node

  @property({
    type: Node,
  })
  public bottomPipe: Node

  public tempStartLocationUP: Vec3 = new Vec3(0, 0, 0)
  public tempStartLocationDown: Vec3 = new Vec3(0, 0, 0)
  public scene = screen.windowSize

  public game
  public pipeSpeed: number

  public tempSpeed: number

  isPass: boolean
  onLoad() {
    this.game = find('GameCtrl').getComponent('GameCtrl')
    console.log('Game Ctrl')
    this.pipeSpeed = this.game.pipeSpeed
    this.initPos()
    this.isPass = false
  }

  initPos() {
    this.tempStartLocationUP.x =
      this.topPipe.getComponent(UITransform).width + this.scene.width

    console.log('temp location UP x' + this.tempStartLocationUP.x)
    this.tempStartLocationDown.x =
      this.topPipe.getComponent(UITransform).width + this.scene.width

    console.log('temp location Down x' + this.tempStartLocationDown.x)

    let gap = random(90, 100)
    console.log('gap' + gap)
    let topHeight = random(0, 450)
    console.log('top Height ' + topHeight)

    this.tempStartLocationUP.y = topHeight
    this.tempStartLocationDown.y = topHeight - gap * 10

    console.log('temp location UP y' + this.tempStartLocationUP.y)
    console.log('temp location down y' + this.tempStartLocationDown.y)
    this.bottomPipe.setPosition(
      this.tempStartLocationDown.x,
      this.tempStartLocationDown.y,
    )
    this.topPipe.setPosition(
      this.tempStartLocationUP.x,
      this.tempStartLocationUP.y,
    )
  }

  update(dt: number) {
    this.tempSpeed = this.pipeSpeed * dt
    this.tempStartLocationDown = this.bottomPipe.position
    this.tempStartLocationUP = this.topPipe.position

    this.tempStartLocationDown.x -= this.tempSpeed
    this.tempStartLocationUP.x -= this.tempSpeed

    this.bottomPipe.setPosition(this.tempStartLocationDown)
    this.topPipe.setPosition(this.tempStartLocationUP)

    if (this.isPass == false && this.topPipe.position.x <= 0) {
      this.isPass = true
      this.game.passPipeee()
    }
    if (this.topPipe.position.x < 0 - this.scene.width) {
      this.game.createPipe()
      this.destroy()
      console.log('topPeipe entered')
    }
  }
}
