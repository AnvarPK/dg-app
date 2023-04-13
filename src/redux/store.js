import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { PAGE_DATA } from '../app-const';
import dataReducer from './reducers/dataReducer';

// Configure redux store here
const store = createStore(
    combineReducers({
        [PAGE_DATA]: dataReducer,
    }),
    applyMiddleware(thunk),
)


export default store;