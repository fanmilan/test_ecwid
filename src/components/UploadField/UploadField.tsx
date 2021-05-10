import './UploadField.scss';
import {DragAndDrop} from "../DragAndDrop/DragAndDrop";
import {UploadByLink} from "../UploadByLink/UploadByLink";
import {Error} from '../Error/Error';

export const UploadField = () => {

    return <div className={'upload-field'}>
        <UploadByLink />
        <div className={'split-with-or'}>ИЛИ</div>
        <DragAndDrop />
        <Error />
    </div>
}