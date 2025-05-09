import React, { useState } from 'react'

export const useForms = (inicialForm = {}) => {
    
    const [formState, setFormState] = useState(inicialForm)
    
    const onInputChange = ({target}) => {
        const{name, value} = target
        setFormState({
            ...formState,
            [name]: value
        })
    }
    return {
        formState,
     onInputChange
    }
}
