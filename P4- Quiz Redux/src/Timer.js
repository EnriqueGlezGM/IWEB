import React from 'react';
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
            <div className={"timerContainer"}>
                {this.props.timer <= 0 ?
                    (<div className={"noTime"}> <p>GAME OVER</p></div>)
                    :
                    (<div className={"timerNum"}>
                        <p style={{color: (seconds <=15 && minutes === 0)  ? 'red' : 'white' }}>

                            0{minutes} : {(seconds < 10) ? '0' : ''}{seconds}
                        </p>
                    </div>)
                }

            </div>
        );
    }
}

