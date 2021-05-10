import './Gallery.scss';
import {useEffect, useRef, useState} from "react";
import {UploadField} from "../UploadField/UploadField";
import {DragAndDrop} from "../DragAndDrop/DragAndDrop";
import {useDispatch, useSelector} from "react-redux";
import {calcGallery, changeWidth, deleteImage} from "../../redux/actions/gallery";
import {GalleryItem} from "../GalleryItem/GalleryItem";
import {rootStateT} from "../../redux/store/store";


type imageT = {
    url: string,
    width: number,
    height: number
}


export const Gallery = () => {

    const galleryRef = useRef<HTMLDivElement>(null);

    const {images} = useSelector((state: rootStateT) => {
        return state.gallery;
    });

    const dispatch = useDispatch();


    function listener() {
        changeWidthAction();
    }

    useEffect(() => {
        changeWidthAction();
        window.addEventListener('resize', listener);

        return () => {
            window.removeEventListener('resize', listener);
        }
    }, []);



    const changeWidthAction = ()=> {
        let el = galleryRef.current;
        if (el) {
            const width = el.clientWidth;
            console.log(width);
            dispatch(changeWidth(width));
        }

    }



    return <>
        <UploadField />
        <div className={'gallery'} ref={galleryRef}>
            {
                images.map((item: imageT, index: number) => <GalleryItem key={index} item={item} index={index}/>)
            }
        </div>
    </>;
}

