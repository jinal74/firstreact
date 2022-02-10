import * as actionTypes from '../actionTypes'

export const increment = () => ({
    type: actionTypes.INCREMENT_COUNTER,
    payload: 0
})

export const decrement = () => ({
    type: actionTypes.DECREMENT_COUNTER,
    payload: 0
})