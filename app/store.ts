import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const currentStepAtom = atom(0);
export const hideButtonAtom = atom(false);
export const hasFinishedProfilingAtom = atom(false);
export const formAnswersAtom = atomWithStorage("formAnswers", {
  cards: {
    webform_id: "cards",
    answers: [] as number[],
  },
  selects: {
    webform_id: "selects",
    answers: [] as number[],
  },
  range: {
    webform_id: "range",
    answers: 0,
  },
});
