import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deposite, withdraw } from '../redux/action/amount.action';

function Amount(props) {
    const dispatch = useDispatch()
    let amount = useSelector(state => state.amount) 

    const handleWithdraw = () => {
        if (amount.a > 0) {
            dispatch(withdraw())
        }
    }

    const handleDeposite = () => {
        dispatch(deposite())
    }

    return (
        <>
        <h5 className='text-center'>Bank balance : {amount.a}</h5>
        <div className='d-flex justify-content-center mt-4'>
            <button onClick={() => handleWithdraw()} className='me-2'>
                Withdraw(10$)
            </button>
            <button onClick={() => handleDeposite()}>
                Deposite(20$)
            </button>
        </div></>
    );
}

export default Amount;