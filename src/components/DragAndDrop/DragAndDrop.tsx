import './DragAndDrop.scss';
import {useEffect, useRef, useState} from "react";
import {uploadImageFromLocale} from "../../redux/actions/gallery";
import {useDispatch} from "react-redux";
import {Button} from "../../common/components/Button/Button";


export const DragAndDrop = () => {

    const [dragging, setDragging] = useState<boolean>(false);
    const dispatch = useDispatch();
    const dragNDropRef = useRef<HTMLDivElement>(null);
    const inputFileRef = useRef<HTMLInputElement>(null);

    const uploadFromLocal = (e: any) => {
        const files = e.target.files;
        if (files.length > 0) {
            dispatch(uploadImageFromLocale(e.target.files));
            e.target.value = null;
        }
    }

    let dragCounter = 0;

    const handleDragIn = (e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        dragCounter++;
        if (e.dataTransfer && e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            setDragging(true);
        }
    }

    const handleDragOut = (e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        dragCounter--;
        if (dragCounter === 0) setDragging(false);
    }

    const handleDrag = (e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
    }

    const handleDrop = (e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
        if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            dispatch(uploadImageFromLocale(e.dataTransfer.files))
            e.dataTransfer.clearData();
        }
        dragCounter = 0;
    }


    useEffect(() => {
        let dragNDropEl = dragNDropRef.current;
        if (dragNDropEl) {
            dragNDropEl.addEventListener('dragenter', handleDragIn);
            dragNDropEl.addEventListener('dragleave', handleDragOut);
            dragNDropEl.addEventListener('dragover', handleDrag);
            dragNDropEl.addEventListener('drop', handleDrop);
        }

        return () => {
            if (dragNDropEl) {
                dragNDropEl.removeEventListener('dragenter', handleDragIn);
                dragNDropEl.removeEventListener('dragleave', handleDragOut);
                dragNDropEl.removeEventListener('dragover', handleDrag);
                dragNDropEl.removeEventListener('drop', handleDrop);
            }
        }

    }, []);

    return <div className={'drag-and-drop' + ((dragging) ? ' drag-and-drop_active' : '')} ref={dragNDropRef}>
        <div className={'drag-and-drop__text'}>
            Перетащить сюда файлы
            <span className={'split-with-or'}>или</span>
            <div className={'upload-file-locale'}>
                <Button name={'Выбрать локально'} className={"btn_upload"}
                        onClick={() => inputFileRef.current && inputFileRef.current.click()}/>
                <input className={'file-input'} type={'file'} onChange={uploadFromLocal} ref={inputFileRef}/>
            </div>
        </div>
    </div>;
}

