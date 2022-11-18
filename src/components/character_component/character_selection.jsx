import React from 'react';
import { fetchAll } from '../../API/character_list';

function CharacterSelection(props) {

    const { characters } = props

    return <div className='char_select_container'>
        <h1>Выберите персонажа</h1>
        <div className='char_select'>
            {characters.map(char =>
                <div key={char.id} className='chars'
                    onClick={() => props.onRender(char.id)}>
                    <img src={char.charImg} height='250' />
                    <h3>{char.name}</h3>
                </div>)}
        </div>
    </div>
}

export default CharacterSelection