import React from 'react';
import Content from "./Content";
import Actionbar from "./Actionbar";
import Score from './Score'
import Indexbar from "./Indexbar";
import {StyleSheet, View} from 'react-native';


export default class Game extends React.Component {
    render() {
        return (
                <View className={"gameContainer"} style={{flex: 1}}>
                    <View style={{flex: 1}}>
                        <Indexbar
                            onChangeQuiz={this.props.onChangeQuiz}
                            isFinished={this.props.finished}
                            currentQuiz={this.props.currentQuiz}
                            quizzes={this.props.quizzes}
                        />
                    </View>

                    <View style={{flex: 10, alignSelf: 'center'}}>
                        <Content
                            onQuestionAnswer={this.props.onQuestionAnswer}
                            quiz={this.props.quizzes[this.props.currentQuiz]}
                            isFinished={this.props.finished}
                            currentQuiz={this.props.currentQuiz}
                            onChangeQuiz={this.props.onChangeQuiz}
                            Quiz9={this.props.Quiz9}
                            submitFunction={this.props.submitFunction}
                        />
                        <Score
                            score={this.props.score}
                            isFinished={this.props.finished}
                            quizzes={this.props.quizzes}
                        />
                    </View>

                    <View style={{flex: 1}}>
                        <Actionbar
                            currentQuiz={this.props.currentQuiz}
                            onChangeQuiz={this.props.onChangeQuiz}
                            Quiz9={this.props.Quiz9}
                            Quiz0={this.props.Quiz0}
                            submitFunction={this.props.submitFunction}
                            isFinished={this.props.finished}
                            resetFunction={this.props.resetFunction}
                            saveFunction={this.props.saveFunction}
                            loadFunction={this.props.loadFunction}
                            removeFunction={this.props.removeFunction}
                        />
                    </View>

                </View>
        );
    }
}
const styles = StyleSheet.create({

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },

});
