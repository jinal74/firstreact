import React, { useState } from 'react';

function Country(props) {
    const [ country ,setCountry] = useState('India');

    return (
        <div>
            <h1>{country} is my country.</h1>
            <button onClick={() => setCountry(props.con)}>Change</button>
            <button onClick={() => setCountry('India')}>Refresh</button>
        </div>
    );
}

export default Country;
