import React, { useState, useEffect } from 'react'
import "../styles/Contacts.css"
import Logo from "../assets/Trank Ink Logo.jpg"
import Fade from 'react-reveal/Fade';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';



function Contacts({ reference, language }) {
    const [text, setText] = useState("");

    useEffect(() => {
        if (language === "pt") {
            setText("Contacta-me");
        }

        if (language === "eng") {
            setText("Contact me");
        }
    }, [])


    return (
        <div>
            <div className='contacts' ref={reference}>
                <Fade left>
                    <div className="contacts__left" >
                        <img src={Logo} alt="" />
                    </div>
                </Fade>
                <Fade right>
                    <div className="contacts__right">
                        <h1 >{text}</h1>
                        <a href="https://www.facebook.com/jbtrankink/?ref=page_internal" target="_blank">
                            <div className="contacts__item">
                                <FacebookIcon />
                                <h3>Facebook</h3>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/trank.ink/" target="_blank">
                            <div className="contacts__item">
                                <InstagramIcon />
                                <h3>Instagram</h3>
                            </div>
                        </a>
                        <a href="https://web.whatsapp.com/" target="_blank">
                            <div className="contacts__item">
                                <WhatsAppIcon />
                                <h3>967 349 154</h3>
                            </div>
                        </a>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Contacts