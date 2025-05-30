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
    // select category
    ["quotes", "mathe", "noten"].forEach((id) => {
      let category = getElementByIdPlus(id);
      category.addEventListener("change", () => this.p.start_quiz(id));
    });

    // click answer button
    ["button_a", "button_b", "button_c", "button_d"].forEach((id) => {
      const answer_button = getElementByIdPlus(id);
      answer_button.addEventListener("click", () => this.p.check_answer(id));
    });

    // Auto Render Katex in Flash Cards
    const quest = getElementByIdPlus("question");
    const config = { subtree: true, characterData: true, childList: true };
    const renderKatex = () => {
      observer.disconnect();
      ["button_a", "button_b", "button_c", "button_d", "question"].forEach(
        (id) => {
          const katexElement = getElementByIdPlus(id);
          renderMathInElement(katexElement, {
            delimiters: [
              { left: "$$", right: "$$", display: true },
              { left: "$", right: "$", display: true },
            ],
          });
        },
      );
      observer.observe(quest, config);
    };

    const observer = new MutationObserver(renderKatex);
    observer.observe(quest, config);
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
