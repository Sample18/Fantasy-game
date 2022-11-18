import React from 'react';
import mainImage from '../images/main_menu/1.jpg'

const GamePreviev = (props) => {

    function renderGamePreviev() {
        return <div className={props.children}>
            <h1>Fantasy</h1>
            <img src={mainImage} alt="" />
        </div>
    }



    return renderGamePreviev()
}

export default GamePreviev