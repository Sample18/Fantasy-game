import React from 'react';
import PropTypes from 'prop-types';

function Character({
    name,
    health,
    mana,
    strength,
    agility,
    wisdom,
    charImg,
    visible,
}) {

    return visible &&
        <div className='char_stats'>
            <img src={charImg} height='250' width='125' />
            <h3>{name}</h3>
            <p>Здоровье: <span>{health}</span></p>
            <p>Мана: <span>{mana}</span></p>
            <p>Сила: <span>{strength}</span></p>
            <p>Ловкость: <span>{agility}</span></p>
            <p>Мудрость: <span>{wisdom}</span></p>
            <button className="game_button">Инвентарь</button>
            <button className="game_button">Журнал заданий</button>
        </div>

}

Character.propTypes = {
    name: PropTypes.string,
    charImg: PropTypes.string,
    health: PropTypes.number,
    mana: PropTypes.number,
    strength: PropTypes.number,
    agility: PropTypes.number,
    wisdom: PropTypes.number,
    visible: PropTypes.bool,
}

export default Character