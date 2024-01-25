import { _decorator, Component, Node } from 'cc'
const { ccclass, property } = _decorator

@ccclass('Class')
export class Class {
  name: string
  department: string
  age: string
  city: string

  constructor(
    nameee: string,
    departmentttt: string,
    ageeee: string,
    cityyy: string,
  ) {
    this.name = nameee
    this.department = departmentttt
    this.age = ageeee
    this.city = cityyy
  }
}
