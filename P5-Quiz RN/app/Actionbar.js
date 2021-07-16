import React from 'react';
import ButtonApp from "./ButtonApp";
import {View} from 'react-native';

export default class Actionbar extends React.Component {
    render() {
        return (
            <View className={"actionBarContainer"} >
                <View key={'replay'} className={"buttons"} id="replay" style={{display: this.props.isFinished ? 'flex' : 'none'}}>
                    <ButtonApp
                        click={this.props.resetFunction}
                        icon={'replay'}
                    />
                </View>
                <View key={'buttons'}
                      style={{
                          display: this.props.isFinished ? 'none' : 'flex',
                          justifyContent: 'center',
                          flexDirection: 'row',
                          alignContent: 'center'
                      }}>


                    <ButtonApp click={this.props.resetFunction}
                               icon={'replay'}
                    />
                    <ButtonApp icon={"arrow-back"}
                               shutdown={this.props.Quiz0}
                               click={() => {
                                   this.props.onChangeQuiz(this.props.currentQuiz-1);
                               }}
                    />
                    <ButtonApp
                        icon={'arrow-forward'}
                        shutdown={this.props.Quiz9}
                        click={() => {
                            this.props.onChangeQuiz(this.props.currentQuiz+1);
                        }}
                    />
                    <ButtonApp click={this.props.submitFunction}
                               icon={"done"}
                               shutdown={false}
                    />
                    <ButtonApp click={this.props.saveFunction}
                               icon={"save"}
                    />
                    <ButtonApp click={this.props.loadFunction}
                               icon={"archive"}
                    />
                    <ButtonApp click={this.props.removeFunction}
                               icon={"delete"}
                    />
                </View>

            </View>

        );
    }
}