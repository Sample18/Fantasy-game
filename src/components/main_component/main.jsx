import React, { useState } from 'react';
import Action from '../action_component/action';
import GamePreviev from './game_previev';
import CharacterSelection from '../character_component/character_selection';
import { fetchAll } from '../../API/character_list';
import Character from '../character_component/character';



const Main = () => {

    const [visible, setVisible] = useState({
        ngMenu: true,
        gamePreviev: true,
        charSelect: false,
    })
    const [style, setStyle] = useState({
        sgStyle: 'start_game_container',
        gpStyle: 'game_previev',
    })
    const [characters, setCharacters] = useState(fetchAll())
    const [character, setCharacter] = useState(null)

    function handleGamePreviev() {
        setStyle(prevState => prevState = {
            sgStyle: 'start_game_container _hidden',
            gpStyle: 'game_previev _hidden',
        })
        setTimeout(() => {
            const newVisible = { ...visible }
            newVisible.gamePreviev = false
            newVisible.ngMenu = false
            setVisible(newVisible)
        }, 2500)
    }

    function handleRenderChar(id) {
        const newVisible = { ...visible }
        newVisible.charSelect = true
        setVisible(newVisible)
        const char = characters.filter(char => char.id === id)
        setCharacter(char[0])
    }

    function renderNgMenu() {
        return (
            visible.ngMenu && <div className={style.sgStyle}>
                <button className="start_game" onClick={handleGamePreviev}>Новая игра</button>
                <button className="load_game">Загрузить</button>
            </div>
        )
    }

    function renderGamePreviev() {
        return visible.gamePreviev && <GamePreviev>{style.gpStyle}</GamePreviev>
    }

    function renderCharacterSelection() {
        return !visible.charSelect && <CharacterSelection characters={characters} onRender={handleRenderChar} />
    }

    return (
        <>
            <div className="main_container">
                <div className="world_container">
                    {renderGamePreviev() || renderCharacterSelection()}
                </div>
                <Action />
            </div>
            <div className="character_container">
                {!visible.charSelect ? renderNgMenu() : <Character {...character} />}
            </div>
        </>
    )
}

export default Main