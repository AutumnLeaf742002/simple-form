import { useEffect, useState } from 'react'
import { useForm } from '../hooks'

export const SimpleForm = () => {

    
    const [emailAccept, setEmailAccept] = useState(true)

    const stateForm = useForm({userName: '', email: ''})
    const { userName, email, onChange, validateEmailFormat } = stateForm

    useEffect(() => {

        validateEmailFormat(email)?setEmailAccept(true):setEmailAccept(false)
    }, [email])

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="flex w-screen h-screen sm:w-2/3 sm:h-[40rem] mx-auto items-center flex-col gap-3 sm:border sm:border-gray-300 p-3 sm:rounded-md">

                <h1 className="text-3xl font-bold">Simple Form</h1>
                <hr />
                <div className="flex flex-col items-center gap-3 w-full">
                    <input
                        onChange={onChange}
                        className="form-control w-2/3"
                        type="text" 
                        name="userName"
                        placeholder="Nombre de usuario"
                        value={userName}
                    />

                    <input
                        onChange={onChange}
                        className="form-control w-2/3"
                        type="text" 
                        name="email"
                        placeholder="Correo electronico"
                        value={email}
                    />

                    {
                        emailAccept === false &&
                        <p className="text-red-500">Email electronico invalido</p>
                    }

                    <button className='btn btn-primary'>
                        Enviar
                    </button>

                </div>
            </div>
        </div>
    )
}