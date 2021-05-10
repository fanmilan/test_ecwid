import {Constants, errorActionsT, errorStateT} from "../types/error";

const initialState: errorStateT = {
    error: []
}

export const errorReducer = (state: errorStateT = initialState, action: errorActionsT) => {
    switch (action.type){
        case Constants.ADD_ERROR:
            return {
                ...state,
                error: [...state.error, action.payload]
            }
        case Constants.REMOVE_ERROR:
            let errorWithRemove = [...state.error];
            errorWithRemove.shift();
            return {
                ...state,
                error: errorWithRemove
            }
        default:
            return state;
    }
}