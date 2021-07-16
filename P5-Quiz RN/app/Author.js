import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

export default class Author extends React.Component {
    render() {

        return (
            <View style={{
                display: this.props.isFinished ? 'none' : 'flex',
            }}>

                {this.props.author !== null ?
                    (
                        <View style={styles.authorContainer}>

                            <Text style={styles.authorName}>

                                Created by {(this.props.author.username !== null) ?
                                this.props.author.username :
                                this.props.author.profileName }

                            </Text>

                            <Image
                                resizeMode="contain"
                                style={styles.authorImage}
                                title={'Foto del autor'}
                                source={{uri: this.props.author.photo.url !== null ?
                                        this.props.author.photo.url :
                                        'https://www.movilzona.es/app/uploads/2019/05/Foto-de-Perfil-en-WhatsApp.jpg'}}

                            />

                        </View>
                    ) :
                    (
                        <View style={styles.authorContainer}>
                            <Text style={styles.authorName}>No hay información del autor</Text>
                        </View>
                    )

                }

            </View>

        );

    }
}

const styles = StyleSheet.create({
    authorContainer: {
        padding: 10,
        display: 'flex',
        alignSelf: 'center',
        flexDirection: 'row',
        marginBottom: 2,
        backgroundColor: 'white',
        color: '#0022ac',
        borderWidth: 1,
        borderColor: '#0022ac',
        borderRadius: 10
    },

    authorName: {
        padding: 3,
        display: 'flex',
        alignSelf: 'center',
        fontSize: 15,
        color: '#0022ac'
    },

    authorImage: {
        marginLeft:5,
        width: 30,
        height: 30,
        justifyContent: 'center',
        borderRadius: 10,
        alignSelf: 'center',
    }

});
