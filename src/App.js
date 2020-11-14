import React from 'react';
import './App.css';
import {Header} from "./ui/header/Header";
import {Main} from "./ui/main/Main";
import {Skills} from "./ui/skills/Skills";
import {Contacts} from "./ui/contacts/Contacts";
import {Footer} from "./ui/footer/Footer";
import {Projects} from "./ui/projects/Projects";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
