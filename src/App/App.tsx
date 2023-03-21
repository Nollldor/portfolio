import React from 'react';
import './App.css';
import {Header} from "../components/header/Header";
import {Home} from "../components/home/Home";
import {Skills} from "../components/skills/Skills";
import {Works} from "../components/works/Works";
import {Contacts} from "../components/Contacts/Contacts";
import {Footer} from "../components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <Home/>
                <Skills/>
                <Works/>
                <Contacts/>
            </main>
            <Footer />
        </div>
    );
}

export default App;
