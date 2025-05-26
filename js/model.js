// model component of the user interface

import { getElementByIdPlus } from "./getElementByIdPlus.js";

export class Model {
  constructor() {
    this.quiz = null;
    this.current_quest = 0;
    this.quiz_length = 1;
  }

  setPresenter(p) {
    this.p = p;
  }

  // TODO: load from Database on HTW Dresden
  //https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
  get_quiz(i) {
    let db;
    switch(i) {
      case "quotes":
        if()
    }
    this.progess = 0;
    this.quiz = [
      {
        a: "If you are lonely when you're alone, you are in bad company.",
        l: [
          "Jean-Paul Sartre",
          "Ayn Rand",
          "Marcus Aurelius",
          "Henry David Thoreau",
        ],
      },
      {
        a: "We live in the best of all possible worlds",
        l: [
          "Gottfried Wilhelm Leibniz",
          "Lao Tzu",
          "Ralph Waldo Emerson",
          "Marcus Aurelius",
        ],
      },
      {
        a: "Never doubt that a small group of thoughtful, committed, citizens can change the world. Indeed, it is the only thing that ever has.",
        l: ["Margaret Mead", "Aristotle", "Stephen Hawking", " Isaac Asimov"],
      },
      {
        a: "I would never die for my beliefs because I might be wrong",
        l: [
          "Bertrand Russell",
          "Albert Einstein",
          "Henri Frederic Amiel",
          "Abraham Joshua Heschel",
        ],
      },
    ];
    this.quiz_length = this.quiz.length;
    this.current_quest = 0;
    let e = getElementByIdPlus("stat_bar");
    e.max = this.quiz_length.toString();

    // send first quest
    this.p.next_quest(this.quiz[0]);
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
