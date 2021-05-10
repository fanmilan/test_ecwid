import {action} from "typesafe-actions";
import {Constants} from "../types/error";
import {Dispatch} from "redux";

export const addError = (text: string) => action(Constants.ADD_ERROR, {text: text});
export const removeError = () => action(Constants.REMOVE_ERROR);


export const addNewError = (text: string) => (dispatch: Dispatch) => {
    dispatch(addError(text));
    setTimeout(() => {
        dispatch(removeError());
    }, 5000);
};