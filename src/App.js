import './App.css';
import { useRef, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Process from './pages/Process';
import Works from './pages/Works';
import Contacts from './pages/Contacts';

function App() {
  const home = useRef(null);
  const aboutMe = useRef(null);
  const process = useRef(null);
  const works = useRef(null);
  const contacts = useRef(null);
  const [language, setLanguage] = useState("pt");


  const manageLanguageClick = () => {
    if (language === "pt") {
      setLanguage("eng");
    }

    else if (language === "eng") {
      setLanguage("pt");
      console.log("changed to : " + language);
    }
  }


  const scrollToSection = (elementRef) => {
    const topPixel = (elementRef.current.offsetTop);
    window.scrollTo({
      top: topPixel,
      behavior: 'smooth'
    });
    elementRef.current.value = null;
  }




  return (
    <div className="App" >
      {/**Navbar */}
      <Navbar
        onLanguageClick={() => { manageLanguageClick() }}
        language={language}
        toHome={() => { scrollToSection(home) }}
        toAbout={() => scrollToSection(aboutMe)}
        toProcess={() => { scrollToSection(process) }}
        toWorks={() => { scrollToSection(works) }}
        toContacts={() => { scrollToSection(contacts) }}
      />
      {/**Body */}

      <Home reference={home} toAbout={() => { scrollToSection(aboutMe) }} />
      <AboutMe reference={aboutMe} language={language} />
      <Process reference={process} language={language} />
      <Works reference={works} language={language} />
      <Contacts reference={contacts} language={language} />

    </div >
  );
}

export default App;
