import { _decorator, Component, Label, labelAssembler, Node } from 'cc'
const { ccclass, property } = _decorator

@ccclass('Result')
export class Result extends Component {
  @property({
    type: Label,
  })
  public scoreLabel: Label

  @property({
    type: Label,
  })
  public topScore: Label

  @property({
    type: Label,
  })
  public resultEnd: Label

  maxScore: number = 0
  currentScore: number

  updateScore(num: number) {
    this.currentScore = num

    this.scoreLabel.string = '' + this.currentScore

    console.log(this.currentScore)
  }

  resetScore() {
    this.updateScore(0)
    this.hideResults()
    this.scoreLabel.string = '' + this.currentScore
  }

  addScore() {
    this.updateScore(this.currentScore + 1)
  }

  showResults() {
    this.maxScore = Math.max(this.maxScore, this.currentScore)
    this.topScore.string = 'High Score' + this.maxScore
    this.resultEnd.node.active = true
  }
  hideResults() {
    this.topScore.node.active = false
    this.resultEnd.node.active = false
  }
}
