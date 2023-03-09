import React from 'react';
import './App.css';
import {Header} from "../components/header/Header";
import {Main} from "../components/main/Main";
import {Skills} from "../components/skills/Skills";
import {Works} from "../components/works/Works";
import {RemoteJob} from "../components/remoteJob/RemoteJob";
import {Contacts} from "../components/Contacts/Contacts";
import {Footer} from "../components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills />
            <Works />
            <RemoteJob />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
