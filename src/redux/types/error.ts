import * as actions from '../actions/error';
import {ActionType} from "typesafe-actions";

export type errorActionsT = ActionType<typeof actions>;


export type errorT = {
    text: string
}

export type errorStateT = {
    error: Array<errorT>,
}

export enum Constants {
    ADD_ERROR = 'ADD_ERROR',
    REMOVE_ERROR = 'REMOVE_ERROR',
}
