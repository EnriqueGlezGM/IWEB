import React from 'react';
import NavbarIndex from "./NavbarIndex";
import {TouchableHighlight, Text, View, ImageBackground, StyleSheet, Image} from 'react-native';

export default class IndexScreen extends React.Component {

    render() {
        return (
            <ImageBackground
                source={{
                    uri:
                        "https://cutewallpaper.org/21/questions-wallpaper/Question-Mark-Wallpaper-Blue-Hd-Wallpapers-and-backgrounds-.jpg"
                }}
                style={styles.image}
            >
                <View style={{flex: 1}}>

                    <View>
                        <NavbarIndex title={"QUIZ 2020"}/>
                    </View>

                    <View style={{margin: 30, justifyContent: 'center'}}>

                        <Image source={require('../assets/quiz.png')}
                               style={{width: 300, height: 300, resizeMode: "contain", alignSelf:'center'}} />

                        <TouchableHighlight
                            onPress={() =>
                                this.props.navigation.navigate('GameScreen')
                            }
                            style={styles.buttonsFormat}
                        >
                            <Text>PLAY</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </ImageBackground>

        );
    }
}
const styles = StyleSheet.create({

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    buttonsFormat: {
        padding: 10,
        margin: 2,
        display: 'flex',
        backgroundColor: 'white',
        borderWidth: 1,
        marginTop:20,
        borderColor: '#0022ac',
        alignItems:'center',
        borderRadius: 10
    }


});


