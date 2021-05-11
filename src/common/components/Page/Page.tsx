import './Page.scss';
import {memo} from "react";


type pageP = {
    name: string,
    children: React.ReactNode
}

export const Page = ({name, children}: pageP) => {
    return <div className={'page'}>
        <div className="page__inside">
            <Header title={name}/>
            <Main>
                {children}
            </Main>
        </div>
    </div>
}


type headerProps = {
    title: string
}

const Header = memo(({title}: headerProps) => <header className={'header'}>
    <h1 className="header__title">{title}</h1>
</header>);


type mainP = {
    children: React.ReactNode
}

const Main = ({children} : mainP) => <div className={'main'}>
    {children}
</div>;
