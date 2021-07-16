import React from 'react';
export default class Score extends React.Component {
    render() {
        return (
            <div className={"scoreContainer"} style={{display: this.props.isFinished ? 'flex' : 'none'}}>
                <div className={"numberScore"}>

                    <h2>Tu puntuación: {this.props.score}/10</h2>

                    {this.props.quizzes.map((quiz,i)=>{
                        return <div className={'listContainer'} key={i}>

                            Pregunta {i+1}: { quiz.question } -- { quiz.userAnswer === undefined ?
                            <span style={{color: 'orange' }} >Sin responder</span>
                            : quiz.answer.toLowerCase() === quiz.userAnswer.toLowerCase() ?
                                <span style={{color: 'green' }} >CORRECTA</span> :
                                <span style={{color: 'red' }} >INCORRECTA</span> }

                        </div>

                    })}
                </div>
            </div>
        );
    }
}
