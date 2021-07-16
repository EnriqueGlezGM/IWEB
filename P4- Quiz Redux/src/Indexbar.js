import React from 'react';
import Shortcut from "./Shortcut";
export default class Actionbar extends React.Component {

    render() {

        return (
            <div className={"indexBarContainer"} >

                <div className={"buttons"} style={{display: this.props.isFinished ? 'none' : 'flex'}}>

                    {this.props.quizzes.map((quiz,i)=>{
                        return <Shortcut
                            onChangeQuiz={this.props.onChangeQuiz}
                            num={i+1}
                            currentQuiz = {this.props.currentQuiz}
                            quizzes={this.props.quizzes}
                            icon ={(quiz.userAnswer === undefined || quiz.userAnswer === '') ? '' : 'task_alt'}

                        />

                    })}

                </div>

            </div>


        );
    }
}
