import React from 'react';

function Location ({id, name, description, event, locImg}) {

    return <div>
        <img src={locImg} width='500px' />
        <h1>{name}</h1>
        <p>{description}</p>
        <span>{event}</span>
    </div>
}

export default Location