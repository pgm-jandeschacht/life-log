import React from 'react'
import styled from 'styled-components';
import { Colors, Breakpoint } from '../../variables';

interface ButtonIconProps {
    children: React.ReactNode,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

const StyledButton = styled.button`
    background: ${Colors.secondary};
    padding: 0.5625rem 0.875rem;
    border-radius: 50%;
    
    @media (min-width: ${Breakpoint.small}) {
        padding: 0.6875rem 1rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        padding: 0.77rem 1.25rem;
    }

    svg {
        color: ${Colors.primary};
        width: 1.3rem !important;
        height: auto;
        
        @media (min-width: ${Breakpoint.small}) {
            width: 1.5rem !important;
        }
        @media (min-width: ${Breakpoint.medium}) {
            width: 2rem !important;
        }
    }
`

const ButtonIcon = ({ children, onClick }: ButtonIconProps) => {
    return (
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
    )
}

export default ButtonIcon;
