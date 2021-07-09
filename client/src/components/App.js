import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import SteamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import StreamCreate from "./streams/StreamCreate";
import StreamList from "./streams/StreamList";
import Header from "./Header";

const App = () => {
    return (
        <div>

            <BrowserRouter>
                <div className={`container`}>
                    <Header/>
                    <Route path={`/`} exact component={StreamList}/>
                    <Route path={`/streams/new`} component={StreamCreate}/>
                    <Route path={`/streams/delete`} component={SteamDelete}/>
                    <Route path={`/streams/edit`} component={StreamEdit}/>
                    <Route component={StreamShow} path={`/streams/show`}/>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;