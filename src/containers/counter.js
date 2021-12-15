import '../App.js';
import React, { Component } from 'react';

class Counter extends Component {
    constructor (props) {
        super(props);
        this.state = {
            counter : 0
        }
    }

    render() {
        return (
            <div class="counter">
                <h1>{this.state.counter}</h1>
                <div>
                <button onClick={() => this.setState({counter: this.state.counter - 1})} class="btn1">Decrement</button>
                <button onClick={() => this.setState({counter: this.state.counter + 1})} class="btn2">Increment</button>
                </div>
            </div>
        );
    }
}

export default Counter;