import { _decorator, Component, instantiate, Node, NodePool, Prefab } from 'cc'
const { ccclass, property } = _decorator
import { Pipesss } from './Pipesss'

@ccclass('PipeePoolll')
export class PipeePoolll extends Component {
  @property({
    type: Prefab,
  })
  public prefabPipes = null

  @property({
    type: Node,
  })
  public PipePoolHome: Node

  public pool = new NodePool()
  public createPipe: Node = null

  initPool() {
    let initCount = 3
    for (let i = 0; i < initCount; i++) {
      this.createPipe = instantiate(this.prefabPipes)
      console.log('pipes cloned')
      if (i == 0) {
        this.PipePoolHome.addChild(this.createPipe)
      } else {
        this.pool.put(this.createPipe)
      }
    }
  }

  addPool() {
    if (this.pool.size() > 0) {
      this.createPipe = this.pool.get()
    } else {
      this.createPipe = instantiate(this.prefabPipes)
    }

    this.PipePoolHome.addChild(this.createPipe)
  }

  resetPool() {
    this.PipePoolHome.removeAllChildren()
    this.pool.clear()

    this.initPool()
  }
}
