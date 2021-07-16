import {combineReducers} from 'redux';
import {QUESTION_ANSWER, CHANGE_QUIZ, SUBMIT, INIT_QUIZZES, START_TIMER, DECREMENT_TIMER, END_TIMER} from "./actions";

function score(state = 0, action = {}) {
    switch(action.type){
        case SUBMIT:
            let score = 0;
            action.payload.quizzes.map((quiz) => {
                return score += (quiz.userAnswer === quiz.answer) ? 1 : 0;
            });
            return score;
        case INIT_QUIZZES:
            return 0;
        default:
            return state;
    }
}

function finished(state = false, action = {}) {
    switch(action.type) {
        case SUBMIT:
            return true;
        case INIT_QUIZZES:
            return false;
        default:
            return state;
    }
 }

function currentQuiz(state = 0, action = {}) {
    switch(action.type) {
        case CHANGE_QUIZ:
            if(action.payload.index < 0 || action.payload.index >= 10){
                return state;
            }

            return action.payload.index ;

        case INIT_QUIZZES:
            return 0;
        default:
            return state;
    }
}

function quizzes(state = [], action = {}) {
    switch(action.type) {
        case QUESTION_ANSWER:
            return state.map((quiz,i) => {
                return { ...quiz,
                        userAnswer: action.payload.index === i ? action.payload.answer : quiz.userAnswer
                }
            });
        case INIT_QUIZZES:
            return JSON.parse(JSON.stringify(action.payload.quizzes));
        default:
            return state;
    }
}

function timer(state = 120, action={}) {
    switch(action.type) {
        case START_TIMER:
            return 180;
        case DECREMENT_TIMER:
            return --state;
        case END_TIMER:
            return 0;
        default:
            return state;
    }
}
const GlobalState = (combineReducers({
    score,
    finished,
    currentQuiz,
    quizzes,
    timer
}));

export default GlobalState;
