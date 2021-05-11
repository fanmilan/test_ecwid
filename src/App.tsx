import React from 'react';
import './App.css';
import {Page} from "./common/components/Page/Page";
import {Provider} from "react-redux";
import {store} from "./redux/store/store";
import {Gallery} from "./components/Gallery/Gallery";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Page name={'Галерея изображений'}>
                    <Gallery />
                </Page>
            </div>
        </Provider>
    );
}

export default App;
