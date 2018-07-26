import reduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import deviceIdReducer from './reducers/deviceIdReducer'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(deviceIdReducer);

export default store;