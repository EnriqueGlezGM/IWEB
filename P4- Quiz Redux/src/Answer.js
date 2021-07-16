import React from 'react';

export default class Answer extends React.Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.quiz.userAnswer || ''}
                       onChange={(e)=>{
                           this.props.onQuestionAnswer(e.target.value);
                       }}
                />
            </div>
        );
    }
}