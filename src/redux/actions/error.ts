import {action} from "typesafe-actions";
import {Constants, errorActionsT} from "../types/error";
import {ThunkAction} from "redux-thunk";
import {rootStateT} from "../store/store";

export const addError = (text: string) => action(Constants.ADD_ERROR, {text: text});
export const removeError = () => action(Constants.REMOVE_ERROR);

type ThunkActionT = ThunkAction<void, rootStateT, unknown, errorActionsT>;

export const addNewError = (text: string): ThunkActionT => (dispatch) => {
    dispatch(addError(text));
    setTimeout(() => {
        dispatch(removeError());
    }, 5000);
};