import { useState } from "react"

export const useCounter = ( initialValue = 10 )=>{
    initialValue = initialValue < 0 ? 0:initialValue
    const [counter, setCounter] = useState(initialValue)

    return {
        counter,
        increment: () => {setCounter(counter+1)},
        decrement: () => {setCounter(()=>counter <= 1 ? 1: counter-1)},
        reset: () => {setCounter(initialValue)},
    }
}