import React, { useState } from 'react'

const DemouseState = () => {
    // const [count, setCnt] = useState(0)
    // const increment = function () {
    //     setCnt(count + 1)
    // }

    // const decrement = () => {
    //     if (count > 0) {
    //         setCnt(count - 1)
    //     }
    // }

    const [std, setStd] = useState(["Jatin", "Jay", "Jigo"])
    const addValue = (e) => {
        setStd((oldStd) => [...oldStd, e.target.value])
    }
    return (
        <>
            {/* <h1>{count}</h1>
            <button onClick={() => {
                increment()
            }}>Increment</button>
            <button onClick={() => {
                decrement()
            }}>Decrement</button> */}
            <input type="text" onBlur={(event) => {
                addValue(event)
                console.log(event);

            }} />
            {std.map((result) => {
                return (
                    <h1>{result}</h1>
                )
            })}

        </>
    )
}

export default DemouseState