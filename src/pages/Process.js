import React, { useEffect, useState } from 'react'
import "../styles/Process.css"
import Item from '../components/Item'
import { ProcessesList, ProcessesListPt } from '../helpers/ProcessesList'
import Fade from 'react-reveal/Fade';

function Process({ reference, language }) {

    const [title, setTitle] = useState("");

    useEffect(() => {
        if (language === "eng") {
            setTitle("Process");
        }


        if (language === "pt") {
            setTitle("Processo");
        }
    }, [])


    return (

        <div >
            <div className='process' ref={reference}>
                <Fade bottom >
                    <h1 >{title}</h1>

                    <div className="process__itemsContainer" >
                        {language === "pt" && ProcessesListPt.map((item, key) => {
                            return (
                                <Item
                                    key={key}
                                    image={item.image}
                                    title={item.title}
                                    description={item.description}
                                />
                            )
                        })}

                        {language === "eng" && ProcessesList.map((item, key) => {
                            return (
                                <Item
                                    key={key}
                                    image={item.image}
                                    title={item.title}
                                    description={item.description}
                                />
                            )
                        })}

                    </div>
                </Fade>
            </div>
        </div>

    )
}

export default Process