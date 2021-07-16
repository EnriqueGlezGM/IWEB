import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Score extends React.Component {
    render() {
        return (
            <View style={{display: this.props.isFinished ? 'flex' : 'none'}}>
                <View style={styles.scoreContainer}>

                    <Text style={styles.scoreText}>Tu puntuación: {this.props.score}/10 {"\n"}</Text>

                    {this.props.quizzes.map((quiz,i)=>{
                        return <View className={'listContainer'} key={i}>
                            <Text style={{textAlign: 'center'}}>
                            Pregunta {i+1}: { quiz.question }{"\n"} { quiz.userAnswer === undefined ?
                            <Text style={{color: 'orange'}} >Sin responder</Text>
                            : quiz.answer.toLowerCase() === quiz.userAnswer.toLowerCase() ?
                                <Text style={{color: 'green'}} >CORRECTA</Text> :
                                <Text style={{color: 'red'}} >INCORRECTA</Text> }
                            </Text>
                        </View>

                    })}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scoreContainer: {
        padding: 25,
        margin: 8,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#0022ac',
        borderRadius: 20,
        alignContent: 'center',

    },
    scoreText: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});

