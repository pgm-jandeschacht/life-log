import React from 'react';
import styled from 'styled-components';
import { Colors, Transition, Breakpoint } from '../../variables'

interface ButtenNavProps {
    children: React.ReactNode,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    backgroundColorButton: string,
    buttonColorButton: boolean
}

interface StyledButtonNavProps {
    backgroundColor: string,
    buttonColor: boolean
}

const StyledButtonNav = styled.button<StyledButtonNavProps>`
    width: 66.6%;
    background: ${(StyledButtonNavProps) => (StyledButtonNavProps.buttonColor ? Colors.secondary : Colors.primary)};
    color: ${(StyledButtonNavProps) => (StyledButtonNavProps.buttonColor ? Colors.primary : Colors.secondary)};
    font-size: 1.25rem;
    font-weight: 700;
    padding: 0.75rem 0;
    border-radius: 10px;
    transition: ${Transition.normal};
    
    @media (min-width: ${Breakpoint.small}) {
        padding: 1rem 0;
        font-size: 1.75rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        padding: 1.25rem 0;
        font-size: 2rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        padding: 1rem 0;
        font-size: 1.4rem;
        width: 30%;
    }

    &:hover {
        transform: translateY(-5px);
        background: ${(StyledButtonNavProps) => (StyledButtonNavProps.buttonColor ? Colors.ternary : Colors.secondary)};
        color: ${(StyledButtonNavProps) => (StyledButtonNavProps.buttonColor ? Colors.primary : Colors.primary)};
    }

    svg {
        margin-left: 1rem;
    }
`

const ButtonNav = ({ children, onClick, backgroundColorButton, buttonColorButton }: ButtenNavProps) => {
    return (
        <StyledButtonNav buttonColor={buttonColorButton} backgroundColor={backgroundColorButton} onClick={onClick}>
            {children}
        </StyledButtonNav>
    )
}

export default ButtonNav
