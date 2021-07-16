import React from 'react';
import Timer from "./Timer";

export default class Navbar extends React.Component {
    render() {
        return (
            <div className={"navBar"}>
                <p>{this.props.title}</p>
                <Timer timer={this.props.timer} />
            </div>
        );
    }
}
