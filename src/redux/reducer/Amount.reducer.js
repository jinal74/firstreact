import * as ActionType from '../actionTypes';

let initialValue = {
    a: 0
}

const amountReducer = (state=initialValue, action) => {
    switch (action.type) {
        case ActionType.WITHDRAW_AMOUNT: 
            return {
                ...state,
                a: state.a-10
            }
        case ActionType.DEPOSITE_AMOUNT: 
            return {
                ...state,
                a: state.a+20
            }
        default: 
            return state;
    }
}

export default amountReducer;