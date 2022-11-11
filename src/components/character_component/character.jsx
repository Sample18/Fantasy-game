import React, { useState } from 'react';
import charImg from '../images/characters/1.jpg'

const Character = () => {

    const [visible, setVisible] = useState(true)
    const [style, setStyle] = useState('start_game_container')

    function handleGamePreviev() {
        const gamePreviev = document.querySelector('.game_previev')
        gamePreviev.className = 'game_previev game_previev_hid'
        setStyle((prevState) => prevState += ' start_game_container_hid')
        setTimeout(() => {
            gamePreviev.remove()
            setVisible((prevState) => prevState = false)
        }, 2500)
    }

    function renderNgMenu() {
        return (
            visible && <div className={style}>
                <button className="start_game" onClick={handleGamePreviev}>Новая игра</button>
                <button className="load_game">Загрузить</button>
            </div>
        )
    }

    function renderCharacter() {
        return <img className='main_char' src={charImg} />
    }

    return (
        <div className="character_container">
            {renderNgMenu() || renderCharacter()}
        </div>
    )
}
export default Character