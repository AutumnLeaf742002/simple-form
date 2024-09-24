import { useState } from 'react'

export const useForm = (initialForm = {}) => {

    const [stateForm, setStateForm] = useState(initialForm)

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

    const onResetForm = ()=>{
        setStateForm(initialForm)
    }

    return {...stateForm, onChange, validateEmailFormat, onResetForm}
}