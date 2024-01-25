import {
  _decorator,
  Component,
  Node,
  Input,
  KeyCode,
  EventKeyboard,
  Vec2,
  CCInteger,
  Vec3,
  input,
  RigidBody2D,
} from 'cc'
import { DEBUG } from 'cc/env'
const { ccclass, property } = _decorator

@ccclass('BlueBird')
export class BlueBird extends Component {
  @property({
    type: Boolean,
  })
  public isMoving = false
  @property({
    type: CCInteger,
  })
  public moveSpeed: number = 500

  protected onLoad(): void {
    input.on(Input.EventType.KEY_DOWN, this.onkeyDown, this)
    input.on(Input.EventType.KEY_UP, this.onkeyUp, this)
  }
  initListerner() {}
  onkeyDown(event: EventKeyboard) {
    /* switch (event.keyCode) {
      case KeyCode.ARROW_DOWN:
        this.isMoving = true
        break
      case KeyCode.ARROW_UP:
        this.isMoving = true
        break
      case KeyCode.ARROW_RIGHT:
        this.isMoving = true
        break
    }*/
    if (event.keyCode == KeyCode.SPACE) {
      console.log(this.isMoving)
      if (!this.isMoving) {
        this.isMoving = true
        this.jump()
      }
    }
  }

  onkeyUp(event: EventKeyboard) {
    if (event.keyCode == KeyCode.SPACE) {
      this.isMoving = false
    }
  }
  jump() {
    const rigidBody = this.node.getComponent(RigidBody2D)
    rigidBody.linearVelocity = new Vec2(0, 0)
    rigidBody.applyLinearImpulse(
      new Vec2(0, 40),
      rigidBody.getWorldCenter(new Vec2(0, 2)),
      true,
    )
  }
  protected update(dt: number): void {
    if ((this.isMoving = true)) {
      /*const currentPosition = this.node.position
      console.log(currentPosition + 'currentPosition ')
      const newPosition = currentPosition.x * this.moveSpeed
      console.log(newPosition)
      this.node.setPosition(newPosition, currentPosition.y)
      console.log(' if')
      this.isMoving = false*/
    }

    /*if (KeyCode.SPACE) {
      this.node
        .getComponent(RigidBody2D)
        .applyForce(Vec2.UNIT_X, Vec2.UNIT_Y, true)
    }*/
  }
}
