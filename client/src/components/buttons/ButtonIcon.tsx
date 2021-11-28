import React from 'react'
import styled from 'styled-components';
import { Colors, Breakpoint, Transition } from '../../variables';

interface ButtonIconProps {
    children: React.ReactNode,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    background?: string
}

interface StyledButtonProps {
    backgroundColor?: string
}

const StyledButton = styled.button<StyledButtonProps>`
    background: ${(StyledButtonProps) => (StyledButtonProps.backgroundColor !== undefined ? StyledButtonProps.backgroundColor : Colors.secondary)};
    padding: 0.5625rem 0.875rem;
    border-radius: 50%;
    transition: ${Transition.normal};
    color: ${Colors.primary};
    
    @media (min-width: ${Breakpoint.small}) {
        padding: 0.6875rem 1rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        padding: 0.77rem 1.25rem;
    }

    &:hover {
        background: ${(StyledButtonProps) => (StyledButtonProps.backgroundColor !== undefined ? Colors.primary : Colors.primary)};
        color: ${(StyledButtonProps) => (StyledButtonProps.backgroundColor !== undefined ? StyledButtonProps.backgroundColor : Colors.secondary)};
    }

    svg {
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

const ButtonIcon = ({ children, onClick, background }: ButtonIconProps) => {
    return (
        <StyledButton backgroundColor={background} onClick={onClick}>
            {children}
        </StyledButton>
    )
}

export default ButtonIcon;
