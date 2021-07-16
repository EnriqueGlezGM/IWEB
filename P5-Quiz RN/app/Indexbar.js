import React from 'react';
import Shortcut from "./Shortcut";
import {View, StyleSheet} from 'react-native';

export default class Actionbar extends React.Component {

    render() {

        return (
            <View className={"indexBarContainer"} style={{display: this.props.isFinished ? 'none' : 'flex'}}>

                <View style={styles.buttons} >

                    {this.props.quizzes.map((quiz,i)=>{
                        return <Shortcut
                            onChangeQuiz={this.props.onChangeQuiz}
                            num={i+1}
                            currentQuiz = {this.props.currentQuiz}
                            quizzes={this.props.quizzes}
                        />

                    })}

                </View>

            </View>


        );
    }
}


const styles = StyleSheet.create({
    buttons: {
        flex: 1,
        marginTop: 10,
        marginLeft: 8,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignContent: 'center',
        alignSelf: 'center'

    }

});

