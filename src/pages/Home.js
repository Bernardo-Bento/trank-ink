import React from 'react'
import "../styles/Home.css"
import background from "../assets/Home-background-image.png"
import DownArrow from "../assets/home downArrow.png"
import Fade from 'react-reveal/Fade';

import DownArrowMobile from "../assets/DownArrowMobile.png"

function Home({ reference, toAbout }) {
    return (
        <div className='home' >
            <div className="home__left">
                <Fade left>
                    <div className="home__left__container">
                        <h1 ref={reference}>You Imagine, We Create</h1>
                        <button onClick={() => { toAbout() }}>
                            <img src={DownArrow} alt="" className='web' />
                            <img src={DownArrowMobile} alt="" className='mobile' />
                        </button>
                    </div>
                </Fade>
            </div>

            <div className="home__right">
                <img src={background} alt="" />
            </div>
        </div>
    )
}

export default Home