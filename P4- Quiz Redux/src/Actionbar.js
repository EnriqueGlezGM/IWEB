import React from 'react';
import Button from "./Button";
export default class Actionbar extends React.Component {

    render() {
        //https://www.w3schools.com/icons/
        //https://material.io/resources/icons/?icon=insert_emoticon&style=outline
        return (
            <div key={'actionBarContainer'} className={"actionBarContainer"} >

                <div key={'replay'} className={"buttons"} id="replay" style={{display: this.props.isFinished ? 'flex' : 'none'}}>
                    <Button click={this.props.resetFunction} Name={"VOLVER A JUGAR"} Icon={"replay"}/>
                </div>

                <div key={'buttons'} className={"buttons"} style={{display: this.props.isFinished ? 'none' : 'flex'}}>

                    <Button click={this.props.resetFunction}
                            Name={"RESET"}
                            Icon={"autorenew"}
                    />
                    <Button Name={"ANTERIOR"}
                            Icon={"undo"}
                            shutdown={this.props.Quiz0}
                            click={() => {
                                this.props.onChangeQuiz(this.props.currentQuiz-1);
                            }}
                    />
                    <Button Name={"SIGUIENTE"}
                            Icon={"redo"}
                            shutdown={this.props.Quiz9}
                            click={() => {
                                this.props.onChangeQuiz(this.props.currentQuiz+1);
                            }}
                    />
                    <Button click={this.props.submitFunction}
                            Name={"SUBMIT"}
                            Icon={"done"}
                            shutdown={false}
                    />

                </div>


            </div>


        );
    }
}
