import { applyMiddleware, combineReducers, createStore } from 'redux'
import dataReducer from './reducers/dataReducer';
import thunk from 'redux-thunk';

export const PAGE_DATA = 'PAGE_DATA';

// Configure redux store here
const store = createStore(
    combineReducers({
        [PAGE_DATA]: dataReducer
    }),
    applyMiddleware(thunk),
)


export default store;