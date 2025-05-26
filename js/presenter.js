export class Presenter {
  constructor() {}

  setViewModel(v, m) {
    this.v = v;
    this.m = m;
  }

  start_quiz(i) {
    this.m.get_quiz(i);
    this.v.reset_stat();
  }

  next_quest(i) {
    this.v.display_quest(i);
  }

  check_answer(answer) {
    if (answer === "button_a") {
      this.v.update_stat(true);
      this.m.get_quest();
    } else {
      this.v.update_stat(false);
    }
  }

  quiz_finished() {
    this.v.quiz_done();
  }
}
