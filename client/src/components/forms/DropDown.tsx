import React from 'react'
import styled from 'styled-components'
import { Colors, Shadow } from '../../variables'

interface DropDownProps {
    children: string
    dummyText: any
}

const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 2.5rem;
    font-weight: 900;
    margin-bottom: 2rem;

    select {
        margin-top: 2rem;
        padding: 1.5rem;
        border: 3px solid ${Colors.primary};
        border-radius: 10px;
        box-shadow: ${Shadow.small};
        font-size: 2rem;
        font-weight: 700;
        color: ${Colors.primary};
        background: ${Colors.secondary};
        cursor: pointer;
    }
`

const DropDown: React.FC<DropDownProps> = ({ children, dummyText }) => {
    return (
        <StyledLabel>
            {children}
            <select required name="select_familymember" id="select_familymember">
                {dummyText.map((optionItem: any) => (
                    <option value={optionItem.id}>{optionItem.value}</option>
                ))}
            </select>
        </StyledLabel>
    )
}

export default DropDown
