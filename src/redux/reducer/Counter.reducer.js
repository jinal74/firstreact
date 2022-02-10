import * as ActionTypes from '../actionTypes'

const initialValue = {
    c: 0
}

const counterReducer = (state=initialValue, action) => {
    switch (action.type) {
        case ActionTypes.INCREMENT_COUNTER:
            return {
                ...state,
                c: state.c+1
            }
        case ActionTypes.DECREMENT_COUNTER:
            return {
                ...state,
                c: state.c-1
            }
        default:
            return state
    }

}

export default counterReducer;