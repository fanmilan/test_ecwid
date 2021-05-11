import './GalleryItem.scss';

import {useDispatch} from "react-redux";
import {deleteImage} from "../../redux/actions/gallery";
import {Button} from "../../common/components/Button/Button";
import {imageT} from "../../redux/types/gallery";

type galleryItemT = {
    item: imageT
}

export const GalleryItem = ({item}: galleryItemT) => {

    const dispatch = useDispatch();

    if (!item.sizeInGallery) return null;

    return <article data-id={item.id} className={'gallery-item'} style={{height: item.sizeInGallery.height, width: item.sizeInGallery.width, marginRight: item.sizeInGallery.marginRight, marginTop: item.sizeInGallery.marginTop}}>
        {
            !item.isLoading &&
            <>
                <div className={'gallery-item__bar'}>
                    <Button name='✕' className={'btn_small btn_bar'} onClick={() => dispatch(deleteImage(item.id))} />
                </div>
                <img className='gallery-item__img' src={item.url} alt={'Изображение галереи'}/>
            </>
        }

    </article>
}