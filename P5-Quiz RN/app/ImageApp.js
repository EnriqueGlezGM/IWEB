import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default class ImageApp extends React.Component {


    render() {

        if (this.props.att !== null) {
            return (
                <View>
                    <Image
                        style={styles.image}
                        resizeMode="contain"
                        id="myImg"
                        source={{uri: this.props.att.url}}
                        title={'Foto del quiz'}
                    />

                </View>
            );
        } else {
            return (
                <View>
                    <Image
                        resizeMode="contain"
                        style={styles.image}
                        source={{uri: "https://siempreenmedio.files.wordpress.com/2014/04/no_disponible.jpg"}}
                        id="myImg"
                    />

                </View>
            );
        }
    }
}


const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        borderRadius: 10
    }
});

