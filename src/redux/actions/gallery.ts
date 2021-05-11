import {Constants, galleryActionsT, imageT, jsonFormatT} from "../types/gallery";
import { action } from 'typesafe-actions';
import {addNewError} from "./error";
import uniqid from 'uniqid';

import { ThunkAction } from 'redux-thunk'
import {rootStateT} from "../store/store";



export const changeWidth = (width: number) => action(Constants.CHANGE_WIDTH, {width: width});
export const calcGallery = (width: number) => action(Constants.CALC_GALLERY, {width: width});
export const addImage = (image: imageT) => action(Constants.ADD_IMAGE, {image});
export const deleteImage = (id: string) => action(Constants.DELETE_IMAGE, {id});
export const addImageRequest = (image: imageT) => action(Constants.ADD_IMAGE_REQUEST, {image});
export const addMassiveImageRequest = (images: Array<imageT>) => action(Constants.ADD_MASSIVE_IMAGE_REQUEST, {images});


type ThunkActionT = ThunkAction<void, rootStateT, unknown, galleryActionsT>;


const addImageFromLink = (image_url: string, width:number = 300, height:number = 300): ThunkActionT  => (dispatch) => {
   // const image_id = state.gallery.images.reduce((max: number, item: imageT) => (item.id > max) ? item.id : max, 0) + 1;
    const newImage = {
        id: uniqid(),
        url: image_url,
        isLoading: true,
        width: width,
        height: height
    }

    dispatch(addImageRequest(newImage));

    dispatch(waitImageLoad(newImage));
}


const waitImageLoad = (image: imageT) : ThunkActionT => (dispatch) => {
    const newImage = new Image();
    newImage.src = image.url;
    newImage.onload = () => {
        dispatch(addImage({...image, height: newImage.height, width: newImage.width, isLoading: false}))
    }
}

const addImageFromJson = (result: jsonFormatT): ThunkActionT => (dispatch) => {
    if (result.galleryImages) {
        const images = result.galleryImages.map((item)=> ({...item, id: uniqid(), isLoading:true}));

        dispatch(addMassiveImageRequest(images));

        images.forEach((item) => {
            dispatch(waitImageLoad(item));
        });
    } else {
        dispatch(addNewError('Некорректный формат JSON.'));
    }
}


const uploadImageFromJSON = (json_link: string): ThunkActionT => (dispatch) => {
    fetch(json_link)
        .then((res) => {
            if (!res.ok) throw new Error('not OK');
            return res.json();
        }).then((result: jsonFormatT) => {
            dispatch(addImageFromJson(result));
        }).catch((error) => {
            dispatch(addNewError(`Ошибка получения файла. ${error}`));
        });
}

export const uploadFromLink = (url: string): ThunkActionT => (dispatch) => {
    if (url.match(/\.(jpeg|jpg|gif|png)$/) !== null) {
        dispatch(addImageFromLink(url));
    } else if (url.match(/\.(json)$/) !== null) {
        dispatch(uploadImageFromJSON(url))
    } else {
        dispatch(addNewError('Недопустимый формат файла. Допустимые форматы: jpg, json, gif, png.'));
    }
}

export const uploadImageFromLocale = (files: FileList): ThunkActionT => (dispatch) => {
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









