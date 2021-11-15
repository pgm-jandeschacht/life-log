import React, {useState} from 'react'

export interface TextAreaProps {
    name: string,
    value: string,
    placeholder?: string,
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void  
}

const TextArea: React.FC<TextAreaProps> = ({ placeholder, value, name, onChange, onBlur }) => {
    const [ currentValue, setCurrentValue ] = useState(value);
    
    return (
        <textarea
        rows={5}
        name={name}
        placeholder={placeholder}
        value={currentValue}
        onChange={(e) => {
            if(onChange) onChange(e);
            setCurrentValue(e.currentTarget.value)
        }}
        onBlur={onBlur}
        ></textarea>
    )
}

export default TextArea
