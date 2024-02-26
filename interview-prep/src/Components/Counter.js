import React, {useEffect, useState} from 'react';
import '../App.css';
export default function Counter(){
    const [count, setCount] = useState(0)
    function increment(){
        setCount(count+1)
    }
    function decrement(){
        setCount(count-1)
    }
    return (
        <div>
        <h1>{count}</h1>
        <button onClick={increment}>Click Me to increase</button>
        <button onClick={decrement}>Click Me to decrease</button>
        </div>
    )
}