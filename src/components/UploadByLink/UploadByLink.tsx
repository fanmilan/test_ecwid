import './UploadByLink.scss';

import {InputUrl} from "../../common/components/InputUrl/InputUrl";
import {Button} from "../../common/components/Button/Button";
import {useRef} from "react";
import {useDispatch} from "react-redux";
import {uploadFromLink} from "../../redux/actions/gallery";


export const UploadByLink = () => {
    const linkRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    const uploadFile = () => {
        if (linkRef.current) {
            let linkValue = linkRef.current.value.trim();
            if (linkValue) dispatch(uploadFromLink(linkValue));
            linkRef.current.value = '';
        }
    }

    return <div className={'upload-by-link'}>
            <InputUrl name={'link'} placeholder={'Загрузить по ссылке...'} ref={linkRef}/>
            <Button className={'btn_upload-link'} name={'Загрузить'} onClick={uploadFile}/>
    </div>
}