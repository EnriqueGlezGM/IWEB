import GlobalState from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import React from 'react';
import GameScreen from '../GameScreen';
import {View} from 'react-native';



export default class ReduxProvider extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            score: 0,
            finished: false,
            currentQuiz: 0,
            quizzes: [],
            timer: 180
        };
        this.store = this.configureStore();
    }

    render() {
        return (
            <Provider store={this.store}>
                    <View style={{height: '100%'}}>
                        <GameScreen
                            store={this.store}
                            functionBack={() => {
                                this.props.navigation.goBack()
                            }}

                        />
                    </View>
            </Provider>
        );
    }

    configureStore() {
        return createStore(GlobalState, this.initialState);
    }
}
