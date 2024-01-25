import {
  _decorator,
  Component,
  input,
  Input,
  KeyCode,
  Node,
  RigidBody2D,
  EventKeyboard,
  SystemEvent,
  systemEvent,
  Vec2,
  Collider,
  BoxCollider2D,
  Contact2DType,
  Collider2D,
  IPhysics2DContact,
  Vec3,
} from 'cc'
const { ccclass, property } = _decorator

@ccclass('objectForce')
export class objectForce extends Component {
  public forceMagnitude: number = 5
  @property({
    type: Boolean,
  })
  public hit: boolean = false
  start() {}

  protected onLoad(): void {
    this.initListener()

    console.log('entered')
  }

  initListener() {
    input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this)
    let collider = this.node.getComponent(Collider2D)
    if (collider) {
      collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this)
      console.log('collider hit')
    }
  }
  onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D) {
    console.log('onBeginContact')
    this.node.forward = new Vec3(0, 1, 0)
  }
  onKeyDown(event: EventKeyboard) {
    const speed = 5
    const forcedown = speed * this.forceMagnitude
    const forceUp = new Vec2(0, forcedown)
    const force = new Vec2(0, 500)

    if (event.keyCode == KeyCode.ARROW_UP) {
      this.node.getComponent(RigidBody2D).applyForce(forceUp, force, true)
      console.log('if stat')
    } else if (event.keyCode == KeyCode.ARROW_DOWN) {
      this.node
        .getComponent(RigidBody2D)
        .applyForce(new Vec2(0, -200), new Vec2(0, -1), true)
      console.log('else if')
    } else if (event.keyCode == KeyCode.ARROW_LEFT) {
      this.node
        .getComponent(RigidBody2D)
        .applyForce(new Vec2(0, -200), new Vec2(1, 0), true)
    } else if (event.keyCode == KeyCode.ARROW_RIGHT) {
      this.node
        .getComponent(RigidBody2D)
        .applyForce(new Vec2(0, -200), new Vec2(-1, 0), true)
    }

    /*if (KeyCode.ARROW_DOWN) {
      console.log('entered1')
      const force = new Vec2(0, 500)

      this.node.getComponent(RigidBody2D).applyForceToCenter(force, true)
    } else {
      console.log('not entered')
    }
    switch (event.keyCode) {
      case KeyCode.ARROW_DOWN:
        console.log('entered1')
        this.node.getComponent(RigidBody2D).applyForce(force, force, true)
        break

      case KeyCode.ARROW_UP:
        console.log('entered1')
        this.node.getComponent(RigidBody2D).applyForce(forceUp, force, true)
        break
    }
    
    */
  }
}
