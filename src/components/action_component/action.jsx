import React from 'react';

function Action ({locId, buildings, onChangeLoc, onDownLoc, nextLocName}) {
    const down = () => <p className="action" onClick={() => onDownLoc(locId)}>назад</p>
    if (buildings) return (
        <>
        <div className='actions'>
            {buildings.map((build, i) =>
            <p key={i} className="action" onClick={() => onChangeLoc(build)}>{build.name}</p>)}
        </div>
        {/* {down()} */}
        </>
    )
    if (nextLocName) return (
        <>
    <p className="action" onClick={() => onChangeLoc(nextLocName)}>{nextLocName}</p>
    {down()}
    </>
    )
    return down()
}

export default Action