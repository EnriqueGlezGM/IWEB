import React from 'react';
export default class Image extends React.Component {

    componentDidMount() {
        // Get the modal
        let modal = document.getElementById('myModal');

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        let img = document.getElementById('myImg');
        let modalImg = document.getElementById("img01");
        let captionText = document.getElementById("caption");
        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }

        // Get the <span> element that closes the modal
        let span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }
    }


    render() {

        if (this.props.att !== null) {
            return (
                <div>
                    <img id = "myImg"
                         src={this.props.att.url}
                         alt={this.props.question}
                         title={'Foto del quiz'}
                    />

                    <div id="myModal" className="modal">
                        <span className="close">&times;</span>
                        <img className="modal-content"
                             alt=''
                             id="img01"/>
                            <div id="caption"></div>
                    </div>

                </div>
            );
        }
        else{
            return (
                <div>
                    <img src='https://siempreenmedio.files.wordpress.com/2014/04/no_disponible.jpg'
                         alt={this.props.question}
                         id="myImg"
                    />

                    <div id="myModal" className="modal" alt=''>
                        <span className="close">&times;</span>
                        <img className="modal-content" id="img01" alt=''/>
                        <div id="caption"></div>
                    </div>

                </div>
            );
        }
    }
}
