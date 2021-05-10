import {Constants, galleryActionsT, imageT, jsonFormatT} from "../types/gallery";
import { action } from 'typesafe-actions';
import {Dispatch} from "redux";
import {addNewError} from "./error";



export const changeWidth = (width: number) => action(Constants.CHANGE_WIDTH, {width: width});
export const calcGallery = (width: number) => action(Constants.CALC_GALLERY, {width: width});
export const addImage = (image: imageT) => action(Constants.ADD_IMAGE, {image});
export const deleteImage = (index: number) => action(Constants.DELETE_IMAGE, {index});



export const addImageFromLink = (image_url: string, width:number = 300, height:number = 300): any => (dispatch: Dispatch<galleryActionsT>, getState: any) => {
    const state = getState();
    const image_id = state.gallery.images.reduce((max: number, item: imageT) => (item.id > max) ? item.id : max, 0) + 1;
    // mb use index of array
    dispatch({
        type: Constants.ADD_IMAGE_REQUEST,
        payload: {
            id: image_id,
            url: image_url,
            isLoading: true,
            width: width,
            height: height
        }
    });
    /* ADD PLACEHOLDER IMAGE */
    const newImage = new Image();
    newImage.src = image_url;
    newImage.onload = () => {
        dispatch(addImage({id: image_id, url: image_url, height: newImage.height, width: newImage.width, isLoading: false}));
    };
}

export const addImageFromJson = (result: jsonFormatT) => (dispatch: any) => {
    if (result.galleryImages) {
        result.galleryImages.forEach((item) => {
            dispatch(addImageFromLink(item.url, item.width, item.height));
        });
    } else {
        dispatch(addNewError('Некорректный формат JSON.'));
    }
}


export const uploadImageFromJSON = (json_link: string): any => (dispatch: Dispatch<galleryActionsT>) => {
    fetch(json_link)
        .then((res: any) => {
            if (!res.ok) throw new Error('not OK');
            return res.json();
        }).then((result: jsonFormatT) => {
            dispatch(addImageFromJson(result));
        }).catch((error) => {
            dispatch(addNewError(`Ошибка получения файла. ${error}`));
        });
}

export const uploadFromLink = (url: string): any => (dispatch: Dispatch<galleryActionsT>) => {
    if (url.match(/\.(jpeg|jpg|gif|png)$/) !== null) {
        dispatch(addImageFromLink(url));
    } else if (url.match(/\.(json)$/) !== null) {
        dispatch(uploadImageFromJSON(url))
    } else {
        dispatch(addNewError('Недопустимый формат файла. Допустимые форматы: jpg, json, gif, png.'));
    }
}

export const uploadImageFromLocale = (files: FileList) => (dispatch: any) => {
    for (let i = 0; i < files.length; i++) {
        switch (files[i].type) {
            case 'image/jpeg':
            case 'image/gif':
            case 'image/png':
                dispatch(addImageFromLink(URL.createObjectURL(files[i])));
                break;
            case 'application/json':
                let reader = new FileReader();
                reader.onload = ( () => {
                        try {
                            let result = JSON.parse(reader.result as string);
                            dispatch(addImageFromJson(result));
                        } catch (e) {
                            dispatch(addNewError(`Ошибка чтения файла. ${e}`));
                        }
                });
                reader.readAsText(files[i]);

               // dispatch(addImageFromJSON(URL.createObjectURL(files[i])));
                break;
            default:
                dispatch(addNewError('Недопустимый формат файла. Допустимые форматы: jpg, json, gif, png.'));
                break;
        }
    }
}









