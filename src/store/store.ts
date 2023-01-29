import {applyMiddleware, createStore, legacy_createStore} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './reducers';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
