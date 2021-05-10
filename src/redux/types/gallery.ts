import * as actions from '../actions/gallery';
import {ActionType} from "typesafe-actions";

export type galleryActionsT = ActionType<typeof actions>;

type imageJsonT = {
    url: string,
    width: number,
    height: number,
}

export type imageT = {
    id: number,
    url: string,
    width: number,
    height: number,
    sizeInGallery?: {width: number, height: number, marginRight: number},
    isLoading: boolean
}

export type galleryStateT = {
    width: number,
    images: Array<imageT>
}

export enum Constants {
    ADD_IMAGE_REQUEST = 'ADD_IMAGE_REQUEST',
    ADD_IMAGE = 'ADD_IMAGE',
    DELETE_IMAGE = 'DELETE_IMAGE',
    CALC_GALLERY = 'CALC_GALLERY',
    CHANGE_WIDTH = 'CHANGE_WIDTH'
}

export type jsonFormatT = {
    galleryImages: Array<imageJsonT>
}