import React, { Component } from 'react';
import Country from './Country';

class State extends Component {
    constructor (props) {
        super(props);
        this.state = {
            myState : 'Gujarat'
        }
    }
    render() {
        return (
            <div>
                <Country con="India" />
                <h2>{this.state.myState} is my state.</h2>
                <button onClick={() => this.setState({myState : 'Rajasthan'})}>Change</button>
                <button onClick={() => this.setState({myState : 'Gujarat'})}>Refresh</button>
            </div>
        );
    }
}

export default State;