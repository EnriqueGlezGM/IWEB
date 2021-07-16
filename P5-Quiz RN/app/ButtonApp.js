import React from 'react';
import {TouchableHighlight, View, StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements'
export default class ButtonApp extends React.Component {
    render() {
        return (
            <TouchableHighlight
                className={'buttonsFormat'}
                disabled={this.props.shutdown}
                style={styles.buttonsFormat}
                onPress={this.props.click}
                title="Button"
            >
                <View>
                    <Icon
                        color= '#0022ac'
                        name={this.props.icon} />

                </View>

            </TouchableHighlight>
        );
    }
}
const styles = StyleSheet.create({
    buttonsFormat: {
        padding: 10,
        margin: 2,
        display: 'flex',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#0022ac',
        borderRadius: 10
    }
});
