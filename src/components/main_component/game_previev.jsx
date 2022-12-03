import React from 'react';
import mainImage from '../images/main_menu/1.jpg'
import PropTypes from 'prop-types';

const GamePreviev = ({style, visible}) => {
    return visible && 
        <div className={style}>
            <h1>Fantasy</h1>
            <img src={mainImage} alt="" />
        </div>
}

GamePreviev.propTypes = {
    style: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired
}

export default GamePreviev