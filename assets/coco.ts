import {
  _decorator,
  Component,
  Node,
  systemEvent,
  SystemEventType,
  EventMouse,
} from 'cc'
const { ccclass, property } = _decorator

@ccclass('coco')
export class coco extends Component {
  public startJump = false
  public currentJump = 0
  start() {
    console.log('Label clicked')
    systemEvent.on(SystemEventType.MOUSE_UP, this.onMouseUp, this)
  }

  onMouseUp(event: EventMouse) {
    if (event.getLabel() == 0) {
      this.jumpByStep(0)
    } else if (event.getLabel() == 1) {
      this.jumpByStep(1)
    }
  }

  jumpByStep(step: number) {
    console.log('Label clicked' + step)
  }

  update(deltaTime: number) {
    console.log('Label clicked')
    /*if (this.startJump) {
      this.currentJump += deltaTime
    }*/
  }
}
