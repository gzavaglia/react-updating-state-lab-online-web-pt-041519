// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component{

    constructor(){
        super();
        this.state = {
            timesClicked: 0
        }//end set def state
    } //end constructor

    handleClick = () => {
        this.setState(newState => ({
            timesClicked: newState.timesClicked + 1
        }))
    } // end handleclick
    render() {
        return(
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        )
    }//end render
} // end component

export default DigitalClicker;