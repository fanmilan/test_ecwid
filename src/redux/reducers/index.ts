import { combineReducers } from "redux";
import {galleryReducer} from "./gallery";
import {errorReducer} from "./error";




export const rootReducer = combineReducers({
    gallery: galleryReducer,
    error: errorReducer
})