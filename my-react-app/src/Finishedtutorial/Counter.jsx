// updater function is function passed to setState to update state based on previous state
// used for multiple state updates that depend on previous state value

import React, { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(c => c + 1); // take previous state value c and return c + 1, not count + 1
        setCount(c => c + 1); // value will increment to 2 because updater function uses latest state value
        setCount(c => c + 1); // final count will be 3 after all three calls
    }
    const decrement = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    const reset = () => {
        setCount(0); // no need for updater function here since not dependent on previous state 
    }

    return (
        <div className='counter-container'>
            <h1 className='count-display'>Count: {count}</h1>
            <button className='counter-button' onClick={increment}>Increment</button>
            <button className='counter-button' onClick={decrement}>Decrement</button>
            <button className='counter-button' onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;