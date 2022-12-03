import React from 'react';
import PropTypes from 'prop-types';

function Action ({locId, buildings, onChangeLoc, onDownLoc, nextLocName}) {
    const down = () => <p className="action" onClick={() => onDownLoc(locId)}>Назад</p>
    if (buildings) return (
        <div className='actions'>
            {buildings.map((build, i) =>
            <p key={i} className="action" onClick={() => onChangeLoc(build)}>{build.name}</p>)}
        </div>
    )
    if (nextLocName) return (
        <>
            <p className="action" onClick={() => onChangeLoc(nextLocName)}>{nextLocName}</p>
            {down()}
        </>
    )
    return down()
}

Action.propTypes = {
    locId: PropTypes.number.isRequired,
    buildings: PropTypes.array,
    nextLocName: PropTypes.string,
    onChangeLoc: PropTypes.func,
    onDownLoc: PropTypes.func
}

export default Action