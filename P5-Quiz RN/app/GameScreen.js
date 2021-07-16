import React, {Component} from 'react';
import {connect} from 'react-redux'
import {
    changeQuiz, initQuizzes, questionAnswer, submit, decrementTimer,
    endTimer, startTimer
} from "./redux/actions";
import AsyncStorage from '@react-native-community/async-storage';

import Game from './Game';
import Navbar from "./Navbar";

import {View, Image, Text, StyleSheet, TouchableHighlight, ImageBackground, ScrollView} from 'react-native';

class GameScreen extends Component {
    constructor(props) {
        super(props);
        this.quizzes = [];
        this.download = this.download.bind(this);
        this.submitFunction = this.submitFunction.bind(this);
        this.resetFunction = this.resetFunction.bind(this);
        this._saveData = this._saveData.bind(this);
        this._removeData = this._removeData.bind(this);
        this._loadData = this._loadData.bind(this);
    }

    download(quizzes) {
        fetch("https://core.dit.upm.es/api/quizzes/random10wa?token=e3cb568696724be8d58a")
            .then((resp) => {
                return resp.json();
            })
            .then((json) => {
                json.map((q) => {
                    if (q.question) {
                        quizzes.push(q);
                    }
                    return 0;
                });
                this.props.dispatch(initQuizzes(quizzes));
            })
    }

    componentDidMount() {
        this.download(this.quizzes);
        this.timer = setInterval(() => {
            if (this.props.timer > 0) {
                this.props.dispatch(decrementTimer());
            } else {
                this.submitFunction();
            }
        }, 1000);

    }


    resetFunction() {
        this.quizzes = [];
        this.download(this.quizzes);
        clearInterval(this.timer);
        this.props.dispatch(startTimer());
        this.timer = setInterval(() => {
            if (this.props.timer > 0) {
                this.props.dispatch(decrementTimer());
            } else {
                this.submitFunction();
            }
        }, 1000);
    }

    submitFunction() {
        this.props.dispatch(submit(this.props.quizzes));
        this.props.dispatch(endTimer());

    }

    async _saveData() {
        try {
            await AsyncStorage.setItem('@P5_2020_IWEB:quiz', JSON.stringify(this.props.quizzes));
            alert('Se han almacenado las preguntas con exito')
        } catch (error) {
            alert(error)
        }
    }

    async _removeData() {
        try {
            await AsyncStorage.removeItem('@P5_2020_IWEB:quiz');
            alert('Se han eliminado las preguntas almacenadas con exito')
        } catch (error) {
            alert(error)
        }
    }

    async _loadData() {
        try {
            let value = await AsyncStorage.getItem('@P5_2020_IWEB:quiz');
            if (value == null) {
                alert('No hay preguntas almacenadas aun');
            }else {
                this.props.dispatch(initQuizzes(JSON.parse(value)));
                clearInterval(this.timer);
                this.props.dispatch(startTimer());
                this.timer = setInterval(() => {
                    if (this.props.timer > 0) {
                        this.props.dispatch(decrementTimer());
                    } else {
                        this.submitFunction();
                    }
                }, 1000);
                alert('Se han cargado las preguntas almacenadas con exito')
            }
        } catch (error) {
            alert(error)
        }
    }

    render() {

        let currentQuiz = this.props.currentQuiz;

        if (this.props.quizzes.length > 0) {
            let Quiz9 = (currentQuiz === 9);
            let Quiz0 = (currentQuiz === 0);
            return (
                <ImageBackground
                    source={{uri:
                            "https://cutewallpaper.org/21/questions-wallpaper/Question-Mark-Wallpaper-Blue-Hd-Wallpapers-and-backgrounds-.jpg"}}
                    style={styles.image}
                >
                    <View style={{flex:1}}>
                        <View>
                            <Navbar title={"QUIZ 2020"} timer={this.props.timer}/>
                        </View>

                        <ScrollView>

                            <View>

                                <Game quizzes={this.props.quizzes}
                                      currentQuiz={this.props.currentQuiz}
                                      score={this.props.score}
                                      finished={this.props.finished}
                                      onQuestionAnswer={(answer) => {
                                          this.props.dispatch(questionAnswer(this.props.currentQuiz, answer))
                                      }
                                      }
                                      onChangeQuiz={(indexQuiz) => {
                                          this.props.dispatch(changeQuiz(indexQuiz))
                                      }
                                      }
                                      resetFunction={this.resetFunction}
                                      submitFunction={this.submitFunction}
                                      saveFunction={this._saveData}
                                      loadFunction={this._loadData}
                                      removeFunction={this._removeData}
                                      Quiz9={Quiz9}
                                      Quiz0={Quiz0}
                                />
                            </View>

                            <TouchableHighlight
                                onPress={this.props.functionBack}
                                style={styles.buttonsFormat}
                            >
                                <Text>BACK</Text>
                            </TouchableHighlight>

                        </ScrollView>

                    </View>
                </ImageBackground>
            );
        } else {
            return (
                <ImageBackground
                    source={{uri:
                            "https://cutewallpaper.org/21/questions-wallpaper/Question-Mark-Wallpaper-Blue-Hd-Wallpapers-and-backgrounds-.jpg"}}
                    style={styles.image}
                >
                    <View style={{flex: 1}}>

                        <Navbar title={"QUIZ 2020"} timer={this.props.timer} style={{flex: 1}}/>

                        <View style={styles.noQuizzes}>
                            <Text style={styles.loadingText}>
                                Cargando las preguntas...
                            </Text>

                            <Image source={require('../assets/loading.gif')} style={{width: 300, height: 300, alignSelf:'center'}} />

                        </View>


                    </View>
                </ImageBackground>

            );
        }

    }
}

function

mapStateToProps(state) {
    return {
        ...state
    };
}

export default connect(mapStateToProps)

(
    GameScreen
)
;

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    noQuizzes: {
        paddingTop: 20,
        flex: 1,
        color: 'black',
        fontSize: 2,
        fontWeight: 'bold',
        marginTop: 0
    },
    buttonsFormat: {
        padding: 10,
        margin: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#0022ac',
        alignItems: 'center',
        borderRadius: 10
    },
    loadingText: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 20,
        fontWeight: 'bold',
        textShadowColor: 'white',
        textShadowRadius: 10,
        marginBottom: 5,
    }
});



