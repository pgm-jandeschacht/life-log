import React, { useState } from 'react'

interface PasswordFieldProps {
    value: string
    name: string
    placeholder?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void  
}

const PasswordField: React.FC<PasswordFieldProps> = ({value, name, placeholder, onBlur, onChange}) => {
    const [ currentValue, setCurrentValue ] = useState(value);

    return (
        <input
        type="password"
        name={name}
        placeholder={placeholder}
        value={currentValue}
        onChange={(e) => {
            if(onChange) onChange(e);
            setCurrentValue(e.currentTarget.value)
        }}
        />
    )
}

export default PasswordField
