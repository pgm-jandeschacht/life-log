import React from 'react'
import styled from 'styled-components'
import { Colors, Shadow } from '../../variables'

interface TextAreaProps {
    placeholder: string,
    children: string
}

const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 2.5rem;
    font-weight: 900;
    margin-bottom: 2rem;

    textarea {
        margin-top: 2rem;
        border: 3px solid ${Colors.primary};
        border-radius: 10px;
        box-shadow: ${Shadow.small};
        background: ${Colors.secondary};
        padding: 1.5rem;
        font-size: 2rem;
        font-weight: 500;
        color: ${Colors.primary};
    }
`

const TextArea: React.FC<TextAreaProps> = ({ placeholder, children }) => {
    return (
        <StyledLabel>
            {children}
            <textarea required id="agenda_content" rows={5} name="agenda_content" placeholder={placeholder}></textarea>
        </StyledLabel>
    )
}

export default TextArea
