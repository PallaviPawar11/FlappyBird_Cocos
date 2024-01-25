import {
  _decorator,
  Component,
  EditBox,
  EventHandler,
  Label,
  CCInteger,
  Node,
  Vec3,
} from 'cc'
const { ccclass, property } = _decorator

@ccclass('Button')
export class Button extends Component {
  @property(EditBox) inputBox: EditBox = null
  @property(Label) resultimng: Label = null
  @property(Label) resultimng1: Label = null

  public number1: number
  public number2: number

  addChalLabel() {
    this.resultimng.string = this.inputBox.string

    var temp = this.resultimng.string
    temp.split

    this.resultimng1.string = temp[0]
    this.resultimng1.string = temp[1]
    this.resultimng1.string = temp[2]

    this.number1 = parseInt(temp[0])
    this.number2 = parseInt(temp[2])

    switch (temp[1]) {
      case '+':
        var result = this.number1 + this.number2
        this.resultimng1.string = result.toString()
        break

      case '*':
        var result = this.number1 * this.number2
        this.resultimng1.string = result.toString()
        break
      case '-':
        var result = this.number1 - this.number2
        this.resultimng1.string = result.toString()
        break
      case '/':
        var result = this.number1 / this.number2
        this.resultimng1.string = result.toString()
        break
    }
  }
}
