import React from 'react';
import Image from './Image';
import Question from './Question';
import Author from "./Author";
export default class Content extends React.Component {

    componentDidMount(){

        document.getElementById("answerUser").addEventListener("keyup", function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                document.getElementById("enterButton").click();
            }
        });

    }

    //para que al pasar de pregunta se ubique el cursor en el input de dicha pregunta
    componentDidUpdate(){
        document.getElementById("answerUser").focus();
    }

    render() {
        return (
            <div className={"contentContainer"} style={{display: this.props.isFinished ? 'none' : 'flex'}}>

                <div className={"quizContainer"}>
                    <Question question={this.props.quiz.question}/>
                    <input
                        autoFocus={true}
                        title={'Escriba aqui su respuesta'}
                        placeholder={"Respuesta..."}
                        id={"answerUser"}
                        type={"text"} value={this.props.quiz.userAnswer || ''}
                        onChange={(e) => {
                            this.props.onQuestionAnswer(e.target.value);
                        }}
                    />

                    <button style={{display:  'none' }}
                            id="enterButton"
                            onClick ={(this.props.Quiz9) ?
                                (this.props.submitFunction)
                                :
                                (() => {this.props.onChangeQuiz(this.props.currentQuiz+1);})
                            }
                    >
                    </button>

                    <Author
                        author={this.props.quiz.author}
                        isFinished={this.props.finished}
                    />


                </div>

                <div className={"imageContainer"}>
                    <Image att={this.props.quiz.attachment}
                           question={this.props.quiz.question}
                    />
                </div>

            </div>
        );
    }
}
