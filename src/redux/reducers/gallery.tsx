import {Constants, galleryActionsT, galleryStateT, imageT} from "../types/gallery";

const PARAMS = {
    BASE_HEIGHT: 180,
    MARGIN: 3
}


const initialState: galleryStateT = {
    width: 860,
    images: []
}



export const galleryReducer = (state: galleryStateT = initialState, action: galleryActionsT): galleryStateT => {
    switch (action.type){
        case Constants.CHANGE_WIDTH:
            console.log('width_change');
            return {
                ...state,
                width: action.payload.width,
                images: calcGallery(state.images, action.payload.width)
            }
        case Constants.CALC_GALLERY:
            console.log(state);
            return {
                ...state,
                images: calcGallery(state.images, action.payload.width)
            }
        case Constants.ADD_IMAGE_REQUEST:
            //placeholder
            return {
                ...state,
                images: calcGallery([...state.images, action.payload.image], state.width)
            }
        case Constants.ADD_MASSIVE_IMAGE_REQUEST:
            //placeholder
            return {
                ...state,
                images: calcGallery([...state.images, ...action.payload.images], state.width)
            }
        case Constants.ADD_IMAGE:
            let image = action.payload.image;
            let newImageForAdd = [...state.images];
            let index = newImageForAdd.findIndex((item) => item.id === image.id);

            if (index !== -1) {
                const shouldCalcG =  !(compareSizesPlaceholderAndImg(newImageForAdd[index], image));
                newImageForAdd[index] = image;
                if (shouldCalcG) {
                    calcGallery(newImageForAdd, state.width);
                }
            }
            return {
                ...state,
                images: newImageForAdd
            }

        case Constants.DELETE_IMAGE:
            return {
                ...state,
                images: calcGallery([...state.images].filter((item) => item.id !== action.payload.id), state.width)
            };
        default:
            return state;
    }
}

const compareSizesPlaceholderAndImg = (image: imageT, newImage: imageT) => {
    return image.width === newImage.width && image.height === newImage.height
        && image.sizeInGallery && newImage.sizeInGallery &&
        image.sizeInGallery.width === newImage.sizeInGallery.width &&
        image.sizeInGallery.height === newImage.sizeInGallery.height;
}



function calcGallery(images: Array<imageT>, width: number) {

    let sumRatio = 0;

    const newImages = [...images];
    let ratioArr = images.map((item: imageT) => item.width / item.height);

    let keys: Array<[number, number]> = [];

    let baseHeight = PARAMS.BASE_HEIGHT;
    let margin = PARAMS.MARGIN;
    let prevHRow = 0;

    for (let i=0; i<ratioArr.length; i++) {
        let ratio = ratioArr[i];
        keys.push([i, ratio]);
        sumRatio += ratio;

        let hRow = Math.round((width - (keys.length - 1) * margin) / sumRatio);

        if (hRow > baseHeight) {
            prevHRow = hRow;
        } else {

            /*
            *   Compare Two Heights Of Row : 1 - less than baseH, 2 - more than baseH
            *   Take closest one
            *  */
            if (Math.abs(hRow - baseHeight) > Math.abs(prevHRow - baseHeight)) {
                console.log(prevHRow);
                hRow = prevHRow;
                i--;
                keys.pop();
            } else {
                console.log(hRow);
            }

            let sumW = 0;
            keys.forEach(([key, ratio], keyIndex) => {
                let picW = 0;
                let marginRight = margin;
                if (keyIndex === keys.length - 1) {
                    picW = width - sumW - (keys.length - 1) * margin;
                    marginRight = 0;
                } else {
                    picW = Math.round(hRow * ratio);
                    sumW += picW;
                }

                console.log(key + '->' + hRow);

                 newImages[key].sizeInGallery = {
                     height: hRow,
                     width: picW,
                     marginRight: marginRight,
                     marginTop: margin
                 };
            });
            sumRatio = 0;
            keys = [];
            prevHRow = 0;
        }


    }

    //LastRow and not Stretch
    if (sumRatio > 0) {
        keys.forEach(([key, ratio]) => {
            let picW = Math.round(baseHeight * ratio)

            newImages[key].sizeInGallery = {
                height: baseHeight,
                width: picW,
                marginRight: margin,
                marginTop: margin
            };
        });
    }

    return newImages;
}

