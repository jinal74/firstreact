import React, { Component } from 'react';

class State extends Component {
    constructor (props) {
        super(props);
        this.state = {
            myState : 'Gujarat'
        }
        console.log("1 constructor")
    }

    componentDidMount = () => {
        console.log("3 componentDidMount")
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.myState !== this.state.myState) {
            console.log("4 componentDidUpdate")
        }
    }

    componentWillUnmount = () => {
        console.log("5 componentWillUnmount")
    }

    render() {
        console.log("2 reander")
        return (
            <div>
                <h2>{this.state.myState} is my state.</h2>
                <button onClick={() => this.setState({myState : 'Rajasthan'})}>Change</button>
                <button onClick={() => this.setState({myState : 'Gujarat'})}>Refresh</button>
            </div>
        );
    }
}

export default State;