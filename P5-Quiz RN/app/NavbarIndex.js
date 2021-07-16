import React from 'react';
import {  View, Text, StyleSheet  } from 'react-native';


export default class NavbarIndex extends React.Component {
    render() {
        return (
            <View style={styles.navBar}>

                <Text style={styles.navBarText}>
                    {this.props.title}
                </Text>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    navBar: {
        paddingTop: 7,
        paddingBottom: 7,
        alignItems: 'center',
        display: 'flex',
        justifyContent:	'space-around',
        flexDirection: 'row',
        backgroundColor: '#0022ac'
    },

    navBarText: {
        color: 'white',
        margin: 10,
        fontSize: 20,
    },

});


