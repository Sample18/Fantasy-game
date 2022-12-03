import React from 'react';
import PropTypes from 'prop-types';

function Location ({name, description, event, locImg, visible}) {
    return visible &&
    <div className='location'>
        <img src={locImg} width='500px' />
        <h1 className='location_h1'>{name}</h1>
        <p className='location_p'>{description}</p>
        <span className='location_sp'>{event}</span>
    </div>
}

Location.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    event: PropTypes.string.isRequired,
    locImg: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired
}

export default Location