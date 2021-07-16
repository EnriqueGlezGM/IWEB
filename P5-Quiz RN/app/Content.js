import React from 'react';
import ImageApp from './ImageApp';
import Question from './Question';
import Author from "./Author";
import Answer from "./Answer";
import {StyleSheet, View, Text} from 'react-native';


export default class Content extends React.Component {

    render() {
        return (
            <View style={{
                display: this.props.isFinished ? 'none' : 'flex',
                flex: 1,
                margin: 10,
                paddingTop: 5,
                paddingBottom: 5,
                paddingRight: 5,
                paddingLeft: 5,
                flexDirection: 'column',
                alignItems: 'center',
                fontSize: 2
            }}>

                <Text style={styles.quizText}>
                    Question {this.props.currentQuiz+1}
                </Text>


                <ImageApp style={styles.imageContainer} att={this.props.quiz.attachment}/>


                <View style={styles.quizContainer}>
                    <Question question={this.props.quiz.question}/>
                    <Answer
                        userAnswer = {this.props.quiz.userAnswer}
                        onQuestionAnswer = {this.props.onQuestionAnswer}
                    />

                    <Author
                        author={this.props.quiz.author}
                        isFinished={this.props.finished}
                    />


                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        resizeMode: 'contain'

    },

    quizContainer: {
        flex: 5,
        marginTop: 5,
        minWidth: 250,
        padding: 5,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    quizText: {
        flex: 1,
        textAlign: 'center',
        marginTop: 5,
        fontSize: 20,
        fontWeight: 'bold',
        textShadowColor: 'white',
        textShadowRadius: 10,
        marginBottom: 5,
    }

});



