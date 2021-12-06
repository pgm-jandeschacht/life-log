import React, {useState} from 'react'

export interface DropDownProps {
    dummyText: any,
    name: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void,
    dropDownTitle: string, 
    selected? : number
}

const DropDown: React.FC<DropDownProps> = ({ dummyText, name, value, onChange, onBlur, dropDownTitle = '', selected }) => {
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
            <option value={0}>{dropDownTitle}</option>
            {dummyText.map((optionItem: any) => (
                
                <option value={optionItem.id} selected={optionItem.id === selected ? true : false} >{optionItem.value}</option>
            ))}
        </select>
    )
}

export default DropDown
