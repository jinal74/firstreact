import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/action/counter.action';

function Counter(props) {

    const dispatch = useDispatch();
    let counter = useSelector(state => state.counter)

    const handleIncrement = () => {
        dispatch(increment())
    }

    const handleDecrement = () => {
        dispatch(decrement())
    }

    return (
        <div>
            <button onClick={() => handleDecrement()}>
                DECREMENT(-)    
            </button> 
            <p>Bank Balance {counter.c}</p>
            <button onClick={() => handleIncrement()}>
                INCREMENT(+)    
            </button> 
        </div>
    );
}

export default Counter;