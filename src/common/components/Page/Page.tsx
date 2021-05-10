import './Page.scss';

import {Gallery} from "../../../components/Gallery/Gallery";
import {UploadField} from "../../../components/UploadField/UploadField";

export const Page = () => {
    return <div className={'page'}>
        <div className="page__inside">
            <Header title={'Галерея изображений'}/>
            <Main />
            <Footer />
        </div>
    </div>
}


type headerProps = {
    title: string
}

const Header = ({title} : headerProps) => <header className={'header'}>
    <h1 className="header__title">{title}</h1>
</header>;
const Main = () => <main>
    <Gallery />
</main>;
const Footer = () => <footer className={"footer"}></footer>;