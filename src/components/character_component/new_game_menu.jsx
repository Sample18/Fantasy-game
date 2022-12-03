import React from 'react';
import PropTypes from 'prop-types';

function NewGameMenu ({visible, style, onRender}) {
    return visible &&
    <div className={style}>
        <button className="game_button" onClick={onRender}>Новая игра</button>
        <button className="game_button">Загрузить</button>
    </div>
}

NewGameMenu.propTypes = {
    visible: PropTypes.bool.isRequired,
    style: PropTypes.string.isRequired,
    onRender: PropTypes.func.isRequired
}

export default NewGameMenu