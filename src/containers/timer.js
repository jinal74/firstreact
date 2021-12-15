import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time : new Date()
        }
        console.log("1 constructor");
    }
    
    componentDidMount = () => {
        this.state = setInterval(
            () => 
                this.setState({
                    time : new Date()
                }), 
            1000
        )
        console.log("3 componentDidMount");
    }

    componentDidUpdate = () => {
        console.log("4 componentDidUpdate");
    }

    componentWillUnmount = () => {
        console.log("5 componentWillUnmount");
    }

    render() {
        console.log("2 render");
        return (
            <div class="timer">
                <h1>{this.state.time.toLocaleTimeString()}</h1>
            </div>
        );
    }
}

export default Timer;