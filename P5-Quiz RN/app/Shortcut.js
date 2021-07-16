import React from 'react';
import {TouchableHighlight, StyleSheet, Text, View} from 'react-native';

export default class Shortcut extends React.Component {

    render() {
        return (
            <TouchableHighlight
                style={(this.props.currentQuiz === this.props.num-1) ? (styles.inButton) : (styles.buttonsFormat)}
                title="Button"
                onPress={() => {
                    this.props.onChangeQuiz(this.props.num-1);
                }}>
                <View>
                    <Text style={{
                        color:(this.props.currentQuiz === this.props.num-1) ? 'white' : '#0022ac',
                        textAlign: 'center'
                    }}>
                        {this.props.num}
                    </Text>
                </View>

            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    buttonsFormat: {
        height: 35,
        width: 35,
        marginRight: 8,
        justifyContent: 'space-around',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#0022ac',
        borderRadius: 100
    },
    inButton: {
        height: 35,
        width: 35,
        marginRight: 8,
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#0022ac',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 100
    }
});

