import React from 'react'
import "../styles/Item.css"

function Item({ image, title, description }) {
    return (
        <div className='item__container'>
            <div className="item__top">
                <img src={image} alt="" />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Item