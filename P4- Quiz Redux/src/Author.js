import React from 'react';
export default class Author extends React.Component {
    render() {

        return (
            <div className={"authorContainer"} style={{display: this.props.isFinished ? 'none' : 'flex'}}>

                {this.props.author !== null ?
                    (
                        <div>

                            <p className={"authorName"}>
                                Created by {(this.props.author.username !== null) ?
                                this.props.author.username :
                                this.props.author.profileName }
                            </p>

                            <img title={'Foto del autor'}
                                 src={this.props.author.photo.url !== null ?
                                 this.props.author.photo.url :
                                 'https://www.movilzona.es/app/uploads/2019/05/Foto-de-Perfil-en-WhatsApp.jpg'}
                                 alt = ''
                            />

                        </div>
                    ) :
                    (
                        <div>
                            <p className={"authorName"}>No hay información del autor</p>
                        </div>
                    )

                }

            </div>

        );

    }
}
