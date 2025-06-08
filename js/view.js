import { shuffle } from "./shuffle.js";
import { getElementByIdPlus } from "./getElementByIdPlus.js";

export class View {
  constructor() {
    this.setEventHandlers();
  }

  setPresenter(p) {
    this.p = p;
  }

  setEventHandlers() {
    const obsConf = { characterData: true };
    const answer_buttons = ["button_a", "button_b", "button_c", "button_d"];
    const quizes = ["quotes", "mathe", "noten"];
    const question = getElementByIdPlus("question");

    // select quiz
    quizes.forEach((id) => {
      var q = getElementByIdPlus(id);
      q.addEventListener("change", () => this.p.start_quiz(id));
    });

    // click answer button
    answer_buttons.forEach((id) => {
      var b = getElementByIdPlus(id);
      b.addEventListener("click", () => this.p.check_answer(id));
    });

    // render math with KaTeX
    const katexOpt = {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: true },
      ],
    };
    const render_math = () => {
      mathObs.disconnect();
      ["button_a", "button_b", "button_c", "button_d", "question"].forEach(
        (id) => {
          renderMathInElement(getElementByIdPlus(id), katexOpt);
        },
      );
      mathObs.observe(question, obsConf);
    };
    const mathObs = new MutationObserver(render_math);
    mathObs.observe(question, obsConf);

    // render engraved music with EasyScore / VexFlow
    const vexFlowOpt = { renderer: { elementId: "question" } };
    const render_music = () => {
      vexFlowObs.disconnect();
      if (getElementByIdPlus("noten").checked) {
        /*
        var vf = new Vex.Flow.Factory(vexFlowOpt);
        var score = vf.EasyScore();
        var system = vf.System();
        system
          .addStave({
            voices: [score.notes(question.innerHTML)],
          })
          .addClef("treble");
        vf.draw();
        */
        alert("Oberserver in Note");
      }
      vexFlowObs.observe(question, obsConf);
    };
    const vexFlowObs = new MutationObserver(render_music);
    vexFlowObs.observe(question, obsConf);
  }

  display_quest(quest) {
    // Question
    let question = getElementByIdPlus("question");
    question.innerHTML = quest.a;

    // Answers
    let display_order = shuffle([1, 2, 3, 4]);
    ["button_a", "button_b", "button_c", "button_d"].forEach((id) => {
      let button = getElementByIdPlus(id);
      switch (id) {
        case "button_a":
          button.innerHTML = quest.l[0];
          button.style.order = display_order[0];
          break;
        case "button_b":
          button.innerHTML = quest.l[1];
          button.style.order = display_order[1];
          break;
        case "button_c":
          button.innerHTML = quest.l[2];
          button.style.order = display_order[2];
          break;
        case "button_d":
          button.innerHTML = quest.l[3];
          button.style.order = display_order[3];
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
    let stat_bar = getElementByIdPlus("stat_bar");
    stat_bar.value = "0";
    stat_bar.max = "0";
    let wrong = getElementByIdPlus("wrong");
    wrong.innerHTML = "0";
  }

  quiz_done() {
    getElementByIdPlus("question").innerHTML =
      "Nice, you have finished this quiz.";
    ["button_a", "button_b", "button_c", "button_d"].forEach((id) => {
      getElementByIdPlus(id).innerHTML = "Try another quiz";
    });
  }
}
