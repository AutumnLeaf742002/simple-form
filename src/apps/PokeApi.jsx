import { useState, useEffect } from "react"
import { useFetch, useCounter } from "../hooks"
import { LoadingSection, PokemonItem } from "../components"

export const PokeApi = () => {

    const { counter, increment, decrement, reset } = useCounter(1)
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/1')
    const { data, loading, hasError, error, ok } = useFetch(url)

    useEffect(() => {

        setUrl(`https://pokeapi.co/api/v2/pokemon/${counter}`)
    }, [counter])

    let count = 0

    return (
        <div className="w-screen min-h-screen bg-gray-700 text-white font-bold p-4">
            <h1 className="text-center text-2xl">
                Mis pokemones
            </h1>

            <div className="flex flex-col gap-5 mt-5">
            
            {
                loading?<div className="w-48 h-48"><LoadingSection /></div>:<PokemonItem id={data?.id} name={data?.name} sprite={data?.sprites.front_default} />
            }

            </div>

            <div className="flex gap-2 mt-3">
                <button
                    onClick={decrement}
                    className="btn btn-danger">
                    Anterior
                </button>

                <button 
                    onClick={reset}
                    className="btn btn-warning text-white">
                    Resetear
                </button>

                <button 
                    onClick={increment}
                    className="btn btn-success">
                    Siguiente
                </button>
            </div>

        </div>
    )
}