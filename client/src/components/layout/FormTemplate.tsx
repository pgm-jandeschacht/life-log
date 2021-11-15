import React from 'react'
import styled from 'styled-components'
import { Colors, Shadow, Transition } from '../../variables'
import { ButtonForm } from '../buttons'

interface FormTemplateProps {
    page: string,
    color: string,
    submitting: boolean
}

interface StyledButtonProps {
    colorCode: string
}

const StyledButtons = styled.div<StyledButtonProps>`
    background: ${Colors.primary};
    display: flex;
    padding: 2rem 4rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;

    button, a {
        width: 100%;
        padding: 1.5rem;
        background: ${Colors.ternary};
        border-radius: 10px;
        box-shadow: ${Shadow.altSmall};
        transition: ${Transition.normal};
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
    
        &:hover {
            transform: translateY(-5px);
            background: ${Colors.secondary};
        }
        
    }
    
    button {
        margin-left: 1.5rem;
        background: ${(StyledButtonProps) => StyledButtonProps.colorCode};
        
        &:hover {
            background: ${Colors.secondary};
            color: ${Colors.primary};
        }
}
`

const FormTemplate: React.FC<FormTemplateProps> = ({ page, color, submitting }) => {

    const handleClicking = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.history.back();
    }

    return (
        <StyledButtons colorCode={color}>
            <a href="/" onClick={handleClicking}>Cancel</a>
            {/* onClick is added but just because there is no query yet */}
            <ButtonForm disabled={submitting} type="submit">Add to {page}</ButtonForm>
        </StyledButtons>
    )
}

export default FormTemplate
