import React, { useEffect, useState } from 'react';

function Timer2(props) {
    const [time ,setTime] = useState(new Date());

    const tick = () => {
        setTime(new Date())
    }

    useEffect (
        () => {
            setInterval (
                () => 
                    tick(),
                    1000
            )
        },
        [])

    return (
        <div class="timer">
            <h1>{time.toLocaleTimeString()}</h1>
        </div>
    );
}

export default Timer2;
