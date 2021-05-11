import {addImage, deleteImage, addImageRequest, addMassiveImageRequest, changeWidth, calcGallery} from '../actions/gallery';
import {ActionType} from "typesafe-actions";

export type galleryActionsT = ActionType<typeof addImage | typeof deleteImage | typeof addImageRequest | typeof addMassiveImageRequest | typeof changeWidth | typeof calcGallery>;

type imageJsonT = {
    url: string,
    width: number,
    height: number,
}

export type imageT = {
    id: string,
    url: string,
    width: number,
    height: number,
    sizeInGallery?: {width: number, height: number, marginRight: number, marginTop: number},
    isLoading: boolean
}

export type galleryStateT = {
    width: number,
    images: Array<imageT>
}

export enum Constants {
    ADD_IMAGE_REQUEST = 'ADD_IMAGE_REQUEST',
    ADD_MASSIVE_IMAGE_REQUEST = 'ADD_MASSIVE_IMAGE_REQUEST',
    ADD_IMAGE = 'ADD_IMAGE',
    DELETE_IMAGE = 'DELETE_IMAGE',
    CALC_GALLERY = 'CALC_GALLERY',
    CHANGE_WIDTH = 'CHANGE_WIDTH'
}

export type jsonFormatT = {
    galleryImages: Array<imageJsonT>
}