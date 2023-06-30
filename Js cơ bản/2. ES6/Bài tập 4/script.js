class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
  walk() {
    console.log(`${this._name} is walking`);
  }
}
class Programmer extends Person {
  constructor(name) {
    super(name);
    this._progamLanguage = "";
  }
  get progamLanguage() {
    return this._progamLanguage;
  }
  set progamLanguage(language) {
    this._progamLanguage = language;
  }
  writeCode() {
    console.log(`${this._name} is writing code ${this._progamLanguage}.`);
  }
}

const programmer = new Programmer("Hai Dao");
programmer.name = "Hai Dao";
programmer.progamLanguage = "Reactjs";

console.log(programmer.name);
programmer.walk();
console.log(programmer.progamLanguage);
programmer.writeCode();
