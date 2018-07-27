import reduxThunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import deviceIdReducer from './reducers/deviceIdReducer'
import testReducer from './reducers/testReducer'
// import logger from 'redux-logger';


const store = createStore(
    combineReducers({
        deviceIdReducer,
        testReducer,
    }),
    {},
    applyMiddleware(reduxThunk)
);
export default store;
