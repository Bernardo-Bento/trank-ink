import React, { useRef, useState, useEffect } from 'react'
import { WorksImages } from '../helpers/WorksImages'
import "../styles/Works.css"
import Fade from 'react-reveal/Fade';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Works({ reference, language }) {

    const [title, setTitle] = useState("");
    const [buttonText, setButtonText] = useState("");

    useEffect(() => {
        if (language === "pt") {
            setTitle("Trabalhos");
            setButtonText("Ver Mais");
        }

        if (language === "eng") {
            setTitle("Works");
            setButtonText("View More");
        }

    }, [])


    return (



        <div>
            <div className='works' ref={reference}>
                <Fade bottom>
                    <h1 >{title}</h1>

                    <div className="works__container" >
                        {WorksImages.map((item, key) => {
                            return (
                                <div className="works__item">
                                    <a href={item.link} target="_blank">
                                        <img src={item.image} alt="" />
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                    <a href="https://www.facebook.com/jbtrankink/photos/?ref=page_internal"
                        target="_blank">
                        <div className="viewMore__button">{buttonText}</div>
                    </a>
                </Fade>
            </div>
        </div>

    )
}

export default Works