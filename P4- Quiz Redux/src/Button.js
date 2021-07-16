import React from 'react';

export default class Button extends React.Component {

    render() {
        return (
            <button key={this.props.Name+'s'}
                    className={'buttonsFormat'}
                    disabled={this.props.shutdown}
                    style={{cursor: this.props.shutdown ? 'not-allowed' : 'pointer'}}
                    onClick={this.props.click}
            >
                <span key={this.props.Name}
                      className={"noNameHover"}>

                    {this.props.Name}

                </span>

                <span key={this.props.Icon}
                      className={"material-icons"}>

                    {this.props.Icon}

                </span>

            </button>
        );
    }
}
