import React, {useState} from 'react'

export interface DropDownProps {
    dummyText: any,
    name: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void  
}

const DropDown: React.FC<DropDownProps> = ({ dummyText, name, value, onChange, onBlur }) => {
    const [ currentValue, setCurrentValue ] = useState(value);
    return (
        <select 
        name={name}
        value={currentValue}
        onChange={(e) => {
            if(onChange) onChange(e);
            setCurrentValue(e.currentTarget.value)
        }}
        onBlur={onBlur}
        >
            {dummyText.map((optionItem: any) => (
                <option value={optionItem.id}>{optionItem.value}</option>
            ))}
        </select>
    )
}

export default DropDown
