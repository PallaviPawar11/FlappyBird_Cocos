import { _decorator, Component, instantiate, Node, Vec2 } from 'cc'
const { ccclass, property } = _decorator

@ccclass('Pipe')
export class Pipe extends Component {
  @property({
    type: Node,
    tooltip: 'Top Pipe',
  })
  public topPipe: Node

  @property({
    type: Node,
    tooltip: 'Bottom Pipe',
  })
  public bottomPipe: Node
  start() {
    instantiate(this.topPipe)
    instantiate(this.bottomPipe)

    this.topPipe.setPosition(this.topPipe.position)
    this.bottomPipe.setPosition(this.bottomPipe.position)

    let upperPipePositionY = Math.random() * 600
    this.topPipe.setPosition(0, upperPipePositionY, 0)

    let lowerPipePositionY = Math.random() * -600
    this.bottomPipe.setPosition(0, lowerPipePositionY, 0)
  }
  update(deltaTime: number) {}
}
