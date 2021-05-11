import './InputUrl.scss';

import React from "react";

type inputTextP = {
    name: string,
    placeholder?: string
}

export const InputUrl = React.forwardRef(({name, placeholder}: inputTextP, ref: any) => <input type={'text'} className={'input input_text'} name={name} placeholder={placeholder} ref={ref}/>);