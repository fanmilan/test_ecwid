import './Error.scss';

import {useSelector} from "react-redux";
import {rootStateT} from "../../redux/store/store";
import {errorT} from "../../redux/types/error";


export const Error = () => {
    const error = useSelector((state: rootStateT)=>state.error.error);

    return (error.length > 0) ? <div className={'error'}>
            <h3 className="error__title">Произошла ошибка</h3>
            <ul className={'error__list'}>
                {
                    error.map((item, index) => <ErrorItem key={index} item={item}/>)
                }
            </ul>
        </div> : null;
}

type errorItemP = {
    item: errorT
}

const ErrorItem = ({item} : errorItemP) => {
    return <li className={'error__item'}>{item.text}</li>
}