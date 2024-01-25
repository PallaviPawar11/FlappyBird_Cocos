import { _decorator, Component, Label, Node } from 'cc'
const { ccclass, property } = _decorator

import { Class } from './Class'
@ccclass('displayResponse')
export class displayResponse extends Component {
  @property({ type: Label })
  public nameValue: Label

  @property({ type: Label })
  public DepartmentValue: Label

  @property({ type: Label })
  public AgeValue: Label

  @property({ type: Label })
  public CityValue: Label

  @property({
    type: Array,
  })
  public Objects: []

  public classdata: Class

  onClickSubmit() {
    var myObject = {
      key1: this.nameValue.string,
      key2: this.DepartmentValue.string,
      key3: this.AgeValue.string,
      key4: this.CityValue.string,
    }

    // this.Objects = [{}]
    //this.Objects.push({ key1: this.nameValue.string })
    console.log(this.nameValue.string)
    console.log(this.DepartmentValue.string)
    console.log(this.AgeValue.string)
    console.log(this.CityValue.string)

    var jsonString = JSON.stringify(myObject)

    // Log the resulting JSON string
    console.log(jsonString)

    var jsonObject = JSON.parse(jsonString)
    console.log(jsonObject)

    console.log(this.Objects.pop())
    //this.nameValue.string == ''
  }

  startUp() {
    /* this.classdata.name = this.nameValue.string
    this.classdata.department = this.DepartmentValue.string
    this.classdata.age = this.AgeValue.string
    this.classdata.city = this.CityValue.string
    // console.log(this.classdata.name)*/
    //var jsondata = JSON.parse
  }
  protected update(dt: number): void {
    this.startUp()
  }
}
