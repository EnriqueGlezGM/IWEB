import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default class Answer extends React.Component {
    render() {
        return (
            <View>
                <TextInput
                    style={styles.answerUser}
                    autoFocus={true}
                    title={'Escriba aqui su respuesta'}
                    placeholder={"Respuesta..."}
                    id={"answerUser"}
                    value={this.props.userAnswer || ''}
                    onChangeText={ text =>{
                        this.props.onQuestionAnswer(text);
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    answerUser: {
        fontSize: 20,
        color: 'gray',
        backgroundColor: 'white',
        padding: 15,
        alignSelf: 'center',
        width: 200,
        height: 50,
        borderRadius: 10,
        marginBottom: 30,
        borderWidth: 1,
        borderColor: '#0022ac'
    }
});

