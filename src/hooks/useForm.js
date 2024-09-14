import { useState } from 'react'

export const useForm = (state = {}) => {

    const [stateForm, setStateForm] = useState(state)

    const onChange = (e)=>{
        setStateForm({...stateForm, [e.target.name]: e.target.value})
    }

    const validateEmailFormat = (email)=>{
        const domains = ["@gmail.com", "@hotmail.com", "@yahoo.com", "@outlook.com"]

        if(email === ''){
            return true
        }

        return domains.some(domain => email.includes(domain))
    }

    return {...stateForm, onChange, validateEmailFormat}
}