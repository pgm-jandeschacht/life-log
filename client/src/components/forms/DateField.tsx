import React, { useState } from 'react'
import { TextFieldProps } from './TextField'

const DateField: React.FC<TextFieldProps> = ({ value, name, placeholder, onBlur, onChange }) => {
    const [ currentValue, setCurrentValue ] = useState(value);

    return (
        <input
        type="date"
        name={name}
        placeholder={placeholder}
        value={currentValue}
        onChange={(e) => {
            if(onChange) onChange(e);
            setCurrentValue(e.currentTarget.value)
        }}
        onBlur={onBlur}
        />
    )
}

export default DateField
