type fieldP = {
    label?: string,
    className?: string,
    children?: React.ReactNode
}

export const Field = ({label, className, children} : fieldP) => {

    return <div className={'field'}>
        {
            label && <label className={'field__label'}>{label}</label>
        }
        {
            children
        }
    </div>
}