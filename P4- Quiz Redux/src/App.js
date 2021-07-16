import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import {
    changeQuiz, initQuizzes, questionAnswer, submit, decrementTimer,
    endTimer, startTimer
} from "./redux/actions";

import Game from './Game';
import Navbar from "./Navbar";

class App extends Component {
    constructor(props){
        super(props);
        this.quizzes = [];
        this.download = this.download.bind(this);
        this.submitFunction = this.submitFunction.bind(this);
        this.resetFunction = this.resetFunction.bind(this);
    }

    download(quizzes){
        fetch("https://core.dit.upm.es/api/quizzes/random10wa?token=e3cb568696724be8d58a")
            .then((resp) => {
                return resp.json();
            })
            .then((json) => {
                json.map((q) => {
                    if(q.question) {
                         quizzes.push(q);
                    }
                    return 0;
                });
                this.props.dispatch(initQuizzes(quizzes));
            })
    }

    componentDidMount(){
        this.download(this.quizzes);
        this.timer = setInterval(() => {
            if(this.props.timer > 0){
                this.props.dispatch(decrementTimer());
            } else {
                this.submitFunction();
            }
        }, 1000);

    }


    resetFunction(){
        this.quizzes = [];
        this.download(this.quizzes);
        clearInterval(this.timer);
        this.props.dispatch(startTimer());
        this.timer = setInterval(() => {
            if(this.props.timer > 0){
                this.props.dispatch(decrementTimer());
            } else {
                this.submitFunction();
            }
        }, 1000);
    }

    submitFunction(){
        this.props.dispatch(submit(this.props.quizzes));
        this.props.dispatch(endTimer());

    }

    render() {

        let currentQuiz = this.props.currentQuiz;

        if(this.props.quizzes.length > 0){
            let Quiz9 = (currentQuiz === 9);
            let Quiz0 = (currentQuiz === 0);
            return (
                <div className="App">
                    <Navbar title={"QUIZ 2020"} timer={this.props.timer}/>

                    <div className={"mainContainer"}>
                        <Game quizzes={this.props.quizzes}
                              currentQuiz = {this.props.currentQuiz}
                              score = {this.props.score}
                              finished = {this.props.finished}
                              onQuestionAnswer={(answer) => {
                                  this.props.dispatch(questionAnswer(this.props.currentQuiz, answer))}
                              }
                              onChangeQuiz={(indexQuiz) => {
                                  this.props.dispatch(changeQuiz(indexQuiz))}
                              }
                              resetFunction={this.resetFunction}
                              submitFunction = {this.submitFunction}
                              Quiz9 = {Quiz9}
                              Quiz0 = {Quiz0}


                        />

                    </div>

                </div>
            );
        }else{
            return (
                <div className="App">

                    <Navbar title={"QUIZ 2020"} timer={this.props.timer}/>
                    <div className={"noQuizzes"}> Cargando las preguntas... </div>
                    <img className={"App-logo"} src = 'https://assets.stickpng.com/thumbs/59300d633919fe0ee3614de3.png' alt={''} />

                </div>
            );
        }

    }
}

function mapStateToProps(state){
    return{
        ...state
    };
}

export default connect(mapStateToProps)(App);


