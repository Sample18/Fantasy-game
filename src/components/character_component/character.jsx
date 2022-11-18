import React from 'react';

function Character(props) {

    const {
        id,
        name,
        health,
        mana,
        strength,
        agility,
        wisdom,
        charImg,
    } = props

    return <div className='char_stats'>
        <img src={charImg} height='250' width='125' />
        <h3>{name}</h3>
        <p>Здоровье:<span>{health}</span></p>
        <p>Мана:<span>{mana}</span></p>
        <p>Сила:<span>{strength}</span></p>
        <p>Ловкость:<span>{agility}</span></p>
        <p>Мудрость:<span>{wisdom}</span></p>
    </div>

}
export default Character