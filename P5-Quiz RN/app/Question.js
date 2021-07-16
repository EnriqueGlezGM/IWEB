import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Question extends React.Component {
    render() {
        return (
            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>{this.props.question}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    questionContainer: {
        alignSelf: 'center',
        width: 300,
        marginBottom: 5,
    },
    questionText: {
        textAlign: 'center',
        width: 300,
        fontSize: 20,
        fontWeight: 'bold',
        textShadowColor: 'white',
        textShadowRadius: 10
    }
});