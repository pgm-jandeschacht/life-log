import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Breakpoint, Colors, Shadow, Transition } from '../../variables'
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
    padding: 1.5rem 1.5rem;
    padding-bottom: 1rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    border-radius: 20px 20px 0 0;
    @media (min-width: ${Breakpoint.medium}) {
        padding: 2rem 4rem;
        padding-bottom: 1.5rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        padding: 1.5rem 4rem;
        padding-bottom: 1rem;
    }
    
    button, a {
        width: 100%;
        padding: 0.75rem;
        background: ${Colors.ternary};
        border-radius: 10px;
        box-shadow: ${Shadow.altSmall};
        transition: ${Transition.normal};
        font-size: 1.2rem;
        font-weight: 700;
        text-align: center;
        @media (min-width: ${Breakpoint.small}) {
            padding: 1rem;
            font-size: 1.4rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            padding: 1.5rem;
            font-size: 2rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            padding: 1rem;
            font-size: 1.4rem;
        }
        
        &:hover {
            transform: translateY(-5px);
            background: ${Colors.secondary};
        }
        
    }
    
    button:last-of-type {
        margin-left: 1rem;
        background: ${(StyledButtonProps) => StyledButtonProps.colorCode};
        @media (min-width: ${Breakpoint.medium}) {
            margin-left: 1.5rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            margin-left: 1rem;
        }
        
        &:hover {
            background: ${Colors.secondary};
            color: ${Colors.primary};
        }
}
`

const FormTemplate: React.FC<FormTemplateProps> = ({ page, color, submitting }) => {
    const history = useHistory();
    const handleClicking = () => {
        history.goBack();
    }

    return (
        <StyledButtons colorCode={color}>
            <button onClick={handleClicking}>Cancel</button>
            {/* onClick is added but just because there is no query yet */}
            <ButtonForm disabled={submitting} type="submit">Add to {page}</ButtonForm>
        </StyledButtons>
    )
}

export default FormTemplate
