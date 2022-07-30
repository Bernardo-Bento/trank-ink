import React, { useEffect, useState } from 'react'
import Logo from "../assets/Trank Ink Logo.jpg"
import "../styles/Navbar.css"
//import menuIcon from "../assets/menuIcon.png"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import EnglishFlag from "../assets/English Flag.PNG"
import PortugueseFlag from "../assets/Portuguese Flag.PNG"


function Navbar({ toAbout, toProcess, toWorks, toContacts, toHome, language, onLanguageClick }) {
    const [open, setOpen] = useState(false);
    const [about, setAbout] = useState("");
    const [process, setProcess] = useState("");
    const [works, setWorks] = useState("");
    const [contacts, setContacts] = useState("");
    const [flag, setFlag] = useState()

    useEffect(() => {
        if (language === "eng") {
            setAbout("About Me");
            setProcess("Process");
            setWorks("Works");
            setContacts("Contacts");
            setFlag(EnglishFlag);
        }

        if (language === "pt") {
            setAbout("Sobre Mim");
            setProcess("Processo");
            setWorks("Trabalhos");
            setContacts("Contactos");
            setFlag(PortugueseFlag)


        }
    }, [])


    return (
        <div className='navbar'>

            <div className="navbar__left">
                <a onClick={() => { toHome() }}>
                    <img src={Logo} alt="" />
                </a>
            </div>

            <div className="navbar__right">
                <a onClick={() => { toAbout() }}>{about}</a>
                <a onClick={() => { toProcess() }}>{process}</a>
                <a onClick={() => { toWorks() }}>{works}</a>
                <a onClick={toContacts}>{contacts}</a>
                {/**    Flag Changer (TO DO!)
                 <button onClick={onLanguageClick}>
                    <img src={flag} alt="" />
                </button>
                 */}

                <div className="menuIcon">
                    <button onClick={() => { setOpen(!open) }}>
                        <MenuIcon />
                    </button>
                </div>
            </div>


            <div className="hiddenBar" id={open ? "open" : "close"}>
                <button onClick={() => { setOpen(!open) }}>
                    <CloseIcon />
                </button>
                <a onClick={() => { toAbout(); setOpen(false) }}>{about}</a>
                <a onClick={() => { toProcess(); setOpen(false) }}>{process}</a>
                <a onClick={() => { toWorks(); setOpen(false) }}>{works}</a>
                <a onClick={() => { toContacts(); setOpen(false) }}>{contacts}</a>


                {/**    Flag Changer (TO DO!)
                 <button onClick={onLanguageClick}>
                    <img src={flag} alt="" />
                </button>
                 */}
            </div>

        </div >
    )
}

export default Navbar