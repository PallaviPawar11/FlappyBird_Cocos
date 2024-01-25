import {
  _decorator,
  CCInteger,
  Collider2D,
  Component,
  Contact2DType,
  director,
  EventKeyboard,
  input,
  Input,
  IPhysics2DContact,
  KeyCode,
  Node,
} from 'cc'
import { Ground } from './Ground'
import { Result } from './Result'
import { Bird } from './Bird'
import { PipeePoolll } from './PipeePoolll'
const { ccclass, property } = _decorator

@ccclass('GameCtrl')
export class GameCtrl extends Component {
  @property({
    type: Component,
    tooltip: 'This.is a ground',
  })
  public ground: Ground

  @property({
    type: CCInteger,
  })
  public speed: number = 300

  @property({
    type: CCInteger,
  })
  public pipeSpeed: number = 200

  @property({
    type: Result,
  })
  public results: Result

  @property({
    type: Bird,
  })
  public Bird: Bird

  @property({
    type: PipeePoolll,
  })
  public pipeQueue: PipeePoolll

  public isOver: boolean
  onLoad() {
    this.initListener()
    this.results.resetScore()
    this.isOver = true
    director.pause()
  }

  initListener() {
    //input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this)
    this.node.on(Node.EventType.TOUCH_START, () => {
      if (this.isOver == true) {
        this.resetGame()
        this.Bird.resetBird()
        this.startGame()
      }

      if (this.isOver == false) {
        this.Bird.fly()
      }
    })
  }

  onKeyDown(event: EventKeyboard) {
    switch (event.keyCode) {
      case KeyCode.KEY_A:
        this.gameOver()
        break
      case KeyCode.KEY_P:
        this.results.addScore()
        break
      case KeyCode.KEY_Q:
        this.resetGame()
        this.Bird.resetBird()
        break
    }
  }
  startGame() {
    this.results.hideResults()
    director.resume()
  }
  gameOver() {
    this.results.showResults()
    this.isOver = true
    director.pause()
  }

  resetGame() {
    this.results.resetScore()
    this.pipeQueue.resetPool()
    this.isOver = false
    this.startGame()
  }
  passPipeee() {
    this.results.addScore()
  }

  createPipe() {
    this.pipeQueue.addPool()
    console.log('added')
  }
  contactGroundPipe() {
    let collider = this.Bird.getComponent(Collider2D)
    if (collider) {
      collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this)
    }
  }
  onBeginContact(
    selfCollider: Collider2D,
    otherCollider: Collider2D,
    contact: IPhysics2DContact | null,
  ) {
    this.Bird.hitSomething = true
  }
  birdStuck() {
    this.contactGroundPipe()
    if (this.Bird.hitSomething == true) {
      this.gameOver()
    }
  }

  update() {
    if (this.isOver == false) {
      this.birdStuck()
    }
  }
}
