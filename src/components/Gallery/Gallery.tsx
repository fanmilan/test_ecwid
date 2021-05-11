import './Gallery.scss';

import {useEffect, useRef} from "react";
import {UploadField} from "../UploadField/UploadField";
import {useDispatch, useSelector} from "react-redux";
import {changeWidth} from "../../redux/actions/gallery";
import {GalleryItem} from "../GalleryItem/GalleryItem";
import {rootStateT} from "../../redux/store/store";
import {imageT} from "../../redux/types/gallery";


export const Gallery = () => {

    const galleryRef = useRef<HTMLDivElement>(null);

    const {images} = useSelector((state: rootStateT) => {
        return state.gallery;
    });

    const dispatch = useDispatch();

    useEffect(() => {
        const changeWidthListener = () => {
            changeWidthAction();
        }
        changeWidthAction();
        window.addEventListener('resize', changeWidthListener);

        return () => {
            window.removeEventListener('resize', changeWidthListener);
        }
    }, [dispatch]);



    const changeWidthAction = ()=> {
        let el = galleryRef.current;
        if (el) {
            const width = el.clientWidth;
            dispatch(changeWidth(width));
        }
    }


    return <>
        <UploadField />
        <div className={'gallery'} ref={galleryRef}>
            {
                (images.length) ? (images.map((item: imageT) => <GalleryItem key={item.id} item={item}/>)) : <div className={'gallery__empty'}>Галерея пуста</div>
            }
        </div>
    </>;
}

