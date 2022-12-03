import React from 'react';
import PropTypes from 'prop-types';

function CharacterSelection({ characters, visible, onRender }) {
    return visible &&
     <div className='char_select_container'>
        <h1>Выберите персонажа</h1>
        <div className='char_select'>
            {characters.map(char =>
                <div key={char.id} className='chars'
                    onClick={() => onRender(char.id)}>
                    <img src={char.charImg} height='250' />
                    <h3>{char.name}</h3>
                </div>)}
        </div>
    </div>
}

CharacterSelection.propTypes = {
    characters: PropTypes.array.isRequired,
    visible: PropTypes.bool.isRequired,
    onRender: PropTypes.func.isRequired
}

export default CharacterSelection