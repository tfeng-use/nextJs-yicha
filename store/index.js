import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import {reducer as indexReducer} from './home/index'
import {reducer as idealReducer} from './cultureIdeal/index'
import {reducer as businessRuducer} from './business/index'

let reducers = combineReducers(
  {
    index: indexReducer,
    cultureIdeal: idealReducer,
    business: businessRuducer
  }
);

export function initializeStore () {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}