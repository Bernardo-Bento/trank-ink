import React, { useState, useEffect } from 'react'
import "../styles/AboutMe.css"
import AboutMeImage from "../assets/about-me-image.png"
import Fade from 'react-reveal/Fade';

function AboutMe({ reference, language }) {

    const [title, setTitle] = useState("");
    const [aboutMe, setAboutMe] = useState("");

    useEffect(() => {
        if (language === "pt") {
            setTitle("Sobre Mim");
            setAboutMe("O meu nome é José Bento, também conhecido por Trank, e sou um apaixonado por arte de todo o tipo, desde música até desenho. A tatuagem sempre foi uma paixão minha na qual me sinto livre para ser criativo e deixar os meus pensamentos fluirem. Esta minha aventura começou à cerca de 2 anos num simples pensamento:“Porque não?”.  Procuro sempre bons desafios que me façam melhorar, tanto profissional como pessoalmente.  ")
        }

        if (language === "eng") {
            setTitle("About Me")
            setAboutMe("Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntudebitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit")
        }
    }, [])

    return (

        <div>
            <div className='aboutMe' ref={reference}>
                <Fade bottom>
                    <div className="aboutMe__left">
                        <h1 >{title}</h1>
                        <div className="image__mobile">
                            <img src={AboutMeImage} alt="" />
                        </div>
                        <p>{aboutMe}</p>
                    </div>

                    <div className="aboutMe__right">
                        <img src={AboutMeImage} alt="" />
                    </div>
                </Fade>
            </div>
        </div>

    )
}

export default AboutMe