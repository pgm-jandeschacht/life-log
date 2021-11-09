import React from 'react';
import styled from 'styled-components';
import { Colors, Transition } from '../../variables'

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
    width: 100%;
    background: ${(StyledButtonNavProps) => (StyledButtonNavProps.buttonColor ? Colors.secondary : Colors.primary)};
        color: ${(StyledButtonNavProps) => (StyledButtonNavProps.buttonColor ? Colors.primary : Colors.secondary)};
    font-size: 2rem;
    font-weight: 700;
    padding: 1.25rem 0;
    border-radius: 10px;
    transition: ${Transition.normal};

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
