export const QUESTION_ANSWER = 'QUESTION_ANSWER';
export const SUBMIT = 'SUBMIT';
export const CHANGE_QUIZ = 'CHANGE_QUIZ';
export const INIT_QUIZZES = 'INIT_QUIZZES';
export const START_TIMER = 'START_TIMER';
export const DECREMENT_TIMER = 'DECREASE_TIMER';
export const END_TIMER = 'RESET_TIMER';



export function questionAnswer(index, answer) {
    return { type: QUESTION_ANSWER, payload: { index, answer } };
}

export function changeQuiz(index) {
    return { type: CHANGE_QUIZ, payload: { index } };
}

export function submit(quizzes) {
    return { type: SUBMIT, payload: { quizzes } };
}

export function initQuizzes(quizzes) {
    return { type: INIT_QUIZZES, payload: { quizzes } };
}

export function startTimer() {
    return { type: START_TIMER };
}

export function decrementTimer() {
    return { type: DECREMENT_TIMER };
}

export function endTimer() {
    return { type: END_TIMER };
}

