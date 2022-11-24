import React from 'react';
import mainImage from '../images/main_menu/1.jpg'

const GamePreviev = ({style, visible}) => {
    return visible && 
    <div className={style}>
        <h1>Fantasy</h1>
        <img src={mainImage} alt="" />
    </div>
}

export default GamePreviev