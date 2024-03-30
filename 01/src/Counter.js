import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
    // let count = 0;
    const [count, setCount] = useState(0);

    console.log(count);
    console.log(useState());
    const handleClick = () => {
        setCount(count + 2);
    }

    // console.log(useState(5));
    return (
        <div className='counterTag'>
            <h1>{count}</h1>
            <button onClick={handleClick}>Increment by 2</button>
        </div>
    )
}

export default Counter
