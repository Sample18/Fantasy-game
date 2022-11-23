import React from 'react';

function Action ({buildings}) {
    console.log(buildings);
    return <div>
        {buildings.map((b, i) => <a key={i}>{b}</a>)}
    </div>
}

export default Action