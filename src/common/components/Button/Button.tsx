import './Button.scss';
import { MouseEvent } from 'react';

type buttonT = {
    className?: string,
    onClick?: () => void,
    name: string
}

export const Button = ({className, onClick, name} : buttonT) => {

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (onClick) onClick();
    }

    return <button className={'btn '+ (className ? className : '')} onClick={handleClick}>{name}</button>
}