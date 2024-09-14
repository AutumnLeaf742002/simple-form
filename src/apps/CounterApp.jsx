import { useState } from "react"

export const CounterApp = () => {

    const [counters, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })

    const {counter1, counter2, counter3} = counters

    return (
        <>
            <h1>Counter 1: {counter1}</h1>
            <h1>Counter 2: {counter2}</h1>
            <h1>Counter 3: {counter3}</h1>

            <button 
            onClick={()=>{setCounter(
                {
                    ...counters,
                    counter1: counter1 + 1
                }
            )}} 
            type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                +1
            </button>

            <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                -1
            </button>
        </>
    )
}
