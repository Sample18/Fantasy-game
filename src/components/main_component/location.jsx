import React from 'react';

function Location ({locId, name, description, event, locImg, visible}) {
    console.log(name);

    return visible && <div className='location'>
        <img src={locImg} width='500px' />
        <h1 className='location_h1'>{name}</h1>
        <p className='location_p'>{description}</p>
        <span className='location_sp'>{event}</span>
    </div>
}

export default Location