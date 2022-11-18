import React, { useState } from 'react';
import Action from '../action_component/action';
import GamePreviev from './game_previev';
import Location from './location';
import charImg from '../images/characters/1.jpg'



const Main = () => {

    const [visible, setVisible] = useState(true)
    const [style, setStyle] = useState({
        sgStyle: 'start_game_container',
        gpStyle: 'game_previev',
    })

    function handleGamePreviev() {
        setStyle(prevState => prevState = {
            sgStyle: 'start_game_container _hidden',
            gpStyle: 'game_previev _hidden',
        })
        setTimeout(() => {
            setVisible((prevState) => prevState = false)
        }, 2500)
    }

    function renderNgMenu() {
        return (
            visible && <div className={style.sgStyle}>
                <button className="start_game" onClick={handleGamePreviev}>Новая игра</button>
                <button className="load_game">Загрузить</button>
            </div>
        )
    }

    function renderCharacter() {
        return <img className='main_char' src={charImg} />
    }

    function renderGamePreviev() {
        return visible && <GamePreviev>{style.gpStyle}</GamePreviev>
    }

    return (
        <>
            <div className="main_container">
                <div className="world_container">
                    {renderGamePreviev()}
                </div>
                <Action />
            </div>
            <div className="character_container">
                {renderNgMenu() || renderCharacter()}
            </div>
        </>
    )
}

export default Main