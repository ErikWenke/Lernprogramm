"use strict";

// INFO: MODEL
class Model {
  constructor() {
    this.quiz = null;
    this.quest_id = 0;
  }

  setPresenter(p) {
    this.p = p;
  }

  get_solution(i) {
    // local
    //localStorage.setItem("quiz", JSON.stringify(quiz));
    //var solution = localStorage.getItem("quiz");

    // remote
    alert("Test: " + i);
  }

  start_quiz(i) {
    raw_quiz_collection = localStorage.getItem("quiz");
    if (raw_quiz_collection) {
      quiz_collection = JSON.parse(raw_quiz_collection);
      this.quiz = quiz_collection.i;
    } else {
      alert("You have to load the data first from a Web Server");
    }
  }
}

// INFO: VIEW
class View {
  constructor() {
    this.setEventHandlers();
  }

  setPresenter(p) {
    this.p = p;
  }

  setEventHandlers() {
    // answer a question
    ["button_a", "button_b", "button_c", "button_d"].forEach((i) => {
      document
        .getElementById(i)
        .addEventListener("click", () => this.answer(i));
    });
    ["quotes", "mathe", "noten"].forEach((i) => {
      document
        .getElementById(i)
        .addEventListener("change", () => this.select_quiz(i));
    });
  }

  answer(i) {
    this.p.check_answer(i);
  }

  select_quiz(i) {
    this.p.load_quiz(i);
  }
}

// INFO: Presenter
class Presenter {
  constructor() {}

  setViewModel(v, m) {
    this.v = v;
    this.m = m;
  }

  check_answer(i) {
    m.get_solution(i);
  }

  load_quiz(i) {
    this.m.start_quiz(i);
  }
}

// INFO: User Interface
let v = new View();
let m = new Model();
let p = new Presenter();

v.setPresenter(p);
m.setPresenter(p);
p.setViewModel(v, m);

document.getElementsByTagName("footer").item(0).innerHTML = "JS is running";
