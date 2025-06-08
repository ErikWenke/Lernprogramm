// model component of the user interface

import { getElementByIdPlus } from "./getElementByIdPlus.js";
import { conQuest } from "./conQuest.js";

export class Model {
  constructor() {
    this.quiz = [];
    this.current_quest = 0;
    this.quiz_length = 1;
  }

  setPresenter(p) {
    this.p = p;
  }

  async get_quiz(i) {
    let e = getElementByIdPlus("stat_bar");
    this.current_quest = 0;
    switch (i) {
      case "bouldering":
        // TODO: this manual approach is bad
        this.current_quest = 2157;
        this.quiz_length = 2166;
        e.max = 10;
        const email = "erik@gmail.com";
        const pw = "erik_1234";
        const auth = window.btoa(`${email}:${pw}`); // encode
        const url =
          "https://idefix.informatik.htw-dresden.de:8888/api/quizzes/" +
          this.current_quest.toString();
        const resOpt = {
          method: "GET",
          headers: { Authorization: `Basic ${auth}` },
        };
        const res = await fetch(url, resOpt);
        const quest = await res.json();
        this.p.next_quest(conQuest(quest));
        break;
      case "mathe":
      case "noten":
      case "quotes":
        const response = await fetch(`data/quizes.json?nocache=${Date.now()}`); // INFO: nocache only for development
        const quizes = await response.json();
        this.quiz = quizes[i];
        this.quiz_length = this.quiz.length;
        e.max = this.quiz_length.toString();
        this.p.next_quest(this.quiz[0]);
        break;
      default:
        alert("This quiz is not implemented yet");
        break;
    }
  }

  async get_quest(rem) {
    if (this.current_quest < this.quiz_length - 1) {
      this.current_quest++;
      if (rem) {
        const email = "erik@gmail.com";
        const pw = "erik_1234";
        const auth = window.btoa(`${email}:${pw}`); // encode
        const url =
          "https://idefix.informatik.htw-dresden.de:8888/api/quizzes/" +
          this.current_quest.toString();
        const resOpt = {
          method: "GET",
          headers: { Authorization: `Basic ${auth}` },
        };
        const res = await fetch(url, resOpt);
        const quest = await res.json();
        this.p.next_quest(conQuest(quest));
      } else {
        this.p.next_quest(this.quiz[this.current_quest]);
      }
    } else {
      this.p.quiz_finished();
    }
  }

  async check_answer(a) {
    var field = 0;
    switch (a) {
      case "button_a":
        field = 0;
        break;
      case "button_b":
        field = 1;
        break;
      case "button_c":
        field = 2;
        break;
      case "button_d":
        field = 3;
        break;
      default:
        // TODO: Error Handling
        break;
    }
    // TODO: noch mal besser aufräumen
    const email = "erik@gmail.com";
    const pw = "erik_1234";
    const auth = window.btoa(`${email}:${pw}`); // encode
    const url =
      "https://idefix.informatik.htw-dresden.de:8888/api/quizzes/" +
      this.current_quest +
      "/solve";
    const resOpt = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify([field]),
    };
    const res = await fetch(url, resOpt);
    const solution = await res.json();
    if (solution.success) {
      return true;
    } else return false;
  }
}
