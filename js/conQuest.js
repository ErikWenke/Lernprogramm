// A CONverter from the webquiz engine QUESTions to the "internal questions" (right answer is no longer in the first spot)
export function conQuest(web_quest) {
  return { a: web_quest["text"], l: web_quest["options"] };
}
