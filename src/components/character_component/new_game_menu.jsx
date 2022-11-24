import React from 'react';

function NewGameMenu ({visible, style, onRender}) {
    return visible &&
    <div className={style}>
        <button className="game_button" onClick={onRender}>Новая игра</button>
        <button className="game_button">Загрузить</button>
    </div>
}

export default NewGameMenu