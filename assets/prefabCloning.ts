import { _decorator, Component, instantiate, Node, Prefab, Vec3 } from 'cc'
const { ccclass, property } = _decorator

@ccclass('prefabCloning')
export class prefabCloning extends Component {
  @property({
    type: Prefab,
  })
  public lowerPipe: Prefab

  @property({
    type: Prefab,
  })
  public upperPipe: Prefab

  start() {
    this.clonePrefab()
  }
  clonePrefab() {
    const miny = -321.419
    const maxy = -530.219

    const minUppery = 319.29
    const maxUppery = 521.99

    const xposmin = -250
    const xposmax = 290.365
    for (let i = 0; i <= 7; i++) {
      const lowerPipeClone = instantiate(this.lowerPipe)
      const upperPipeClone = instantiate(this.upperPipe)

      this.node.addChild(lowerPipeClone)
      this.node.addChild(upperPipeClone)

      const yposforlowerPipe = Math.random() * (maxy - miny) + miny
      const yposforUpperPipe =
        Math.random() * (maxUppery - minUppery) + minUppery

      const xposforPipe = Math.random() * (xposmax - xposmin) + xposmin

      lowerPipeClone.setPosition(new Vec3(xposforPipe, yposforlowerPipe, 0))
      upperPipeClone.setPosition(new Vec3(xposforPipe, yposforUpperPipe, 0))
    }
  }
  update(deltaTime: number) {}
}
