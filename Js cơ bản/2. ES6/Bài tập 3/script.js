class Information {
  constructor(name, des) {
    this._name = name;
    this._des = des;
  }
  static calculate(para = 1) {
    return para * 3;
  }
}
class Geometry extends Information {
  constructor(name, des, length) {
    super(name, des);
    this._length = length;
  }
  calculateGeometry(para) {
    return this._length * para;
  }
}
// Create object Geometry
const geometry = new Geometry("Geometry", "Description Geometry", 7);

console.log("Name: ", geometry._name);
console.log("Description: ", geometry._des);
console.log("Length: ", geometry._length);

console.log("Result caculate: ", Information.calculate());
console.log("Result calculateGeometry: ", geometry.calculateGeometry(3));
