import { useCounter } from '../hooks'

export const CounterWhitCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter(10)

    return (
        <>
            <h1 className="p-3 text-2xl">CounterWhitCustomHook</h1>
            <hr className="mb-3" />

            <h2 className="p-3 text-xl">Counter: {counter}</h2>

            <button 
                onClick={increment}
                type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    +1
            </button>

            <button
                onClick={reset}
                type="button" className="text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-blue-800">
                    Reset
            </button>

            <button 
                onClick={decrement}
                type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    -1
            </button>
        </>
    )
}