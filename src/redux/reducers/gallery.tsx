import {Constants, galleryActionsT, galleryStateT, imageT} from "../types/gallery";




const initialState: galleryStateT = {
    width: 860,
    images: []
}



export const galleryReducer = (state: galleryStateT = initialState, action: galleryActionsT): galleryStateT => {
    switch (action.type){
        case Constants.CHANGE_WIDTH:
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
                images: calcGallery([...state.images, action.payload], state.width)
            }
        case Constants.ADD_IMAGE:
            let newImages2 = [...state.images];
            let index = newImages2.findIndex((item) => item.id === action.payload.image.id);
            console.log(action.payload.image);
            if (index !== -1) newImages2[index] = action.payload.image;
            return {
                ...state,
                images: calcGallery(newImages2, state.width)
            }

        case Constants.DELETE_IMAGE:
            console.log(state.images);
            let newImages = [...state.images];
            newImages.splice(action.payload.index, 1)
            return {
                ...state,
                images: calcGallery(newImages, state.width)
            };
        default:
            return state;
    }
}

function calcGallery(images: Array<imageT>, width: number) {
    let sumRatio = 0;

    const newImages = [...images];
    let ratioArr = images.map((item: imageT) => item.width / item.height);
    let keys: Array<[number, number]> = [];

    let baseHeight = 150;
    let maxHeight = 150 * 1.5;
    let margin = 3;

    ratioArr.forEach((ratio, index) => {
        keys.push([index, ratio]);
        sumRatio += ratio;
        let hRow = Math.round((width - (keys.length - 1) * margin) / sumRatio);

        if (hRow < maxHeight) {
            let sumW = 0;
            keys.forEach(([key, ratio], keyIndex) => {
                let picW = 0; let marginRight = margin;
                if (keyIndex === keys.length - 1) {
                    picW = width - sumW - (keys.length - 1) * margin;
                    marginRight = 0;
                } else {
                    picW = Math.round(hRow * ratio);
                    sumW += picW;
                }

                newImages[key].sizeInGallery = {
                    height: hRow,
                    width: picW,
                    marginRight: marginRight
                };
            });
            sumRatio = 0;
            keys = [];
        }
    });


    //LastRow
    if (sumRatio > 0) {
        keys.forEach(([key, ratio], keyIndex) => {
            let picW = Math.round(baseHeight * ratio)

            newImages[key].sizeInGallery = {
                height: baseHeight,
                width: picW,
                marginRight: margin,
            };
        });
    }

    return newImages;
}

