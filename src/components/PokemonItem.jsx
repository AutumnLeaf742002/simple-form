import { useFetch } from "../hooks"

export const PokemonItem = ({ id, name, sprite }) => {

    return (
        <div className="w-full">
            <div className="w-48 h-48 bg-gray-200 text-black rounded-md">
                <img
                    className="w-full h-full object-cover"
                    src={sprite} alt="pokemon name" />
            </div>

            <p>
                #{id} - {name}
            </p>
        </div>
    )
}