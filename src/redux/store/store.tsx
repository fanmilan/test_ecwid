import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers';
import thunk from 'redux-thunk'
import {galleryStateT} from "../types/gallery";
import {errorStateT} from "../types/error";

export type rootStateT = {
    gallery: galleryStateT,
    error: errorStateT
}

export const store = createStore<rootStateT, any, any, any>(rootReducer, applyMiddleware(thunk));