import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import feriadosListReducer from './reducers/feriadosListReducer';
import feriadoReducer from './reducers/feriadoReducer';

const storeReducer = combineReducers({
    
    feriadosListReducer,
    feriadoReducer
});

const store  = createStore (storeReducer, applyMiddleware(thunk));

export  default store;
