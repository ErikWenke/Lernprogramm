// model component of the user interface

import { getElementByIdPlus } from "./getElementByIdPlus.js";

export class Model {
  constructor() {
    this.quiz = [];
    this.current_quest = 0;
    this.quiz_length = 1;
  }

  setPresenter(p) {
    this.p = p;
  }

  // TODO: load from Database on HTW Dresden
  //https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
  async get_quiz(i) {
    this.progess = 0;
    this.current_quest = 0;
    const response = await fetch(`data/quizes.json?nocache=${Date.now()}`); // INFO: nocache only for development
    const quizes = await response.json();
    console.log("Available quizzes:", Object.keys(quizes));
    switch (i) {
      case "mathe":
      case "noten":
      case "quotes":
        this.quiz = quizes[i];
        this.quiz_length = this.quiz.length;
        let e = getElementByIdPlus("stat_bar");
        e.max = this.quiz_length.toString();
        this.p.next_quest(this.quiz[0]);
        break;
      default:
        alert("This quiz is not implemented yet");
        break;
    }
  }

  get_quest() {
    if (this.current_quest < this.quiz_length - 1) {
      this.current_quest++;
      this.p.next_quest(this.quiz[this.current_quest]);
    } else {
      this.p.quiz_finished();
    }
  }
}
