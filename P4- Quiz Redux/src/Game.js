import React from 'react';
import Content from "./Content";
import Actionbar from "./Actionbar";
import Score from './Score'
import Indexbar from "./Indexbar";
export default class Game extends React.Component {
    render() {
        return (
            <div className={"gameContainer"}>

                <Indexbar
                    onChangeQuiz ={ this.props.onChangeQuiz}
                    isFinished={this.props.finished}
                    currentQuiz = {this.props.currentQuiz}
                    quizzes={this.props.quizzes}
                />

                <div className={"bigContainer"}>

                    <Content
                        onQuestionAnswer ={ this.props.onQuestionAnswer}
                        quiz={this.props.quizzes[this.props.currentQuiz]}
                        isFinished={this.props.finished}
                        currentQuiz = {this.props.currentQuiz}
                        onChangeQuiz ={ this.props.onChangeQuiz}
                        Quiz9 = {this.props.Quiz9}
                        submitFunction= {this.props.submitFunction}
                    />

                    <Score
                        score={this.props.score}
                        isFinished={this.props.finished}
                        quizzes={this.props.quizzes}
                    />

                </div>

                <Actionbar
                    currentQuiz = {this.props.currentQuiz}
                    onChangeQuiz ={ this.props.onChangeQuiz}
                    Quiz9 = {this.props.Quiz9}
                    Quiz0 = {this.props.Quiz0}
                    submitFunction= {this.props.submitFunction}
                    isFinished={this.props.finished}
                    resetFunction={this.props.resetFunction}
                />

            </div>
        );
    }
}
