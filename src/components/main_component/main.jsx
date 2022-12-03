import React, { useEffect, useState } from 'react';
import GamePreviev from './game_previev';
import CharacterSelection from '../character_component/character_selection';
import { fetchAll } from '../../API/character_list';
import { fetchLocation } from '../../API/location_list';
import Character from '../character_component/character';
import Location from './location';
import Action from '../action_component/action';
import NewGameMenu from '../character_component/new_game_menu';

const Main = () => {

    const [visible, setVisible] = useState({
        ngMenu: true,
        gamePreviev: true,
        charSelect: false,
        char: false,
        location: false,
    })
    const [style, setStyle] = useState({
        sgStyle: 'start_game_container',
        gpStyle: 'game_previev',
    })
    const [characters] = useState(fetchAll())
    const [character, setCharacter] = useState(null)
    const [locations] = useState(fetchLocation())
    const [location, setLocation] = useState(null)
    // const filteredLoc = locations ? locations.filter(l => l.id === 0)[0] : null

    function handleGamePreviev() {
        setStyle(prevState => prevState = {
            sgStyle: 'start_game_container _hidden',
            gpStyle: 'game_previev _hidden',
        })
        setTimeout(() => {
            const newVisible = { ...visible }
            newVisible.gamePreviev = !newVisible.gamePreviev
            newVisible.ngMenu = !newVisible.ngMenu
            newVisible.charSelect = !newVisible.charSelect
            setVisible(newVisible)
        }, 2500)
    }

    function handleRenderChar(id) {
        const newVisible = { ...visible }
        newVisible.charSelect = !newVisible.charSelect
        newVisible.char = !newVisible.char
        newVisible.location = !newVisible.location
        setVisible(newVisible)
        const char = characters.filter(char => char.id === id)
        setCharacter(...char)
    }

    function handleChangeLocation(build) {
        if (typeof build === 'string') {
            const newLoc = locations.filter(l => l.name === build)
            return setLocation(newLoc[0])
        }
        return setLocation(build)
    }

    function handleChangeBack(locId) {
        const prevLoc = locations.filter(l => l.locId === locId)
        setLocation(prevLoc[0])
    }

    useEffect(() => {
        if (visible.location) {setLocation(fetchLocation()[0])}
    }, [visible.location])

    return (
        <>
            <div className="main_container">
                <div className="world_container">
                    <GamePreviev style={style.gpStyle} visible={visible.gamePreviev}/>
                    <CharacterSelection characters={characters} visible={visible.charSelect} onRender={handleRenderChar} />
                    {location && <Location {...location} visible={visible.location}/>}
                </div>
                <div className="action_container">
                    {location && <Action
                     {...location}
                      onChangeLoc={handleChangeLocation}
                      onDownLoc={handleChangeBack}
                      />}
                </div>
            </div>
            <div className="character_container">
                <NewGameMenu visible={visible.ngMenu} style={style.sgStyle} onRender={handleGamePreviev}/>
                <Character {...character} visible={visible.char} />
            </div>
        </>
    )
}

export default Main