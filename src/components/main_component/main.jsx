import React from 'react';
import Action from '../action_component/action';
import GamePreviev from './game_previev';
import Location from './location';



const Main = () => {
    return (
        <div className="main_container">
            <div className="world_container">
                <GamePreviev />
            </div>
            <Action />
        </div>
    )
}

export default Main