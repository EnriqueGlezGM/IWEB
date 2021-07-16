import React from 'react';
export default class Button extends React.Component {

    render() {
        return (
            <button
                key={this.props.num}
                className={ (this.props.currentQuiz === this.props.num-1) ? 'inButton' : 'buttonsFormat'}
                onClick={() => {
                    this.props.onChangeQuiz(this.props.num-1);
                }}>

                <span style={{display: (this.props.icon === '') ? 'flex' : 'none'}}>
                    {this.props.num}
                </span>

                <span className={"material-icons"} style={{display: (this.props.icon === '') ? 'none' : 'flex'}}>
                    {this.props.icon}
                </span>

            </button>
        );
    }
}
