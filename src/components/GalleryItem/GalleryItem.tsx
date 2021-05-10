import {useDispatch} from "react-redux";
import {deleteImage} from "../../redux/actions/gallery";
import {Button} from "../../common/components/Button/Button";

export const GalleryItem = ({item, height, index}: any) => {

    const dispatch = useDispatch();

    if (!item.sizeInGallery) return null;

    return <article data-id={item.id} className={'gallery-item'} style={{height: item.sizeInGallery.height, width: item.sizeInGallery.width, marginRight: item.sizeInGallery.marginRight, marginTop: 3}}>
        {
            !item.isLoading &&
            <>
                <div className={'gallery-item__bar'}>
                    <Button name='✕' className={'btn_small btn_bar'} onClick={() => dispatch(deleteImage(index))} />
                </div>
                <img className='gallery-item__img' src={item.url} alt={'image'}/>
            </>
        }

    </article>
}