import { shuffle } from "./shuffle.js";
import { getElementByIdPlus } from "./getElementByIdPlus.js";

const question = getElementByIdPlus("question");
const asw_buttons = ["button_a", "button_b", "button_c", "button_d"];
const quizzes = ["quotes", "mathe", "noten", "bouldering"]; // TODO: automate thourgh parsing DOM

export class View {
  constructor() {
    this.setEventHandlers();
  }

  setPresenter(p) {
    this.p = p;
  }

  setEventHandlers() {
    // selected a quiz
    quizzes.forEach((id) => {
      var q = getElementByIdPlus(id);
      q.addEventListener("change", () => this.p.start_quiz(id));
    });
    // clicked answer button
    asw_buttons.forEach((id) => {
      var b = getElementByIdPlus(id);
      b.addEventListener("click", () => this.p.check_answer(id));
    });
    // render math and music
    const obsConf = { characterData: true, childList: true, subtree: true };
    const katexOpt = {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: true },
      ],
    };
    const render = () => {
      Obs.disconnect();
      ["button_a", "button_b", "button_c", "button_d", "question"].forEach(
        (id) => {
          renderMathInElement(getElementByIdPlus(id), katexOpt);
          if (getElementByIdPlus("noten").checked && id === "question") {
            ABCJS.renderAbc(question, question.innerHTML);
          }
        },
      );
      Obs.observe(question, obsConf);
    };
    const Obs = new MutationObserver(render);
    Obs.observe(question, obsConf);
  }

  display_quest(q) {
    const order = shuffle([1, 2, 3, 4]);
    // display question
    question.innerHTML = q.a;
    // display answers
    asw_buttons.forEach((id) => {
      const b = getElementByIdPlus(id);
      switch (id) {
        case "button_a":
          b.innerHTML = q.l[0];
          b.style.order = order[0];
          break;
        case "button_b":
          b.innerHTML = q.l[1];
          b.style.order = order[1];
          break;
        case "button_c":
          b.innerHTML = q.l[2];
          b.style.order = order[2];
          break;
        case "button_d":
          b.innerHTML = q.l[3];
          b.style.order = order[3];
          break;
      }
    });
  }

  update_stat(truth_value) {
    if (truth_value) {
      let stat_bar = getElementByIdPlus("stat_bar");
      stat_bar.value = +stat_bar.value + 1;
    } else {
      let wrong = getElementByIdPlus("wrong");
      wrong.innerHTML = +wrong.innerHTML + 1;
    }
  }

  reset_stat() {
    const bar = getElementByIdPlus("stat_bar");
    bar.value = "0";
    bar.max = "0";
    const w = getElementByIdPlus("wrong");
    w.innerHTML = "0";
  }

  quiz_done() {
    question.innerHTML = "Nice, you have finished this quiz.";
    asw_buttons.forEach((id) => {
      getElementByIdPlus(id).innerHTML = "Try another quiz";
    });
  }
}
