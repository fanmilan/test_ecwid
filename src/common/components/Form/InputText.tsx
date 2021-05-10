import React from "react";

type inputTextP = {
    name: string,
    placeholder?: string
}

export const InputText = React.forwardRef(({name, placeholder}: inputTextP, ref: any) => <input type={'url'} className={'input input_text'} name={name} placeholder={placeholder} ref={ref}/>);