"use strict";

// Setup User Interface
document.getElementById("question").innerHTML = "Javascript wird ausgeführt";
let m = new Model();
let p = new Presenter();
let v = new View();

// View
class View {
  constructor() {
    this.setEventHandlers();
  }
  setEventHandlers() {
    document
      .getElementById("button_a")
      .addEventListener("click", this.answer_button().bind(this));
  }
  answer_button() {
    document.getElementById("question").innerHTML = "Cannabis";
    alert("Hallo");
  }
}

// Model
class Model {
  constructor() {}
}

// Presenter
class Presenter {
  constructor() {}
}
