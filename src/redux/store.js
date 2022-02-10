import { createStore } from 'redux';
import rootReducer from './reducer'; 

const configureStore = () => {
    let store = createStore(
        rootReducer
    )
    return store;
}

export default configureStore;