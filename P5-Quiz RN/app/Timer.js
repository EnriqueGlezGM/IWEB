
import React from 'react';
import {  View, Text, } from 'react-native';

export default class Timer extends React.Component {

    render() {
        let seconds = this.props.timer;
        let minutes;
        if(seconds > 60){
            minutes = parseInt(seconds/60);
            seconds = seconds-(60*minutes);
        }else{
            minutes = 0;
        }

        return (
            <View>
                {this.props.timer <= 0 ?
                    (<View>
                        <Text style={{fontSize: 20, color: 'white' }}>
                            GAME OVER
                        </Text>
                    </View>)
                    :
                    (<View>
                        <Text style={{fontSize: 20, color: (seconds <=15 && minutes === 0)  ? 'red' : 'white' }}>

                            0{minutes} : {(seconds < 10) ? '0' : ''}{seconds}
                        </Text>
                    </View>)
                }

            </View>
        );
    }
}

